import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { PiPhoneCallThin } from "react-icons/pi";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-sky-50 text-gray-800 pt-10 pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          {/* Branding */}
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <div className="flex justify-center lg:justify-start">
              <h2 className="text-2xl font-bold">MoVeste</h2>
            </div>
            <p className="text-sm text-center lg:text-left mt-2 mb-1">
              MoVeste is your favorite fashion brand.
            </p>
            <div className="py-1 flex flex-col items-center lg:items-start justify-center lg:justify-start">
              <p className="flex items-center gap-1 text-sm text-center lg:text-left">
                <PiPhoneCallThin className="text-lg" />
                +880 1684 410851
              </p>
              <p className="flex items-center gap-1 text-sm text-center lg:text-left">
                <PiPhoneCallThin className="text-lg" /> +880 1894 567180
              </p>
              <p className="flex items-center gap-1 text-sm text-center lg:text-left">
                <IoMailOutline className="text-lg" />
                moveste2230@gmail.com
              </p>
            </div>

            <div className="flex justify-center lg:justify-start mt-4 space-x-4 text-xl">
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Press</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Products</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link>Features</Link>
              </li>
              <li>
                <Link>Pricing</Link>
              </li>
              <li>
                <Link>Updates</Link>
              </li>
              <li>
                <Link>Integrations</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link>Help Center</Link>
              </li>
              <li>
                <Link>Guides</Link>
              </li>
              <li>
                <Link>Community</Link>
              </li>
              <li>
                <Link>Report a Bug</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms of Service</Link>
              </li>
              <li>
                <Link>Cookie Policy</Link>
              </li>
              {/* Payment Image */}
              <div className="relative -left-3 top-1">
                <img className="w-44" src="./images/payment.png" alt="" />
              </div>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">MoVeste</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
