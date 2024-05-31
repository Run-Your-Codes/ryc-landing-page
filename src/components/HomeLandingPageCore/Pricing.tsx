import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="bg-gradient-to-r from-[#223344] via-[#112233] to-[#001122] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple pricing for{" "}
            <span className="bg-[#FF6600] p-1">everyone</span>
          </h2>
          <p className="mt-5 max-w-prose mx-auto text-xl text-[#C0C0C0] ">
            Choose an
            <span className="font-semibold text-gray-100">
              {" "}
              affordable plan{" "}
            </span>
            that`s packed with the best features for engaging your audience,
            creating customer loyalty, and driving sales.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="text-center rounded-xl">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>
                A basic plan for startups and individual users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-extrabold text-white">
                $10
                <span className="text-2xl font-medium text-gray-500">
                  /month
                </span>
              </p>
              <Button className="mt-8 w-full bg-[#001122]  text-white hover:bg-[#FF6600]">
                Subscribe
              </Button>
              <ul className="mt-8 space-y-4 text-left">
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  AI-powered analytics
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Basic support
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />5 projects limit
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Access to basic AI tools
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="text-center rounded-xl border-4 border-[#FF6600]">
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <CardDescription>
                A premium plan for growing businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-extrabold text-white">
                $20
                <span className="text-2xl font-medium text-gray-500">
                  /month
                </span>
              </p>
              <Button className="mt-8 w-full   bg-[#001122] text-white hover:bg-[#FF6600]">
                Subscribe
              </Button>
              <ul className="mt-8 space-y-4 text-left">
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Advanced AI insights
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Unlimited projects
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Access to all AI tools
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Custom integrations
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="text-center rounded-xl">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                An enterprise plan with advanced features for large
                organizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-extrabold text-white">
                $50
                <span className="text-2xl font-medium text-gray-500">
                  /month
                </span>
              </p>
              <Button className="mt-8 w-full  bg-[#001122] text-white hover:bg-[#FF6600]">
                Subscribe
              </Button>
              <ul className="mt-8 space-y-4 text-left">
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Custom AI solutions
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Unlimited projects
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Access to all AI tools
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Data security and compliance
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="text-center rounded-xl">
            <CardHeader>
              <CardTitle>Ultimate</CardTitle>
              <CardDescription>
                The ultimate plan with all features for industry leaders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-extrabold text-white">
                $80
                <span className="text-2xl font-medium text-gray-500">
                  /month
                </span>
              </p>
              <Button className="mt-8 w-full  bg-[#001122] text-white hover:bg-[#FF6600]">
                Subscribe
              </Button>
              <ul className="mt-8 space-y-4 text-left">
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Bespoke AI development
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  White-glove support
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Unlimited projects
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Priority access to new AI tools
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-[#FF6600] mr-2" />
                  Highest data security and compliance
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
