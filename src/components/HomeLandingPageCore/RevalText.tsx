import TextReveal from "@/components/magicui/text-reveal";

export default async function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg  bg-white dark:bg-black">
      <TextReveal text="Deploys so smooth, you'll forget the bugs 🐛😎" />
    </div>
  );
}
