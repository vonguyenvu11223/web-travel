import React from 'react';
import PageHeader from '@/components/page-header';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface ContactItemProps {
    icon?: React.ReactNode;
    title: string;
    text: string;
}

 function ContactForm() {
   

    return (
        <div className="mx-auto">
            
            <form className="space-y-4">
                
                <div>
                    <label htmlFor="name" className="block font-medium text-gray-700">
                        Name:
                    </label>
                    <input
                        type="name"
                        id="name"
                        value={""}

                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-2 transition"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={""}
                        
                        required
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-2 transition"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block font-medium text-gray-700">
                        Message:
                    </label>
                    <textarea
                        id="message"
                        value={""}
                       
                        required
                        rows={5}
                        className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-2 transition"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-primary text-white uppercase font-semibold py-3 px-4 rounded hover:bg-blue-700 transition"
                >
                    Send Now
                </button>
            </form>
        </div>
    );
}

function ContactItem({ icon, title, text }: ContactItemProps) {
    return (
        <div className="flex items-center mb-4">
            {icon && <span className="mr-4">{icon}</span>}
            <div>
                <h3 className="text-sm font-light tracking-wider mb-1">{title}</h3>
                <p className="text-lg">{text}</p>
            </div>
        </div>
    );
}

export default function ContactUs() {
    return (
        <div>
            <PageHeader
                title="Contact Us"
                sub_title="We’re here to help and answer any questions you might have."
                img="https://res.cloudinary.com/drnf8u8vq/image/upload/v1738730453/nextravel/uganda_ylddjc.webp"
            />
            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Left Column: Contact Form */}
                    <div className="md:w-1/2 bg-white rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-lg mb-6">
                            Whether you have a question about our services or need assistance planning your next adventure, our team is ready to help. Fill out the form below and we’ll get back to you as soon as possible.
                        </p>
                        <ContactForm />
                    </div>
                    {/* Right Column: Two blocks for Google Map and Contact Information */}
                    <div className="md:w-1/2 flex flex-col gap-8">
                        {/* Google Map Block without background */}
                        <div className="rounded-lg shadow overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Our Location"
                            ></iframe>
                        </div>
                        {/* Contact Information Block with background */}
                        <div className="rounded-lg p-6 border border-gray-200">
                            <ContactItem
                                icon={<MapPinIcon className="h-6 w-6 text-gray-800" />}
                                title="ADDRESS"
                                text="123 Main Street - London, UK"
                            />
                            <ContactItem
                                icon={<PhoneIcon className="h-6 w-6 text-gray-800" />}
                                title="PHONE"
                                text="+1 (555) 123-4567"
                            />
                            <ContactItem
                                icon={<EnvelopeIcon className="h-6 w-6 text-gray-800" />}
                                title="EMAIL"
                                text="info@nextravel.com"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
