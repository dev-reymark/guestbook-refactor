import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { TbLogout } from "react-icons/tb";

const CheckOut = () => {
    const { guestLog, guestLogId, checkoutUrl } = usePage().props;
    const { isOpen, onOpen, onOpenChange } = useDisclosure(true);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    useEffect(() => {
        // Show SweetAlert if guest has already checked out
        if (guestLog.check_out_time) {
            // Play the error sound
            const audio = new Audio("/assets/audio/checkout-warning.mp3");
            audio.play();

            Swal.fire({
                title: "Already Checked Out",
                text: "This guest has already been checked out.",
                icon: "warning",
                timer: 5000, // Alert will close automatically after 3 seconds
                showConfirmButton: false, // Hide the confirm button
            }).then(() => {
                // Redirect to homepage after alert closes
                window.location.href = "/";
            });
        } else {
            onOpen(); // Open the modal if guest hasn't checked out
        }
    }, [guestLog.check_out_time, onOpen]);

    const handleCheckOut = () => {
        setIsCheckingOut(true);
        axios
            .post(checkoutUrl)
            .then((response) => {
                // Play the success sound
                const successAudio = new Audio("/assets/audio/checkout-success.mp3");
                successAudio.play();

                Swal.fire({
                    title: "Success!",
                    text: "You have successfully checked out.",
                    icon: "success",
                    timer: 5000, // Alert will close automatically after 3 seconds
                    showConfirmButton: false, // Hide the confirm button
                }).then(() => {
                    window.location.href = "/"; // Redirect to homepage
                });
            })
            .catch((error) => {
                console.error("Checkout error:", error);
                Swal.fire({
                    title: "Error!",
                    text: "An error occurred while checking out.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            })
            .finally(() => {
                setIsCheckingOut(false);
            });
    };

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
                isKeyboardDismissDisabled
                isDismissable={false}
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col">
                                <div className="text-center mb-5">
                                    <h2 className="text-3xl font-bold mb-4 ">
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative">
                                            Your Log Details
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
                                        color="warning"
                                    />
                                    <div className="flex justify-end">
                                        {!guestLog.check_out_time && (
                                            <Button
                                                size="lg"
                                                variant="shadow"
                                                color="primary"
                                                onClick={handleCheckOut}
                                                disabled={isCheckingOut}
                                                startContent={
                                                    <TbLogout className="w-7 h-7 text-success" />
                                                }
                                            >
                                                {isCheckingOut
                                                    ? "Checking Out..."
                                                    : "Check Out"}
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
