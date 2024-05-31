import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { InteractiveIcon } from "@/components/HomeLandingPage/InteractiveIcon";

export default function Hero() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#223344] via-[#112233] to-[#001122] text-white w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="space-y-2 mb-10">
              <h1 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Deploy Your Code with Ease,
                <span className="bg-[#FF6600] p-1 rotate-50 ">Anywhere</span>
              </h1>
              <p className="max-w-[600px] text-[#C0C0C0] md:text-xl dark:text-[#C0C0C0]">
                RunYour.Codes empowers developers to deploy their applications
                seamlessly on the cloud or on their own servers. Experience the
                freedom and flexibility of efficient deployment, tailored to
                your needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-xl bg-[#FF6600] px-12 py-6 text-sm font-medium text-gray-50 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
                prefetch={false}
              >
                Get Started on Cloud
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#FF6600] px-12 py-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
                prefetch={false}
              >
                Get Started on Self-Hosted
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-4 overflow-hidden text-[#FF6600]">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/?u=a042581f4e29026704" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/?u=a042581f4e29026704d" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/?u=a042581f4e2902670" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/?u=a042581f4e2902704d" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/?u=a042581f49026704d" />
                </Avatar>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Used by 1k+ developers
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <InteractiveIcon />
          </div>
        </div>
      </section>
    </>
  );
}
