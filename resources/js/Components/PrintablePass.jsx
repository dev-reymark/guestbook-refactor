export const PrintableGuestPass = ({
    guestID,
    guestName,
    meetingWith,
    purposeOfVisit,
    checkInTime,
    qrCodeUrl,
    guestPhoto,
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
                    opacity: "0.2", // Adjust opacity to make it more subtle
                    zIndex: "-1", // Behind the content
                }}
            >
                <Image
                    src="/assets/images/logo-new.png" // Replace with your logo path
                    alt="Watermark Logo"
                    style={{
                        width: "500px", // Adjust size as needed
                        height: "auto", // Maintain aspect ratio
                        pointerEvents: "none", // Ensure the logo doesn't interfere with clicks
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
                        })}
                    </p>
                </div>
                <div style={{ margin: "10px 0" }}>
                    <img
                        src={qrCodeUrl}
                        alt="QR Code"
                        style={{ width: "120px", height: "120px" }}
                    />
                </div>
                <hr style={{ margin: "10px 0", width: "80%" }} />
                <p style={{ textAlign: "center", marginTop: "5px" }}>
                    Scan this QR code to check out.
                </p>
            </div>
        </div>
    );
};