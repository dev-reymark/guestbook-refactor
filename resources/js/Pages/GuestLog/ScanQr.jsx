import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { Inertia } from "@inertiajs/inertia";
import { Button, Spacer } from "@nextui-org/react";
import Swal from "sweetalert2";
import { Head } from "@inertiajs/react";
import jsQR from "jsqr";
import { GrClose } from "react-icons/gr";
import { FaUpload } from "react-icons/fa";
import { TbFileUpload } from "react-icons/tb";

const ScanQr = () => {
    const [scanResult, setScanResult] = useState(null);
    const [fileUpload, setFileUpload] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            Inertia.visit("/");
        }, 30000); // 30 seconds

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    const handleError = (err) => {
        console.error(err);
        Swal.fire({
            title: "Error",
            text: "An error occurred while scanning the QR code. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
        });
    };

    const handleScan = (result) => {
        if (result) {
            setScanResult(result);

            // Play the beep sound
            const audio = new Audio("/assets/audio/beep.mp3");
            audio.play();

            Swal.fire({
                title: "QR Code Scanned",
                text: "Redirecting to checkout page...",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                Inertia.visit(result);
            });
        }
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileUpload(file);

            // Clear any previously scanned result when uploading a new file
            setScanResult(null);

            // Read the uploaded file as data URL
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageDataUrl = reader.result;
                scanQRCodeFromImage(imageDataUrl);
            };
            reader.readAsDataURL(file);
        }
    };

    const scanQRCodeFromImage = (imageDataUrl) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0, img.width, img.height);

            const imageData = context.getImageData(0, 0, img.width, img.height);
            const code = jsQR(
                imageData.data,
                imageData.width,
                imageData.height
            );

            if (code) {
                setScanResult(code.data);
                const audio = new Audio("/assets/audio/beep.mp3");
                audio.play();

                Swal.fire({
                    title: "QR Code Scanned",
                    text: "Redirecting to checkout page...",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    Inertia.visit(code.data);
                });
            } else {
                Swal.fire({
                    title: "Error",
                    text: "No QR code found in the uploaded image. Please try again.",
                    icon: "error",
                    confirmButtonText: "OK",
                });
            }
        };
        img.src = imageDataUrl;
    };

    return (
        <div className="min-h-screen bg-[url(/assets/images/bg.png)] bg-cover flex items-center justify-center">
            <Head title="Scan QR Code" />

            {/* For Desktop devices */}
            <div className="hidden md:block max-w-5xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative">
                            Scan QR Code
                            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"></span>
                        </span>
                    </h2>
                    <p className="mt-6 text-gray-600">
                        Align the QR code within the frame to scan it.
                    </p>
                </div>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onResult={handleScan}
                    style={{ width: "100%" }}
                />
                <div className="flex justify-end gap-2">
                    <Button
                        onPress={() => Inertia.visit("/")}
                        color="danger"
                        startContent={<GrClose className="w-4 h-4" />}
                    >
                        Cancel
                    </Button>
                </div>
            </div>

            {/* For Mobile devices */}
            <div className="p-6">
                <div className="md:hidden max-w-5xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative">
                                Upload QR
                                <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"></span>
                            </span>
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Upload the QR Code that you downloaded when you log
                            earlier.
                        </p>
                    </div>
                    <div className="mt-4">
                        <label
                            htmlFor="fileUpload"
                            className="flex items-center justify-start py-2 gap-2 text-sm font-medium text-gray-700"
                        >
                            <span>Upload QR Code Image</span>
                            <TbFileUpload className="w-6 h-6 text-success" />
                        </label>
                        <input
                            id="fileUpload"
                            name="fileUpload"
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={handleFileUpload}
                            className="mt-1 bg-white border border-gray-300 px-3 py-2 rounded-lg w-full"
                        />
                    </div>
                    <Spacer y={4} />
                    <div className="flex justify-end gap-2">
                        <Button
                            onPress={() => Inertia.visit("/")}
                            color="danger"
                            startContent={<GrClose className="w-4 h-4" />}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>

            {scanResult && !fileUpload && (
                <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
                    <p>Scanned URL: {scanResult}</p>
                    <Button
                        onClick={() => Inertia.visit(scanResult)}
                        className="mt-2"
                    >
                        Go to Checkout
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ScanQr;
