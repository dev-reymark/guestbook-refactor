import { useState, useEffect } from "react";
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
    getKeyValue,
    Chip,
    Select,
    SelectItem,
} from "@nextui-org/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { DeleteIcon, SearchIcon } from "@/Components/Icons";
import Swal from "sweetalert2";
import { Inertia } from "@inertiajs/inertia";

export default function Index({ auth, guestLogs }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [dateRange, setDateRange] = useState({ start: null, end: null });

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

    const filteredGuestLogs = guestLogs.filter(filterLogs);

    const [page, setPage] = React.useState(1);
    const rowsPerPage = 15;

    const pages = Math.ceil(filteredGuestLogs.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredGuestLogs.slice(start, end);
    }, [page, rowsPerPage, filteredGuestLogs]);

    const [filterValue, setFilterValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(13);
    const [selectedInterval, setSelectedInterval] = useState("past24Hours");
    const [filteredLogs, setFilteredLogs] = useState([]);

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

            if (filterDate) {
                const filteredLogs = guestLogs.filter(
                    (guestLog) => new Date(guestLog.check_in_time) >= filterDate
                );
                setFilteredLogs(filteredLogs);
            } else {
                setFilteredLogs(guestLogs);
            }
        };

        filterLogsByInterval();
    }, [selectedInterval, guestLogs]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredGuestLogs.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

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
            <div className="py-12">
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
                                placeholder="Past 24 Hours"
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
                                        filteredGuestLogs.length
                                    )}{" "}
                                    of {filteredGuestLogs.length})
                                </TableColumn>
                                <TableColumn>Guest ID</TableColumn>
                                <TableColumn>Guest Name</TableColumn>
                                <TableColumn>Purpose of Visit</TableColumn>
                                <TableColumn>Check In</TableColumn>
                                <TableColumn>Check Out</TableColumn>
                                {/* <TableColumn>Actions</TableColumn> */}
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
                                            {guestLog.purpose_of_visit}
                                        </TableCell>
                                        <TableCell>
                                            {guestLog.check_in_time}
                                        </TableCell>
                                        <TableCell>
                                            {guestLog.check_out_time}
                                        </TableCell>
                                        <TableCell>
                                            <Chip
                                                color={
                                                    guestLog.check_out_time
                                                        ? "success"
                                                        : "warning"
                                                }
                                            >
                                                {guestLog.check_out_time
                                                    ? "Checked Out"
                                                    : "Not Checked Out yet"}
                                            </Chip>
                                        </TableCell>
                                        {/* <TableCell>
                                            <div className="relative flex items-center justify-center gap-2 text-lg cursor-pointer active:opacity-50">
                                                <Tooltip
                                                    showArrow={true}
                                                    color="danger"
                                                    content="Delete"
                                                >
                                                    <span className="text-primary cursor-pointer active:opacity-50">
                                                        <DeleteIcon
                                                            className="text-danger"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    guestLog.id
                                                                )
                                                            }
                                                        />
                                                    </span>
                                                </Tooltip>
                                            </div>
                                        </TableCell> */}
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
