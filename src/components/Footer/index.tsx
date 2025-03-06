import Image from 'next/image';
import Link from 'next/link';
import { IconFacebook, IconInstagram, IconTiktok, IconTwitter } from "../icons";

const data = {
  socials: [
    {
      icon: <IconFacebook className="w-8 h-8 fill-primary" />,
      link: "https://www.facebook.com/",
      title: "Facebook",
    },
    {
      icon: <IconTiktok className="w-8 h-8 fill-primary" />,
      link: "https://www.tiktok.com/",
      title: "Tiktok",
    },
    {
      icon: <IconTwitter className="w-8 h-8 fill-primary" />,
      link: "https://twitter.com/",
      title: "Twitter",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FooterAbout />
        <FooterCompany />
        <FooterDestinations />
        <FooterInstagram />
      </div>
    </footer>
  );
};

const FooterAbout = () => {
  return (
    <div>
      <div className="mb-4">
        <Link href="#">
          <Image src="/img/white-logo.png" alt="Logo" width={180} height={70} />
        </Link>
      </div>
      <p>
        5th Flora, 700/D Kings Road, Green <br /> Lane New York-1782 <br />
        <Link href="tel:+103678262567">+10 367 826 2567</Link> <br />
        <Link href="mailto:contact@nexttravel.com">contact@nexttravel.com</Link>
      </p>
      <div className="flex space-x-4 mt-4">
        {data.socials.map((social, index) => (
          <Link key={index} href={social.link} title={social.title} className="text-white hover:text-gray-400">
            {social.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

const FooterCompany = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Company</h3>
      <ul className="space-y-2">
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="#">Terms & condition</Link></li>
        <li><Link href="#">Gallery</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

const FooterDestinations = () => {
  const destinations = ["Tokyo", "Paris", "Rome", "London", "Hongkong", "Bali", "Hanoi", "Bangkok"];
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
      <ul className="grid grid-cols-2 gap-2">
        {destinations.map((destination, index) => (
          <li key={index}><Link href="#">{destination}</Link></li>
        ))}
      </ul>
    </div>
  );
};

const FooterInstagram = () => {
  const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Instagram</h3>
      <div className="grid grid-cols-3 gap-5">
        {images.map((img, index) => (
          <Link key={index} href="#">
            <Image src={`/img/${img}`} alt="Instagram Image" width={100} height={100} className="rounded" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
