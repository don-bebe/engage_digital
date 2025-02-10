"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from "typewriter-effect";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";
import {
    FaBrain,
    FaBullhorn,
    FaChartLine,
    FaGlobe,
    FaHandshake,
    FaMobileAlt,
    FaShoppingCart,
    FaSketch, FaTrophy, FaUsers,
} from "react-icons/fa";
import {FaChartGantt} from "react-icons/fa6";

const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    };

    return (
        <>
            <Navbar />
            <div className="relative w-full h-[400px]">
                <Carousel {...settings} className="w-full h-full">
                    <div className="w-full h-[400px]">
                        <img src="/business.jpg" alt="Slide 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-[400px]">
                        <img src="/analytics.jpg" alt="Slide 2" className="w-full h-full object-cover" />
                    </div>
                </Carousel>

                {/* Fixed Heading and Typewriter Effect Below */}
                <div className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 w-full max-w-[90%] text-center">
                    <p className="text-orange-500 text-2xl md:text-4xl font-bold drop-shadow-lg">
                        Welcome to Engage Digital Agency
                    </p>
                </div>

                <div className="absolute top-[5rem] md:top-[9rem] left-1/2 transform -translate-x-1/2 w-full max-w-[90%] text-center">
                    <div className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">
                        <Typewriter
                            options={{
                                strings: [
                                    "Where creativity meets technology, it goes beyond the click.\n Our values includes, Excellence → Integrity → Collaboration → Innovation.",
                                    "Our mission\n ⇒ To empower businesses by leveraging cutting-edge technology, creativity, and data-driven strategies to build meaningful connections with their audiences and achieve sustainable success.",
                                    "Our Vision\n ⇒ To be one of the leading digital agency recognized for innovation, excellence, and the ability to turn challenges into opportunities for our clients.",
                                    "Why Choose us?\n\n  ⇒ Innovation & Creativity\n → Transparency & Collaboration\n → Client-Centric Approach\n → Proven Results",
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Why choose us Section*/}
            <section id="choose-us" className="bg-white py-12 sm:py-18">
                    <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Why
                                Choose Us?</h2>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Transforming visions into reality, one innovation at a time. At <b>Engage Digital
                                Agency</b>, we are dedicated to delivering exceptional solution with a passion for excellence and commitment to quality.
                            </p>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            <li>
                                <div className="flex items-center gap-x-6">
                                    <FaHandshake className="size-16 rounded-full text-orange-500 text-5xl"/>
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                                            Client-Centric Approach
                                        </h3>
                                        <p className="text-sm/6 text-gray-600 mt-2">We prioritize your goals and work closely with you to deliver solutions that exceed expectations.</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center gap-x-6">
                                    <FaBrain className="size-16 rounded-full text-orange-500 text-5xl"/>
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Innovation & Creativity</h3>
                                        <p className="text-sm/6 text-gray-600 mt-2">We stay ahead of industry trends and leverage the latest technologies to deliver cutting-edge solutions</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center gap-x-6">
                                    <FaUsers className="size-16 rounded-full text-orange-500 text-5xl"/>
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Transparency & Collaboration</h3>
                                        <p className="text-sm/6 text-gray-600 mt-2">We believe in open communication and involve our clients at every stage of the process</p>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center gap-x-6">
                                    <FaTrophy className="size-16 rounded-full text-orange-500 text-5xl"/>
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Proven Results</h3>
                                        <p className="text-sm/6 text-gray-600 mt-2">Our portfolio showcases successful projects across diverse industries, demonstrating our ability to deliver tangible results</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            </section>

            {/* Core Services Section */}
            <section id="core-services" className="py-10 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Core Services</h2>
                    <p className="text-gray-600 mt-2">We offer a wide range of digital solutions to help your business thrive.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        <Card className="p-6 bg-white shadow-lg rounded-2xl">
                            <CardContent className="flex flex-col items-center">
                                <FaChartLine className="text-orange-500 text-5xl"/>
                                <h3 className="text-xl text-gray-900 font-semibold mt-4">Digital Marketing</h3>
                                <p className="text-gray-600 text-sm mt-2">Our comprehensive digital marketing services include SEO, PPC, social media management, email marketing, and content creation.
                                    We create data-driven campaigns that increase brand awareness, generate leads, and boost conversions.</p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 bg-white shadow-lg rounded-2xl">
                            <CardContent className="flex flex-col items-center">
                                <FaBullhorn className="text-orange-500 text-5xl"/>
                                <h3 className="text-xl text-gray-900 font-semibold mt-4">Branding & Creative Design</h3>
                                <p className="text-gray-600 text-sm mt-2">We help businesses establish a strong brand identity through logo design, brand guidelines,
                                    and creative assets that resonate with their target audience.</p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 bg-white shadow-lg rounded-2xl">
                            <CardContent className="flex flex-col items-center">
                                <FaMobileAlt className="text-orange-500 text-5xl"/>
                                <h3 className="text-xl text-gray-900 font-semibold mt-4">Mobile App Development</h3>
                                <p className="text-gray-600 text-sm mt-2">From concept to launch, we develop custom mobile applications that are functional,
                                    visually appealing, and designed to meet the unique needs of your business.</p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 bg-white shadow-lg rounded-2xl">
                            <CardContent className="flex flex-col items-center">
                                <FaShoppingCart className="text-orange-500 text-5xl" />
                                <h3 className="text-xl text-gray-900 font-semibold mt-4">E-Commerce Solutions</h3>
                                <p className="text-gray-600 text-sm mt-5">We build robust e-commerce platforms that provide seamless shopping experiences, secure payment gateways, and advanced analytics to help businesses scale online.</p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 bg-white shadow-lg rounded-2xl">
                            <CardContent className="flex flex-col items-center">
                                <FaGlobe className="text-orange-500 text-5xl"/>
                                <h3 className="text-xl text-gray-900 font-semibold mt-4">Web Design & Development</h3>
                                <p className="text-gray-600 text-sm mt-5"> We craft visually stunning, user-friendly websites that are optimized for performance, responsiveness, and scalability. From simple landing pages to complex e-commerce
                                    platforms, we deliver solutions that align with your business goals.</p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 bg-white shadow-lg rounded-2xl">
                            <CardContent className="flex flex-col items-center">
                                <FaSketch className="text-orange-500 text-5xl"/>
                                <h3 className="text-xl text-gray-900 font-semibold mt-4">UX/UI Design</h3>
                                <p className="text-gray-600 text-sm mt-5">Our design team focuses on creating intuitive and engaging user experiences that enhance customer satisfaction and drive user retention.</p>
                            </CardContent>
                        </Card>

                        <Card className="p-6 bg-white shadow-lg rounded-2xl">
                            <CardContent className="flex flex-col items-center">
                                <FaChartGantt className="text-orange-500 text-5xl"/>
                                <h3 className="text-xl text-gray-900 font-semibold mt-4">Data Analytics & Insights</h3>
                                <p className="text-gray-600 text-sm mt-5">We provide actionable insights through advanced analytics tools, helping businesses make informed decisions and optimize their digital strategies.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section id="together" className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl text-gray-900 font-semibold mt-4">Let’s Innovate Together</h3>
                <p className="text-gray-600">
                    Whether you’re a startup looking to establish your online presence or an established business aiming to scale, OM Engage  Digital Agency is your trusted partner in achieving digital success. Let’s collaborate to turn your vision into reality.
                </p>
            </section>
            <Footer />
        </>
    );
};

export default HomePage;
