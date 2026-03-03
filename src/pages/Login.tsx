import loginBg from "../assets/login-page/login-bg.png";
import { Check, Star } from "lucide-react";
import Logo from "../components/ui/logo";

const SignupLoginForm = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      {/* Logo Top Left */}
      <div className="absolute top-5 left-5">
        <Logo />
      </div>

      <div className="min-h-screen flex items-center justify-between px-10 lg:px-20">
        {/* Left Section */}
        <div className="hidden lg:flex flex-col max-w-xl text-white space-y-8">
          <h1 className="text-4xl font-semibold leading-tight">
            Expert level Cybersecurity <br />
            in <span className="text-[#0CC8A8]">hours</span> not weeks.
          </h1>

          <div>
            <h2 className="text-lg font-medium mb-4">What's Included</h2>
            <div className="space-y-3 text-sm text-gray-200">
              <p className="flex items-center gap-2">
                <Check size={18} color="green" /> Effortlessly spider and map
                targets to uncover hidden security flaws
              </p>
              <p className="flex items-center gap-2">
                <Check size={18} color="green" /> Deliver validated findings in
                hours, not weeks
              </p>
              <p className="flex items-center gap-2">
                <Check size={18} color="green" /> Generate enterprise-grade
                security reports automatically
              </p>
            </div>
          </div>

          <div className="pt-6 space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Star size={18} fill="#0CC8A8" color="#0CC8A8" />
              <span>Trustpilot</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">
                Rated 4.5/5.0
              </span>
              <span className="text-gray-400">(100k+ reviews)</span>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-semibold text-gray-900 text-center mb-2">
            Sign up
          </h1>

          <p className="text-sm text-gray-600 text-center mb-6">
            Already have an account?{" "}
            <span className="text-[#0CC8A8] cursor-pointer hover:underline">
              Log in
            </span>
          </p>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="First name*"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
            />

            <input
              type="text"
              placeholder="Last name*"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
            />

            <input
              type="email"
              placeholder="Email address*"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
            />

            <input
              type="password"
              placeholder="Password (8+ characters)*"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
            />

            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-[#0CC8A8]"
              />
              <p>
                I agree to Aps's{" "}
                <span className="text-[#0CC8A8] hover:underline cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-[#0CC8A8] hover:underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            <button className="w-full bg-[#039c83] hover:bg-[#027a68] text-white py-3 rounded-md text-sm font-medium transition-colors">
              Create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLoginForm;
