import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    FaBinoculars,
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLightbulb,
    FaLinkedin, FaMapMarkedAlt,
    FaPhone,
    FaUsers
} from "react-icons/fa";

const AboutPage = () => {
    return (
        <>
          <Navbar />
            <section className="bg-white py-10 sm:py-18">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">About
                                Us</h2>
                            <p className="mt-2 text-lg/8 text-gray-600">Engage Digital we are forward-thinking,
                                full-service digital agency
                                dedicated to helping businesses thrive in the digital age. Founded in 2023, we
                                specialize in creating tailored digital solutions that drive growth, enhance brand
                                visibility, and deliver measurable results. Our team of passionate designers,
                                developers,
                                marketers, and strategists work collaboratively to transform ideas into impactful
                                digital experiences.</p>
                        </div>
                        <div
                            className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <article className="flex max-w-xl flex-col items-start justify-between">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                            <span className="absolute inset-0"></span>
                                            Our Mission
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">To empower businesses by
                                        leveraging cutting-edge
                                        technology, creativity, and data-driven strategies to build
                                        meaningful connections with their audiences and achieve sustainable success.</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <FaLightbulb className="text-orange-500 text-5xl size-15 rounded-full bg-gray-50"/>
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-gray-900">
                                            <a href="#">
                                                <span className="absolute inset-0"></span>
                                                OM Engage Digital
                                            </a>
                                        </p>
                                        <p className="text-gray-600">Mission</p>
                                    </div>
                                </div>
                            </article>

                            <article className="flex max-w-xl flex-col items-start justify-between">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                        <span className="absolute inset-0"></span>
                                        Our Vision
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">To be one of the leading digital agency recognized for innovation, excellence, and the ability to turn challenges into opportunities for our clients.</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <FaBinoculars className="text-orange-500 text-5xl size-15 rounded-full bg-gray-50"/>
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-gray-900">
                                            <a href="#">
                                                <span className="absolute inset-0"></span>
                                                Engage Digital Agency
                                            </a>
                                        </p>
                                        <p className="text-gray-600">Vision</p>
                                    </div>
                                </div>
                            </article>

                            <article className="flex max-w-xl flex-col items-start justify-between">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                                            <span className="absolute inset-0"></span>
                                            Our Team
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Our team is our greatest asset. Comprising skilled professionals with diverse expertise, we bring creativity, technical excellence, and strategic thinking to every project.
                                        We are passionate about helping our clients succeed and take pride in delivering exceptional results.</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <FaUsers className="text-orange-500 text-5xl size-15 rounded-full bg-gray-50"/>
                                    <div className="text-sm/6">
                                        <p className="font-semibold text-gray-900">
                                            <a href="#">
                                                <span className="absolute inset-0"></span>
                                                Team Engage Digital
                                            </a>
                                        </p>
                                        <p className="text-gray-600">Team effort</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
            </section>

            <section id="values" className="overflow-hidden py-10 bg-gray-100 sm:py-18">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pt-4 lg:pr-8">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base/7 font-semibold text-orange-500">Where creativity meets
                                    technology, it goes beyond the click.</h2>
                                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Our
                                    values</p>
                                <p className="mt-6 text-lg/8 text-gray-600">Transforming visions into reality, one
                                    innovation at a time. We empower businesses to thrive in a rapidly changing world.
                                    Experience the difference with us.</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg className="absolute top-1 left-1 size-5 text-orange-500"
                                                 viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M12 2l2.59 5.26 5.84.85-4.22 4.11.99 5.79L12 16.77l-5.2 2.73.99-5.79L3.57 8.11l5.84-.85L12 2z"/>
                                                <path d="M4 20c0-3.31 2.69-6 6-6h4c3.31 0 6 2.69 6 6v2H4v-2z"/>
                                            </svg>
                                            Excellence
                                        </dt>
                                        <dd className="inline">We strive for perfection in everything we do.</dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg className="absolute top-1 left-1 size-5 text-orange-500"
                                                 viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd"
                                                      d="M12 2c-.3 0-.6.1-.9.2L5.7 4.3C4.7 4.7 4 5.7 4 6.8V12c0 5 3.3 9.4 8 10.7 4.7-1.3 8-5.7 8-10.7V6.8c0-1.1-.7-2.1-1.7-2.5l-5.4-2.1c-.3-.1-.6-.2-.9-.2zM10 14.3l-2.7-2.7-1.4 1.4 4.1 4.1 7.1-7.1-1.4-1.4L10 14.3z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                            Integrity
                                        </dt>
                                        <dd className="inline">We build trust through honesty and transparency.</dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg className="absolute top-1 left-1 size-5 text-orange-500"
                                                 viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M8 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm14 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM3 18c0-2.5 2-4.5 4.5-4.5h1c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1Zm18 0c0-2.5-2-4.5-4.5-4.5h-1c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1ZM9.5 13c0-1 1.1-2 2.5-2s2.5 1 2.5 2v5c0 .6-.4 1-1 1h-3c-.6 0-1-.4-1-1v-5Z"/>
                                            </svg>
                                            Collaboration
                                        </dt>
                                        <dd className="inline">We believe in the power of teamwork and shared success.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <svg className="absolute top-1 left-1 size-5 text-orange-500"
                                                 viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path
                                                    d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.6 3.2 5.9.5.3.8.9.8 1.5v1c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-1c0-.6.3-1.2.8-1.5 2-1.3 3.2-3.5 3.2-5.9a7 7 0 0 0-7-7ZM9 21a1 1 0 1 0 2 0h2a1 1 0 1 0 2 0h-6Z"/>
                                            </svg>
                                            Innovation
                                        </dt>
                                        <dd className="inline">We embrace change and continuously seek new ways to solve
                                            problems.
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <img src="/values.png" alt="Values" className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442"/>
                    </div>
                </div>
            </section>

            <section id="contact" className="bg-white py-10 sm:py-18">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h3 className="text-2xl text-gray-900 font-semibold mt-4 mb-6">Get in Touch</h3>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        <div className="flex max-w-xs flex-col items-center gap-y-2 text-center">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                                <FaEnvelope className="text-red-500 text-2xl" />
                            </div>
                            <dt className="text-base text-gray-600">Email</dt>
                            <dd className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                                contact@company.com
                            </dd>
                        </div>
                        <div className="flex max-w-xs flex-col items-center gap-y-2 text-center">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                                <FaPhone className="text-green-500 text-2xl" />
                            </div>
                            <dt className="text-base text-gray-600">Phone</dt>
                            <dd className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                                +263 xx xxx xxxx
                            </dd>
                        </div>
                        <div className="flex max-w-xs flex-col items-center gap-y-2 text-center">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                                <FaMapMarkedAlt className="text-red-500 text-2xl" />
                            </div>
                            <dt className="text-base text-gray-600">Location</dt>
                            <dd className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                                475 Bebe St, Harare, Zim
                            </dd>
                        </div>
                        <div className="flex max-w-xs flex-col items-center gap-y-2 text-center">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                                <FaFacebook className="text-blue-600 text-2xl" />
                            </div>
                            <dt className="text-base text-gray-600">Facebook</dt>
                            <dd className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                                @company
                            </dd>
                        </div>
                        <div className="flex max-w-xs flex-col items-center gap-y-2 text-center">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                                <FaLinkedin className="text-blue-700 text-2xl" />
                            </div>
                            <dt className="text-base text-gray-600">LinkedIn</dt>
                            <dd className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                                company-linkedin
                            </dd>
                        </div>
                        <div className="flex max-w-xs flex-col items-center gap-y-2 text-center">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                                <FaInstagram className="text-pink-500 text-2xl" />
                            </div>
                            <dt className="text-base text-gray-600">Instagram</dt>
                            <dd className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                                @company_ig
                            </dd>
                        </div>
                    </dl>
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default AboutPage;