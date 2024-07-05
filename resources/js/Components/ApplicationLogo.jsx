import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, Image } from "@nextui-org/react";
import { GoOrganization } from "react-icons/go";

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
        <Avatar
            src={logo}
            alt="Company Logo"
            showFallback
            fallback={<GoOrganization className="w-6 h-6 text-primary" />}
        />
    );
}
