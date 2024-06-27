import { useState, useEffect, useMemo } from "react";
import React from "react";
import { Head } from "@inertiajs/react";
import {
    Input,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Tooltip,
    DateRangePicker,
    Pagination,
    Chip,
    Select,
    SelectItem,
} from "@nextui-org/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { CheckIcon, DeleteIcon, SearchIcon } from "@/Components/Icons";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";
import { FaCheck, FaTimes, FaTimesCircle } from "react-icons/fa";

export default function Index({ auth, guestLogs }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [dateRange, setDateRange] = useState({ start: null, end: null });
    const [filteredGuestLogs, setFilteredGuestLogs] = useState(guestLogs);
    const [page, setPage] = useState(1);
    const rowsPerPage = 8;
    const [selectedInterval, setSelectedInterval] = useState("");

    const handleDelete = (guestId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.delete(route("guest.log.destroy", { guestId }), {
                    onSuccess: () => {
                        Swal.fire(
                            "Deleted!",
                            "The guest has been deleted.",
                            "success"
                        );
                        // Reload the page to reflect changes
                        Inertia.reload();
                    },
                    onError: () => {
                        Swal.fire(
                            "Error!",
                            "An error occurred while deleting the guest.",
                            "error"
                        );
                    },
                });
            }
        });
    };

    useEffect(() => {
        const filterLogsByInterval = () => {
            const now = new Date();
            let filterDate = null;

            switch (selectedInterval) {
                case "past24Hours":
                    filterDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
                    break;
                case "past7Days":
                    filterDate = new Date(
                        now.getTime() - 7 * 24 * 60 * 60 * 1000
                    );
                    break;
                case "past30Days":
                    filterDate = new Date(
                        now.getTime() - 30 * 24 * 60 * 60 * 1000
                    );
                    break;
                default:
                    filterDate = null;
                    break;
            }

            const filteredLogs = guestLogs.filter((guestLog) => {
                const logDate = new Date(guestLog.check_in_time);
                return filterDate ? logDate >= filterDate : true;
            });

            setFilteredGuestLogs(filteredLogs);
        };

        filterLogsByInterval();
    }, [selectedInterval, guestLogs]);

    const filterLogs = (guestLog) => {
        const matchesSearchTerm = guestLog.guest.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchesDateRange =
            (!dateRange.start ||
                new Date(guestLog.created_at) >= new Date(dateRange.start)) &&
            (!dateRange.end ||
                new Date(guestLog.created_at) <= new Date(dateRange.end));

        return matchesSearchTerm && matchesDateRange;
    };

    const displayedGuestLogs = filteredGuestLogs.filter(filterLogs);

    const pages = Math.ceil(displayedGuestLogs.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        return displayedGuestLogs.slice(start, end);
    }, [page, rowsPerPage, displayedGuestLogs]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Guest Logs
                </h2>
            }
        >
            <Head title="Guests Logs" />
            <div className="py-12 p-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2 justify-end mb-4">
                            <Input
                                variant="bordered"
                                placeholder="Search by guest name"
                                className="w-full sm:max-w-[35%]"
                                startContent={
                                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                                }
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />

                            <Select
                                variant="bordered"
                                placeholder="Filter by Interval"
                                value={selectedInterval}
                                onChange={(e) =>
                                    setSelectedInterval(e.target.value)
                                }
                            >
                                <SelectItem value="current" key="current">
                                    All Time
                                </SelectItem>
                                <SelectItem
                                    value="past24Hours"
                                    key="past24Hours"
                                >
                                    Past 24 Hours
                                </SelectItem>
                                <SelectItem value="past7Days" key="past7Days">
                                    Past 7 Days
                                </SelectItem>
                                <SelectItem value="past30Days" key="past30Days">
                                    Past 30 Days
                                </SelectItem>
                            </Select>

                            <DateRangePicker
                                label="Filter by Date"
                                labelPlacement="top"
                                className="max-w-xs"
                                variant="bordered"
                                visibleMonths={2}
                                onChange={(range) => setDateRange(range)}
                            />
                        </div>

                        <Table
                            selectionMode="single"
                            aria-label="Guests Table"
                            bottomContent={
                                <div className="flex w-full justify-center">
                                    <Pagination
                                        isCompact
                                        showControls
                                        showShadow
                                        color="secondary"
                                        page={page}
                                        total={pages}
                                        onChange={(page) => setPage(page)}
                                    />
                                </div>
                            }
                            classNames={{
                                wrapper: "min-h-[222px]",
                            }}
                        >
                            <TableHeader>
                                <TableColumn className="text-success">
                                    # ({(page - 1) * rowsPerPage + 1}-
                                    {Math.min(
                                        page * rowsPerPage,
                                        displayedGuestLogs.length
                                    )}{" "}
                                    of {displayedGuestLogs.length})
                                </TableColumn>
                                <TableColumn>Guest ID</TableColumn>
                                <TableColumn>Guest Name</TableColumn>
                                <TableColumn>Meeting With</TableColumn>
                                <TableColumn>Purpose of Visit</TableColumn>
                                <TableColumn>Check In</TableColumn>
                                <TableColumn>Check Out</TableColumn>
                                <TableColumn>Status</TableColumn>
                            </TableHeader>
                            <TableBody
                                emptyContent={"No guests found."}
                                items={items}
                            >
                                {items.map((guestLog, index) => (
                                    <TableRow key={guestLog.id}>
                                        <TableCell className="text-success">
                                            {(page - 1) * rowsPerPage +
                                                index +
                                                1}
                                        </TableCell>
                                        <TableCell>
                                            {guestLog.guest_id}
                                        </TableCell>
                                        <TableCell>
                                            {guestLog.guest.name}
                                        </TableCell>
                                        <TableCell>
                                            {guestLog.meeting_with}
                                        </TableCell>
                                        <TableCell>
                                            {guestLog.purpose_of_visit}
                                        </TableCell>
                                        <TableCell>
                                            {new Date(
                                                new Date(
                                                    guestLog.check_in_time
                                                ).getTime() -
                                                    new Date(
                                                        guestLog.check_in_time
                                                    ).getTimezoneOffset() *
                                                        60000
                                            ).toLocaleString([], {
                                                year: "numeric",
                                                month: "numeric",
                                                day: "numeric",
                                                hour: "numeric",
                                                minute: "numeric",
                                                hour12: true,
                                            })}
                                        </TableCell>
                                        <TableCell>
                                            {guestLog.check_out_time
                                                ? new Date(
                                                      new Date(
                                                          guestLog.check_out_time
                                                      ).getTime() -
                                                          new Date(
                                                              guestLog.check_out_time
                                                          ).getTimezoneOffset() *
                                                              60000
                                                  ).toLocaleString([], {
                                                      year: "numeric",
                                                      month: "numeric",
                                                      day: "numeric",
                                                      hour: "numeric",
                                                      minute: "numeric",
                                                      hour12: true,
                                                  })
                                                : "Not checked out yet"}
                                        </TableCell>
                                        <TableCell>
                                            <Chip
                                                color={
                                                    guestLog.check_out_time
                                                        ? "success"
                                                        : "danger"
                                                }
                                                startContent={
                                                    guestLog.check_out_time ? (
                                                        <CheckIcon />
                                                    ) : (
                                                        <FaTimesCircle className="w-5 h-5" />
                                                    )
                                                }
                                                variant="flat"
                                            >
                                                {guestLog.check_out_time
                                                    ? "Done"
                                                    : "No Checkout"}
                                            </Chip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
