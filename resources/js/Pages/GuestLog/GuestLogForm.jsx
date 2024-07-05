import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import {
    Autocomplete,
    AutocompleteItem,
    Button,
    Image,
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
import ReactDOMServer from "react-dom/server";
import { MdOutlineCancel, MdSimCardDownload } from "react-icons/md";
import { meetingWithOptions, purposeOfVisitOptions } from "@/Components/Data";
import { HiOutlineSave } from "react-icons/hi";
import { TiCancelOutline } from "react-icons/ti";
import { GrClose } from "react-icons/gr";
import { FcPrint } from "react-icons/fc";
import { TbLogin } from "react-icons/tb";

const GuestLogForm = ({ guests, name }) => {
    const [selectedGuestId, setSelectedGuestId] = useState("");
    const [searchValue, setSearchValue] = useState(name);
    const [values, setValues] = useState({
        meeting_with: "",
        purpose_of_visit: "",
        check_in_time: "",
        check_out_time: "",
    });
    const [qrCodeUrl, setQrCodeUrl] = useState("");
    const [showQrCode, setShowQrCode] = useState(false);
    const [otherPurpose, setOtherPurpose] = useState(""); // State for other purpose input
    const [guestName, setGuestName] = useState(name);
    const [expirationDate, setExpirationDate] = useState("");
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
            const guestName = response.data.guestName;
            const guestPhoto = response.data.guestPhoto;
            const expirationDate = response.data.expirationDate;

            // Extract the first word from the guest's name
            const firstName = guestName.split(" ")[0];
            // Get the guest's name from response
            // const guestName = response.data.guestName;

            Swal.fire({
                title: "Success",
                icon: "success",
                showConfirmButton: false,
                timer: 1000,
            });

            setQrCodeUrl(qrCodeUrl);
            setShowQrCode(true);
            setExpirationDate(expirationDate);

            // Store the guest's name in the state for use in the printable pass
            setValues((prevValues) => ({
                ...prevValues,
                guestName: firstName,
                guestPhoto: guestPhoto,
                // Full guest name
                // guestName: guestName
            }));
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

    useEffect(() => {
        // Set the selectedGuestId based on the passed name
        const guest = guests.find((guest) => guest.name === name);
        if (guest) {
            setSelectedGuestId(guest.id);
        }
    }, [name, guests]);

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

    const printQrCode = () => {
        const canvas = document.querySelector("canvas");
        const qrCodeDataUrl = canvas.toDataURL("image/png");

        const printableContent = ReactDOMServer.renderToString(
            <PrintableGuestPass
                guestID={selectedGuestId}
                guestName={values.guestName}
                guestPhoto={values.guestPhoto}
                meetingWith={values.meeting_with}
                purposeOfVisit={
                    values.purpose_of_visit === "Other"
                        ? otherPurpose
                        : values.purpose_of_visit
                }
                checkInTime={values.check_in_time}
                checkOutTime={values.check_out_time}
                qrCode={qrCodeDataUrl}
                expirationDate={expirationDate}
            />
        );

        const printWindow = window.open("", "_blank", "hidden=yes");
        printWindow.document.open();
        printWindow.document.write("<html><head><title>Print</title>");
        printWindow.document.write("</head><body>");
        printWindow.document.write(printableContent);
        printWindow.document.write("</body></html>");
        printWindow.document.close();

        printWindow.onload = function () {
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        };
    };

    return (
        <>
            <div className="min-h-screen bg-[url(/assets/images/bg.png)] bg-cover">
                <Head title="Log Guest" />
                <div className="py-12 p-4 flex justify-center items-center">
                    <div className="max-w-2xl w-full mx-auto p-4 bg-white shadow-md rounded-lg py-5">
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
                                    description="If you don't see your name here, please click 'New Guest' button to register."
                                    selectedKey={selectedGuestId}
                                    onSelectionChange={setSelectedGuestId}
                                    isRequired
                                    onInput={handleSearchChange}
                                >
                                    {searchValue &&
                                        filteredGuests.map((guest) => (
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
                                    placeholder="Select"
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
                                    description={
                                        <p className="check-in-time-description">
                                            Please enter your check in time or
                                            click the button to check in.
                                        </p>
                                    }
                                    labelPlacement="outside"
                                    type="datetime-local"
                                    name="check_in_time"
                                    value={values.check_in_time}
                                    onChange={handleChange}
                                    isRequired
                                    onClear={() =>
                                        setValues({
                                            ...values,
                                            check_in_time: "",
                                        })
                                    }
                                />
                                <div className="hidden md:flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
                                    Or
                                </div>
                                <Button
                                    color="primary"
                                    variant="shadow"
                                    onClick={handleCheckIn}
                                    className="mt-6 check-in-time-button"
                                >
                                    Check In
                                </Button>
                            </div>
                            <Spacer y={7} />
                            <div className="flex justify-end gap-2">
                                <Button
                                    size="lg"
                                    color="primary"
                                    variant="shadow"
                                    type="submit"
                                    startContent={
                                        <HiOutlineSave className="w-6 h-6 text-success" />
                                    }
                                >
                                    Submit
                                </Button>
                                <Button
                                    size="lg"
                                    color="danger"
                                    onClick={() => Inertia.visit("/")}
                                    startContent={
                                        <GrClose className="w-4 h-4" />
                                    }
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

                {showQrCode && (
                    <div className="fixed inset-0 flex items-center justify-center bg-[url(/assets/images/bg.png)] bg-cover bg-opacity-100 z-50 p-1">
                        <div className="bg-white p-6 rounded-lg max-w-md space-y-4 w-full mx-4">
                            <div className="flex justify-center">
                                <h1 className="hidden md:block text-center">
                                    <span className="text-danger">*</span>{" "}
                                    Please capture this QR code using your
                                    mobile phone or print it out. This will be
                                    used for checking out.
                                </h1>
                                <h1 className="md:hidden text-center">
                                    <span className="text-danger">*</span>{" "}
                                    Please download this QR code or take a
                                    screenshot using your mobile phone. This
                                    will be used for checking out.
                                </h1>
                            </div>
                            <div className="flex justify-center">
                                <QRCode value={qrCodeUrl} size={350} />{" "}
                                {/* Adjust size if needed */}
                            </div>
                            <div className="flex justify-end gap-2">
                                <Button
                                    color="primary"
                                    variant="shadow"
                                    onClick={printQrCode}
                                    className="hidden sm:block"
                                >
                                    <span className="flex items-center gap-1">
                                        <FcPrint className="w-5 h-5 text-success" />
                                        Print QR
                                    </span>
                                </Button>
                                <Button
                                    color="primary"
                                    variant="shadow"
                                    onClick={() => downloadQrCode(qrCodeUrl)}
                                    className="sm:hidden"
                                >
                                    <span className="flex items-center gap-1">
                                        <MdSimCardDownload className="w-6 h-6 text-success-400" />
                                        Download QR
                                    </span>
                                </Button>

                                <Button
                                    startContent={
                                        <GrClose className="w-4 h-4" />
                                    }
                                    color="danger"
                                    onClick={handleClose}
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <style jsx>{`
                @media screen and (max-width: 385px) {
                    .check-in-time-button,
                    .check-in-time-description {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
};

export default GuestLogForm;

export const PrintableGuestPass = ({
    guestID,
    guestName,
    meetingWith,
    purposeOfVisit,
    checkInTime,
    qrCode,
    guestPhoto,
    expirationDate,
}) => {
    return (
        <div
            style={{
                position: "relative",
                padding: "10px",
                fontFamily: "Arial, sans-serif",
                width: "70mm",
                maxWidth: "70mm",
                wordWrap: "break-word",
                // backgroundColor: "#f0f0f0",
                border: "1px solid #ccc",
                borderRadius: "8px",
            }}
        >
            {/* Watermark Logo */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(-30deg)",
                    opacity: "0.2",
                    zIndex: "-1",
                }}
            >
                <Image
                    src="/assets/images/logo-new.png"
                    alt="Watermark Logo"
                    style={{
                        width: "500px",
                        height: "auto",
                        pointerEvents: "none",
                    }}
                />
            </div>

            {/* Content of the Guest Pass */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h2 style={{ textAlign: "center", margin: "10px 0" }}>
                    VISITOR
                </h2>
                {guestPhoto && (
                    <div style={{ textAlign: "center", marginBottom: "10px" }}>
                        <img
                            src={guestPhoto}
                            alt={guestName}
                            width={100}
                            height={100}
                            style={{
                                borderRadius: "50%",
                                marginBottom: "5px",
                            }}
                        />
                    </div>
                )}
                <p style={{ textAlign: "center", marginBottom: "5px" }}>
                    Hello, I'm {guestName}
                </p>
                <hr style={{ margin: "10px 0", width: "80%" }} />
                <div style={{ textAlign: "left", margin: "5px 10px" }}>
                    <p>
                        <strong>Guest ID:</strong> {guestID} <br />
                        <strong>Meeting With:</strong> {meetingWith} <br />
                        <strong>Purpose of Visit:</strong> {purposeOfVisit}{" "}
                        <br />
                        <strong>Check In:</strong>{" "}
                        {new Date(checkInTime).toLocaleString([], {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })}{" "}
                        <br />
                        <strong> Valid Until:</strong>{" "}
                        {new Date(expirationDate).toLocaleString([], {
                            year: "numeric",
                            month: "numeric",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        })}
                    </p>
                </div>
                <div style={{ margin: "10px 0" }}>
                    <img
                        src={qrCode}
                        alt="QR Code"
                        style={{ width: "130px", height: "130px" }}
                    />
                </div>
                <hr style={{ margin: "10px 0", width: "80%" }} />
                <p
                    style={{
                        textAlign: "center",
                        marginTop: "5px",
                        fontSize: "12px",
                    }}
                >
                    <span className="text-red font-bold">*</span>This pass must
                    be worn at all times.
                </p>
            </div>
        </div>
    );
};
