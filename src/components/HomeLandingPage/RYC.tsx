import Globe from "@/components/magicui/globe";

export default function RYC() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg   px-40 pb-40 pt-8 md:pb-60 ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-700/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Run Your Codes
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full " />
    </div>
  );
}
