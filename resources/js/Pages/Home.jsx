import { Head } from "@inertiajs/react";
import {
    Card,
    CardFooter,
    CardHeader,
    Divider,
    Image,
    Link,
} from "@nextui-org/react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Home({ auth, mediaUrls = [] }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error("Error playing audio:", error);
            });
        }
    }, []);
    useEffect(() => {
        fetchGuestData();
    }, []);

    const fetchGuestData = async () => {
        try {
            const response = await axios.get("/fetch-guest-data");
            const data = response.data;
            setTotalRegisteredGuest(data.totalRegisteredGuest);
            setAvgLogsInPast7Days(data.avgLogsInPast7Days);
        } catch (error) {
            console.error("Error fetching guest data:", error);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], {
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
    const formattedDate = currentTime.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <Head title="Home" />
            <div className="relative min-h-screen p-5">
                <img
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    src="/assets/images/bg.png"
                />

                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <main
                        className="mt-20 grid gap-4 lg:grid-cols-2"
                        style={{ height: "600px" }}
                    >
                        <Card className="w-full">
                            <div className="h-full">
                                <Swiper
                                    slidesPerView={1}
                                    modules={[Navigation, Autoplay]}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    onSlideChangeTransitionEnd={(swiper) => {
                                        const activeSlide =
                                            swiper.slides[swiper.activeIndex];
                                        const video =
                                            activeSlide.querySelector("video");
                                        if (video) {
                                            video.play();
                                            swiper.autoplay.stop();
                                            video.addEventListener(
                                                "ended",
                                                () => {
                                                    swiper.autoplay.start();
                                                    swiper.slideNext();
                                                }
                                            );
                                        }
                                    }}
                                    style={{ width: "100%", height: "100%" }}
                                >
                                    {mediaUrls.map((mediaUrl, index) => (
                                        <SwiperSlide key={index}>
                                            {mediaUrl.endsWith(".mp4") ? (
                                                <video
                                                    autoPlay
                                                    className="w-full h-full object-cover"
                                                >
                                                    <source
                                                        src={mediaUrl}
                                                        type="video/mp4"
                                                    />
                                                    Your browser does not
                                                    support the video tag.
                                                </video>
                                            ) : (
                                                <Image
                                                    src={mediaUrl}
                                                    height={1000}
                                                    width={1000}
                                                    alt={`Media ${index}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </Card>

                        <div className="grid grid-cols-1 gap-4 items-center">
                            <Card
                                className="p-2 text-center font-semibold text-gray-200 bg-transparent"
                                style={{ height: "150px" }}
                            >
                                <p className="text-7xl">{formattedTime}</p>
                                <p className="text-3xl font-light">
                                    {formattedDate}
                                </p>
                            </Card>

                            <div
                                className="grid grid-cols-2 gap-4"
                                style={{ height: "200px" }}
                            >
                                <Card as={Link} href={route("guestlog.create")}>
                                    <div className="flex items-start gap-4 p-5 py-14">
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#00C48C]/10 sm:size-16">
                                            <FaSignInAlt className="h-6 w-6 text-primary" />
                                        </div>

                                        <div className="pt-3 sm:pt-5">
                                            <h2 className="text-2xl font-semibold text-black dark:text-white">
                                                Check-in
                                            </h2>
                                        </div>
                                    </div>
                                </Card>

                                <Card as={Link} href={route("guestlog.scan")}>
                                    <div className="flex items-start gap-4 p-5 py-14">
                                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF6B6B]/10 sm:size-16">
                                            <FaSignOutAlt className="h-6 w-6 text-danger" />
                                        </div>
                                        <div className="pt-3 sm:pt-5">
                                            <h2 className="text-2xl font-semibold text-black dark:text-white">
                                                Check-out
                                            </h2>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            <Card className="p-2" style={{ height: "290px" }}>
                                <CardHeader className="text-center p-0 mb-3">
                                    <Image
                                        src="/assets/images/logo-new.png"
                                        alt=""
                                        width="auto"
                                        height="16"
                                    />
                                </CardHeader>
                                <Divider />
                                <CardFooter>
                                    <div className="mt-1">
                                        <p>
                                            <span className="font-bold text-md">
                                                Privacy Notice: {"  "}
                                            </span>
                                            This kiosk collects personal
                                            information from visitors and
                                            registers them as guest/s.
                                        </p>
                                        <p>
                                            We are committed to protecting your
                                            personal information and ensuring
                                            its confidentiality. Any data
                                            collected through this kiosk will be
                                            used solely for the purpose stated
                                            and will not be shared with third
                                            parties without your consent, except
                                            where required by law.
                                        </p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
