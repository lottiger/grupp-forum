import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-gray-600 text-white shadow-md mt-4 w-full">
      <div className="container mx-auto flex flex-col  justify-between items-center p-2">
        <div className=" py-5 flex flex-col  items-center justify-between w-full">
          <div className="flex items-center space-x-4 md:mt-0">
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
          <div className="container mx-auto text-center mt-4 text-xs">
        <p>&copy; {new Date().getFullYear()} OnlineForum AB. Alla rättigheter förbehållna.</p>
      </div>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;