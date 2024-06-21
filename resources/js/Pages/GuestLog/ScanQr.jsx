import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { Inertia } from "@inertiajs/inertia";
import { Button } from "@nextui-org/react";
import Swal from "sweetalert2";
import { Head } from "@inertiajs/react";

const ScanQr = () => {
    const [scanResult, setScanResult] = useState(null);

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

    return (
        <div className="min-h-screen bg-[url(/assets/images/bg.png)] bg-cover flex items-center justify-center">
            <Head title="Scan QR Code" />

            <div className="max-w-5xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative">
                            Scan QR Code
                            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"></span>
                        </span>
                    </h2>
                </div>
                <QrReader
                    delay={300}
                    onError={handleError}
                    onResult={handleScan}
                    style={{ width: "100%" }}
                />
                <p className="mt-4 text-gray-600">
                    Align the QR code within the frame to scan it.
                </p>
            </div>
            {scanResult && (
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
