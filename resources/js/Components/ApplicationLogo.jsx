import { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "@nextui-org/react";

export default function ApplicationLogo() {
    const [settings, setSettings] = useState({
        logo: "",
    });

    const { logo } = settings;

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await axios.get("/config");
                setSettings(response.data);
            } catch (error) {
                console.error("Error fetching settings data:", error);
            }
        };

        fetchSettings();
    }, []);
    return (
        <Image src={logo} alt="Company Logo" className="block h-14 w-auto" />
    );
}
