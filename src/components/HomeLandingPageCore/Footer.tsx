import Link from "next/link";
import { SiRundeck } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <SiRundeck className="h-6 w-6" />
          <span className="text-xl font-bold ml-2">RunYour.Codes</span>
        </div>
        <div className="text-sm mt-4 md:mt-0">
          <p>&copy; 2024 runyourcodes. All rights reserved.</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link href="#" target="_blank" prefetch={false}>
            <FaGithub className="h-5 w-5 hover:text-gray-300" />
          </Link>

          <Link href="#" target="_blank" prefetch={false}>
            <FaXTwitter className="h-5 w-5 hover:text-gray-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
