import { useState, useEffect } from "react";
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
import { Inertia } from "@inertiajs/inertia";
import Swal from "sweetalert2";
import GuestRegisterForm from "../Guest/GuestRegisterForm";
import QRCode from "qrcode";
import ReactDOMServer from "react-dom/server";
import { meetingWithOptions, purposeOfVisitOptions } from "@/Components/Data";

export default function GuestLogForm({ guests }) {
    const [selectedGuestId, setSelectedGuestId] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [values, setValues] = useState({
        meeting_with: "",
        purpose_of_visit: "",
        check_in_time: "",
        check_out_time: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleGuestChange = (e) => {
        setSelectedGuestId(e.target.value);
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

        Inertia.post(`/guest/log/new/${selectedGuestId}`, formData);

        Swal.fire({
            title: "Success!",
            text: "Your log for today has been created successfully!",
            icon: "success",
            confirmButtonText: "OK",
        });

        // Generate QR code
        const qrCodeValue = `${selectedGuestId}, ${values.meeting_with}, ${
            values.purpose_of_visit
        }, ${values.check_in_time}, ${new Date().toISOString()}`;
        const qrCodeUrl = await QRCode.toDataURL(qrCodeValue);

        // Open a new window with the visitor pass
        const printWindow = window.open(
            "",
            "PrintWindow",
            "width=600,height=600"
        );

        const printableContent = ReactDOMServer.renderToString(
            <PrintablePass
                guestName={selectedGuestId}
                meetingWith={values.meeting_with}
                purposeOfVisit={values.purpose_of_visit}
                checkInTime={values.check_in_time}
                checkOutTime={values.check_out_time}
                guestItems={[]} // Adjust as necessary
                qrCodeUrl={qrCodeUrl}
            />
        );

        printWindow.document.write(
            "<html><head><title>Visitor Pass</title></head><body>"
        );
        printWindow.document.write(printableContent);
        printWindow.document.write("</body></html>");

        printWindow.document.close();
        // Trigger the print dialog
        printWindow.onload = () => {
            printWindow.print();
            printWindow.onafterprint = () => {
                printWindow.close();
            };
        };

        Inertia.visit(route("guest.log.show"));
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

    useEffect(() => {
        const timeout = setTimeout(() => {
            Inertia.visit("/", { replace: true });
        }, 30000);

        const resetTimeout = () => {
            clearTimeout(timeout);
        };

        window.addEventListener("mousemove", resetTimeout);
        window.addEventListener("keydown", resetTimeout);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("mousemove", resetTimeout);
            window.removeEventListener("keydown", resetTimeout);
        };
    }, []);

    // Handle QR code scanning
    const handleQRScan = async (qrCodeData) => {
        // Extract necessary information from the QR code data
        const guestLogId = extractGuestLogIdFromQR(qrCodeData);

        // Update check-out time locally
        const checkOutTime = new Date().toISOString(); // Current time

        // Send request to server to update check-out time
        try {
            const response = await fetch(
                `/guest/log/check-out-via-qr/${guestLogId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // Add any necessary authentication headers
                    },
                    body: JSON.stringify({ checkOutTime }),
                }
            );

            if (response.ok) {
                // Handle success, e.g., display a success message
                Swal.fire({
                    title: "Success!",
                    text: "Checked out successfully!",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            } else {
                // Handle error response
                // Display error message or handle as needed
                console.error(
                    "Error updating check-out time:",
                    response.statusText
                );
            }
        } catch (error) {
            // Handle fetch error
            console.error("Error updating check-out time:", error.message);
        }
    };

    return (
        <div className="min-h-screen bg-[url(/assets/images/bg.png)] bg-cover">
            <Head title="Log Guest" />
            <div className="py-12 flex justify-center items-center">
                <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg py-5">
                    <div className="text-center mb-5">
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
        </div>
    );
}

const PrintablePass = ({
    guestName,
    meetingWith,
    purposeOfVisit,
    checkInTime,
    checkOutTime,
    qrCodeUrl,
}) => {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Visitor Pass</h1>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ flex: "1 1 50%" }}>
                    <p>
                        <strong>Guest Name:</strong> {guestName}
                    </p>
                    <p>
                        <strong>Meeting With:</strong> {meetingWith}
                    </p>
                    <p>
                        <strong>Purpose of Visit:</strong> {purposeOfVisit}
                    </p>
                    <p>
                        <strong>Check In Time:</strong> {checkInTime}
                    </p>
                    {checkOutTime && (
                        <p>
                            <strong>Check Out Time:</strong> {checkOutTime}
                        </p>
                    )}
                </div>
                <div style={{ flex: "1 1 50%", textAlign: "right" }}>
                    <img src={qrCodeUrl} alt="QR Code" />
                </div>
            </div>
        </div>
    );
};
