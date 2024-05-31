import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiRundeck } from "react-icons/si";

export default function Component() {
  return (
    <header className="flex h-20 bg-gradient-to-r from-[#223344] via-[#112233] to-[#001122] text-white  w-full shrink-0 items-center px-4 md:px-6">
      <Link href="#" className="mr-6 flex items-center" prefetch={false}>
        <SiRundeck className="h-6 w-6" />
        <span className="text-xl font-bold ml-2">RunYour.Codes</span>
      </Link>
      <nav className="ml-auto hidden gap-4 lg:flex">
        <Link
          href="#"
          className="inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="#"
          className="inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          prefetch={false}
        >
          Services
        </Link>
      </nav>
      <Button className="ml-auto bg-[#FF6600] rounded-lg">Get Started</Button>
    </header>
  );
}
