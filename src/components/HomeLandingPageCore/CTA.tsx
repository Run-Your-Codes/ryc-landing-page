import Link from "next/link";
import RYC from "../HomeLandingPage/RYC";

export default function CTA() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-[#223344] via-[#112233] to-[#001122] text-white md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="">
          <h2 className="text-3xl mb-12 font-bold tracking-tighter md:text-4xl/tight">
            <span className="bg-[#FF6600] p-1 rotate-50 ">Effortless</span> Code
            Deployment
          </h2>
          <p className="max-w-[600px] mb-14  text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Say goodbye to deployment headaches. Click here to streamline your
            process and deploy with ease!
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#FF6600] px-12 py-6 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
            href="#"
            prefetch={false}
          >
            Get Started on Cloud
          </Link>
        </div>
        <RYC />
      </div>
    </section>
  );
}
