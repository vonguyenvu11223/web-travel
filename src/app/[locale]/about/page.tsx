import React from 'react';
import PageHeader from '@/components/page-header';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import ContactForm from '@/components/contactus';
import destinationData from '@/data/destinationData';

interface ContactItemProps {
    icon?: React.ReactNode;
    title: string;
    text: string;
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

function MasonryGallery() {
    // Destination data extracted from your provided data.
    // Use only the first 5 items for the gallery.
    const images = destinationData.data.slice(0, 5);

    return (
        <div className="mt-8">
            <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
                {images.map((item, index) => (
                    <div
                        key={item.title}
                        className={`${index === 0 ? 'col-span-2' : ''}`}
                    >
                        <img
                            src={item.image.src}
                            alt={item.image.alt}
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function AboutUs() {
    return (
        <div>
            <PageHeader
                title="About Us"
                sub_title="Discover Our Journey and Passion for Travel"
                img="https://res.cloudinary.com/drnf8u8vq/image/upload/v1738725077/nextravel/aboutus_vqpcn8.webp"
            />
            <div className="container mx-auto px-4 py-8 space-y-8">
                {/* Top Row: Main Content & Contact Info */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Main Content */}
                    <div className="md:w-2/3 bg-white rounded-lg">
                        <p className="text-lg">
                            <span className="text-6xl font-bold float-left mr-2">O</span>
                            ur journey began with a passion for discovery and a love for the rich tapestry of cultures that define our world. Founded in 2010, Next Travel was born out of a desire to offer unique, curated travel experiences that go beyond the typical tourist path.
                        </p>
                        <div className="h-8" />
                        <p className="text-lg">
                            Our dedicated team of travel experts works tirelessly to craft itineraries that inspire exploration and create lasting memories. Whether you're seeking hidden local gems or iconic global landmarks, we believe that every trip is an opportunity to learn, grow, and connect with the world around us.
                        </p>
                    </div>
                    {/* Contact Info */}
                    <div className="md:w-1/3 p-6 bg-gray-800 text-white rounded-lg">
                        <ContactItem
                            icon={<MapPinIcon className="h-6 w-6" />}
                            title="ADDRESS"
                            text="123 Main Street - London, UK"
                        />
                        <ContactItem
                            icon={<PhoneIcon className="h-6 w-6" />}
                            title="PHONE"
                            text="+1 (555) 123-4567"
                        />
                        <ContactItem
                            icon={<EnvelopeIcon className="h-6 w-6" />}
                            title="EMAIL"
                            text="info@nextravel.com"
                        />
                    </div>
                </div>
                {/* Bottom Row: Gallery & Contact Form */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Gallery in Left Column */}
                    <div className="md:w-2/3 bg-white rounded-lg">
                        <MasonryGallery />
                    </div>
                    {/* Contact Form in Right Column */}
                    <div className="md:w-1/3 py-6 bg-white rounded-lg">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
