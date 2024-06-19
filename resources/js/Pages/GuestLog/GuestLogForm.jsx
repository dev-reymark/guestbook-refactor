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
        };
    
        try {
            const response = await axios.post(
                `/guest/log/new/${selectedGuestId}`,
                formData
            );
            const guestLogId = response.data.guestLogId;
            const qrCodeUrl = response.data.qrCodeUrl; // Assuming this is returned from the backend
    
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
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        purpose_of_visit: e.target.value,
                                    })
                                }
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
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                    <div className="bg-white p-6 rounded-lg max-w-md">
                        <QRCode value={qrCodeUrl} size={150} />
                        <Button
                            color="primary"
                            onClick={() => setShowQrCode(false)}
                            className="block mt-4 w-full text-white font-bold py-2 px-4 rounded"
                        >
                            Close QR Code
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GuestLogForm;
