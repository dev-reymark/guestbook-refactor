import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import { Head } from "@inertiajs/react";
import {
    Input,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure,
} from "@nextui-org/react";

const CheckOut = () => {
    const { guestLog, guestLogId, checkoutUrl } = usePage().props;
    const { isOpen, onOpen, onOpenChange } = useDisclosure(true);

    const handleCheckOut = () => {
        Inertia.post(
            checkoutUrl,
            {},
            {
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "Guest checked out successfully!",
                    });
                },
                onError: (errors) => {
                    Swal.fire({
                        icon: "error",
                        title: "An error occurred",
                        text: "Please try again later.",
                    });
                    console.error(errors);
                },
            }
        );
    };

    useEffect(() => {
        onOpen();
    }, [onOpen]);

    if (!guestLog) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-[url(/assets/images/bg.png)] bg-cover">
            <Head title="Check Out" />

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                hideCloseButton
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col">
                                <div className="text-center mb-5">
                                    <h2 className="text-3xl font-bold mb-4 ">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative">
                                            Guest Log Details
                                            <span className="absolute  left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"></span>
                                        </span>
                                    </h2>
                                    <p className="text-sm font-light">
                                        Please click the button to check out.
                                    </p>
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <div className="mb-4 space-y-4">
                                    <Input
                                        value={guestLog.guest.id}
                                        label="Guest ID"
                                        placeholder="Guest ID"
                                        readOnly
                                    />
                                    <Input
                                        value={guestLog.guest.name}
                                        label="Guest Name"
                                        placeholder="Guest Name"
                                        readOnly
                                    />
                                    <Input
                                        value={guestLog.meeting_with}
                                        label="Meeting With"
                                        placeholder="Meeting With"
                                        readOnly
                                    />
                                    <Input
                                        value={guestLog.purpose_of_visit}
                                        label="Purpose of Visit"
                                        placeholder="Purpose of Visit"
                                        readOnly
                                    />
                                    <Input
                                        value={new Date(
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
                                        label="Check In Time"
                                        placeholder="Check In Time"
                                        readOnly
                                    />
                                    <Input
                                        value={
                                            guestLog.check_out_time
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
                                                : "Not checked out yet"
                                        }
                                        label="Check Out Time"
                                        placeholder="Check Out Time"
                                        readOnly
                                    />
                                    <div className="flex justify-end">
                                        {!guestLog.check_out_time && (
                                            <Button
                                                color="primary"
                                                onClick={handleCheckOut}
                                            >
                                                Check Out
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default CheckOut;
