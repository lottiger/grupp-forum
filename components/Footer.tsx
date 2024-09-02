import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-600 text-white shadow-md mt-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between p-2">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="text-left md:mr-4">
            <p>OnlineForum AB</p>
            <p>Fiktivgatan 123, 123 45 Stockholm, Sverige</p>
            <p>Telefon: 08-123 456 78</p>
          </div>
          <div className="flex space-x-4 py-2 md:mt-0">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebook size={20} />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-2 text-sm">
        <p>&copy; {new Date().getFullYear()} OnlineForum AB. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default Footer;