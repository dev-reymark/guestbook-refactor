import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import {
    Autocomplete,
    AutocompleteItem,
    Button,
    Input,
    Select,
    SelectItem,
    Spacer,
} from "@nextui-org/react";
import axios from "axios";
import Swal from "sweetalert2";
import GuestRegisterForm from "../Guest/GuestRegisterForm";
import QRCode from "qrcode.react";
import { Inertia } from "@inertiajs/inertia";
import { FaPrint } from "react-icons/fa";

const meetingWithOptions = [
    {
        value: "Ricardo Yap",
        label: "Ricardo Yap",
        position: "President/CEO",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    },
    {
        value: "Edwin Yap",
        label: "Edwin Yap",
        position: "General Manager",
        avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
    },
];

const purposeOfVisitOptions = [
    { value: "Business Meeting", label: "Business Meeting" },
    { value: "Job Interview", label: "Job Interview" },
    { value: "Other", label: "Other" }, // Added "Other" option
];

const GuestLogForm = ({ guests }) => {
    const [selectedGuestId, setSelectedGuestId] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [values, setValues] = useState({
        meeting_with: "",
        purpose_of_visit: "",
        check_in_time: "",
        check_out_time: "",
    });
    const [qrCodeUrl, setQrCodeUrl] = useState("");
    const [showQrCode, setShowQrCode] = useState(false);
    const [otherPurpose, setOtherPurpose] = useState(""); // State for other purpose input

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const checkInTime = new Date(values.check_in_time)
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");

        const formData = {
            ...values,
            check_in_time: checkInTime.toString(),
            check_out_time: values.check_out_time
                ? new Date(values.check_out_time).toISOString()
                : null,
            purpose_of_visit:
                values.purpose_of_visit === "Other"
                    ? otherPurpose
                    : values.purpose_of_visit,
        };

        try {
            const response = await axios.post(
                `/guest/log/new/${selectedGuestId}`,
                formData
            );
            const guestLogId = response.data.guestLogId;
            const qrCodeUrl = response.data.qrCodeUrl;

            Swal.fire({
                title: "Success",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });

            setQrCodeUrl(qrCodeUrl);
            setShowQrCode(true);
        } catch (error) {
            Swal.fire(
                "Error",
                "There was an error submitting the form",
                "error"
            );
        }
    };

    const handleCheckIn = () => {
        const today = new Date();
        const timezoneOffsetInMs = today.getTimezoneOffset() * 60000;
        const localDateTime = new Date(today.getTime() - timezoneOffsetInMs);
        const localIsoDateTime = localDateTime.toISOString().slice(0, 16);
        setValues((prevValues) => ({
            ...prevValues,
            check_in_time: localIsoDateTime,
        }));
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const filteredGuests = guests
        .filter((guest) =>
            guest.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));

    const handlePurposeChange = (e) => {
        const { value } = e.target;
        setValues({
            ...values,
            purpose_of_visit: value,
        });

        // Reset otherPurpose when purpose changes
        if (value !== "Other") {
            setOtherPurpose("");
        }
    };

    const handleClose = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You are about to close this page. Please ensure that the QR code has been captured or printed.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, close it",
            cancelButtonText: "Cancel",
            cancelButtonColor: "#3085d6",
            confirmButtonColor: "#d33",
        }).then((result) => {
            if (result.isConfirmed) {
                Inertia.visit("/");
            }
        });
    };

    const downloadQrCode = (qrCodeUrl) => {
        const canvas = document.querySelector("canvas");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");

        const link = document.createElement("a");
        link.href = pngUrl;

        const date = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
        link.download = `qr_code_generated_on_${date}.png`; // Include date in the filename

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-[url(/assets/images/bg.png)] bg-cover">
            <Head title="Log Guest" />
            <div className="py-12 p-4 flex justify-center items-center">
                <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg py-5">
                    <div className="text-center  mb-5">
                        <h2 className="text-3xl font-bold mb-4 ">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative">
                                Guest Log Form
                                <span className="absolute  left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"></span>
                            </span>
                        </h2>
                        <p className="text-sm font-light">
                            Please fill out the form below to log your visit
                            today.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-3 mb-4">
                            <Autocomplete
                                label={
                                    <>
                                        <b>Guest Name</b>
                                    </>
                                }
                                labelPlacement="outside"
                                placeholder="Search your name here"
                                description="If you don't see your name here, please register first."
                                selectedKey={selectedGuestId}
                                onSelectionChange={setSelectedGuestId}
                                isRequired
                            >
                                {filteredGuests.map((guest) => (
                                    <AutocompleteItem
                                        key={guest.id}
                                        value={guest.id}
                                    >
                                        {guest.name}
                                    </AutocompleteItem>
                                ))}
                            </Autocomplete>

                            <GuestRegisterForm />
                        </div>
                        <Spacer y={2} />
                        <div className="mb-4">
                            <Select
                                label={
                                    <>
                                        <b>Meeting With</b>
                                    </>
                                }
                                labelPlacement="outside"
                                placeholder="Select"
                                value={values.meeting_with}
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        meeting_with: e.target.value,
                                    })
                                }
                            >
                                {meetingWithOptions.map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {`${option.label} - ${option.position}`}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <Spacer y={2} />
                        <div className="mb-4">
                            <Select
                                label={
                                    <>
                                        <b>Purpose of Visit</b>
                                    </>
                                }
                                labelPlacement="outside"
                                placeholder="Select Purpose"
                                value={values.purpose_of_visit}
                                onChange={handlePurposeChange}
                                isRequired
                            >
                                {purposeOfVisitOptions.map((option) => (
                                    <SelectItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </SelectItem>
                                ))}
                            </Select>
                            <Spacer y={2} />
                            {/* Render input for other purpose */}
                            {values.purpose_of_visit === "Other" && (
                                <Input
                                    placeholder="Please input your purpose of visit"
                                    value={otherPurpose}
                                    onChange={(e) =>
                                        setOtherPurpose(e.target.value)
                                    }
                                    isRequired
                                />
                            )}
                        </div>
                        <Spacer y={2} />
                        <div className="flex gap-4 mb-4">
                            <Input
                                label={
                                    <>
                                        <b>Check In Time</b>
                                    </>
                                }
                                placeholder="Check In"
                                description="Please enter your check in time or click the button to check in."
                                labelPlacement="outside"
                                type="datetime-local"
                                name="check_in_time"
                                value={values.check_in_time}
                                onChange={handleChange}
                                isRequired
                                onClear={() =>
                                    setValues({ ...values, check_in_time: "" })
                                }
                            />
                            <div className="flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
                                Or
                            </div>
                            <Button
                                color="primary"
                                variant="shadow"
                                onClick={handleCheckIn}
                                className="mt-6 "
                            >
                                Check In
                            </Button>
                        </div>
                        <Spacer y={7} />
                        <div className="flex justify-end gap-2">
                            <Button size="lg" color="primary" type="submit">
                                Submit
                            </Button>
                            <Button
                                size="lg"
                                color="danger"
                                variant="flat"
                                onClick={() => Inertia.visit("/")}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            {showQrCode && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-100 z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md space-y-4">
                        <div className="flex justify-center">
                            <h1>
                                Please capture this QR code using your mobile
                                phone or print it out. This will be used to log
                                your visit.
                            </h1>
                        </div>
                        <QRCode value={qrCodeUrl} size={400} />
                        <div className="flex justify-end gap-1">
                            <Button
                                color="primary"
                                variant="shadow"
                                onClick={() => window.print()}
                                className="hidden sm:block"
                            >
                                <span className="flex items-center gap-2">
                                    <FaPrint className="w-4 h-4 text-success" /> Print QR
                                </span>
                            </Button>
                            <Button
                                color="primary"
                                variant="shadow"
                                onClick={() => downloadQrCode(qrCodeUrl)}
                                className="sm:hidden"
                            >
                                Download QR
                            </Button>
                            <Button color="danger" onClick={handleClose}>
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GuestLogForm;
