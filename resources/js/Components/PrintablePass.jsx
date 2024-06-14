export const PrintablePass = ({
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