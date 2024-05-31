import { AnimatedGradientTextDemo } from "../HomeLandingPage/AnimetedText";

export default function Component() {
  return (
    <>
      <section className="w-full pt-8 md:pt-12 lg:pt-16">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <AnimatedGradientTextDemo />
              <h2 className="text-3xl font-bold text-[#112233] tracking-tighter sm:text-5xl">
                Discover What Makes Us Unique
              </h2>
              <p className="max-w-[900px] text-[#112233] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our product offers a range of features that set us apart from
                the competition. Explore what makes us the best choice for your
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-12 pt-6 md:pb-20 md:pt-8">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden dark:bg-gray-950">
          <div className="p-6 flex items-start gap-4">
            <div className="bg-gray-100 rounded-xl p-2 dark:bg-gray-800">
              <BoltIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg text-[#112233] font-semibold">
                Blazing Fast
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our platform is optimized for lightning-fast performance,
                ensuring your users get the best experience.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden dark:bg-gray-950">
          <div className="p-6 flex items-start gap-4">
            <div className="bg-gray-100 rounded-xl p-2 dark:bg-gray-800">
              <ShieldCheckIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg text-[#112233] font-semibold">
                Secure &amp; Reliable
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your data is safe with our enterprise-grade security features
                and redundant infrastructure.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden dark:bg-gray-950">
          <div className="p-6 flex items-start gap-4">
            <div className="bg-gray-100 rounded-xl p-2 dark:bg-gray-800">
              <MoveHorizontalIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg text-[#112233] font-semibold">
                Highly Customizable
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tailor our platform to your unique needs with our extensive
                customization options.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden dark:bg-gray-950">
          <div className="p-6 flex items-start gap-4">
            <div className="bg-gray-100 rounded-xl p-2 dark:bg-gray-800">
              <SparklesIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg text-[#112233] font-semibold">
                Delightful User Experience
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our intuitive and visually appealing interface ensures your
                users enjoy using your product.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden dark:bg-gray-950">
          <div className="p-6 flex items-start gap-4">
            <div className="bg-gray-100 rounded-xl p-2 dark:bg-gray-800">
              <CpuIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg text-[#112233] font-semibold">
                Powerful Integrations
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Seamlessly integrate our platform with your existing tools and
                workflows.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden dark:bg-gray-950">
          <div className="p-6 flex items-start gap-4">
            <div className="bg-gray-100 rounded-xl p-2 dark:bg-gray-800">
              <RocketIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg text-[#112233] font-semibold">
                Accelerate Your Growth
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our platform is designed to help you scale your business and
                reach new heights.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SparklesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
      <path d="M4 17v2" />
      <path d="M5 18H3" />
    </svg>
  );
}

function CombineIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function MergeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  );
}

function WorkflowIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  );
}
