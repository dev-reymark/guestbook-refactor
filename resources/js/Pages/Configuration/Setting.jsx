import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Spacer,
    Image,
    Tooltip,
    Avatar,
} from "@nextui-org/react";
import axios from "axios";
import Swal from "sweetalert2";
import { LiaUserEditSolid } from "react-icons/lia";
import { GoOrganization } from "react-icons/go";

const Setting = ({ auth }) => {
    const [settings, setSettings] = useState({});
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [form, setForm] = useState({
        company_name: "",
        website: "",
        logo: "",
    });

    useEffect(() => {
        // Fetch the settings from the backend
        axios
            .get("/config")
            .then((response) => {
                setSettings(response.data);
                setForm({
                    company_name: response.data.company_name || "",
                    website: response.data.website || "",
                    logo: response.data.logo || "",
                });
            })
            .catch((error) => {
                console.error(
                    "There was an error fetching the settings!",
                    error
                );
            });
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/config", form)
            .then((response) => {
                // Handle successful response
                const responseData = response.data;
                // Trigger SweetAlert pop-up or other actions based on the response data
                Swal.fire({
                    icon: "success",
                    title: "Configuration Saved",
                    text: "Your configuration has been saved successfully!",
                });
            })
            .catch((error) => {
                // Handle error
                console.error("Error saving configuration:", error);
                // Show error message using SweetAlert if needed
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "There was an error saving the configuration. Please try again later.",
                });
            });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Configuration
                </h2>
            }
        >
            <Head title="Configuration" />
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="bg-white rounded-xl shadow dark:bg-neutral-900">
                    <div className="relative h-40 rounded-t-xl bg-[url('https://preline.co/assets/svg/examples/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
                        <div className="absolute top-0 end-0 p-4">
                            <Tooltip
                                content="Edit"
                                color="primary"
                                placement="right"
                                showArrow
                            >
                                <Button
                                    onPress={onOpen}
                                    color="success"
                                    variant="light"
                                    isIconOnly
                                >
                                    <LiaUserEditSolid className="w-8 h-8" />
                                </Button>
                            </Tooltip>
                        </div>
                    </div>

                    <div className="pt-0 p-4 sm:pt-0 sm:p-7">
                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <div className="grid sm:flex sm:items-center sm:gap-x-5">
                                    <Avatar
                                        className="-mt-8 relative z-10 inline-block size-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white dark:ring-neutral-900"
                                        src={form.logo}
                                        alt={form.company_name}
                                        size="lg"
                                        showFallback
                                        fallback={<GoOrganization className="w-8 h-8 text-primary" />}
                                    />
                                </div>
                            </div>
                            <Spacer y={2} />

                            <div>
                                <Input
                                    label="Company Name"
                                    labelPlacement="outside"
                                    placeholder="Example, Inc."
                                    value={form.company_name}
                                    onChange={handleChange}
                                    name="company_name"
                                    isReadOnly
                                />
                            </div>

                            <Spacer y={4} />

                            <div>
                                <Input
                                    label="Website"
                                    labelPlacement="outside"
                                    placeholder="https://example.so"
                                    value={form.website}
                                    onChange={handleChange}
                                    name="website"
                                    isReadOnly
                                />
                            </div>
                            <Spacer y={4} />
                            <div>
                                <Input
                                    label="Logo URL"
                                    labelPlacement="outside"
                                    placeholder="https://example.so/logo.png"
                                    value={form.logo}
                                    onChange={handleChange}
                                    name="logo"
                                    isReadOnly
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Edit Configuration
                            </ModalHeader>
                            <ModalBody>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <Input
                                            label="Company Name"
                                            type="text"
                                            name="company_name"
                                            value={form.company_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <Spacer y={2} />
                                    <div>
                                        <Input
                                            label="Website"
                                            type="text"
                                            name="website"
                                            value={form.website}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <Spacer y={2} />
                                    <div>
                                        <Input
                                            label="Logo URL"
                                            type="text"
                                            name="logo"
                                            value={form.logo}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-end gap-2">
                                        <Button
                                            color="danger"
                                            variant="flat"
                                            onPress={onClose}
                                        >
                                            Close
                                        </Button>
                                        <Button
                                            color="primary"
                                            type="submit"
                                            onPress={onClose}
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </AuthenticatedLayout>
    );
};

export default Setting;
