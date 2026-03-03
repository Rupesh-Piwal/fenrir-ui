import loginBg from "../assets/login-page/login-bg.png";
import { Check, Loader2, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/ui/logo";
import { useState } from "react";
import toast from "react-hot-toast";

const SignupLoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
      toast.success("Login successfull!", {
        duration: 2000,
      });
    }, 2500);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center font-sans"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="absolute top-5 left-5">
        <Logo />
      </div>

      <div className="min-h-screen flex items-center justify-between px-10 lg:px-20">
        <div className="hidden lg:flex flex-col max-w-xl text-white space-y-8">
          <h1 className="text-4xl font-semibold leading-tight">
            Expert level Cybersecurity <br />
            in <span className="text-accent">hours</span> not weeks.
          </h1>

          <div>
            <h2 className="text-lg font-medium mb-4">What's Included</h2>
            <div className="space-y-3 text-sm text-white">
              <p className="flex items-center gap-2">
                <Check size={18} color="green" aria-hidden="true" />
                Effortlessly spider and map targets to uncover hidden security
                flaws
              </p>
              <p className="flex items-center gap-2">
                <Check size={18} color="green" aria-hidden="true" />
                Deliver validated findings in hours, not weeks
              </p>
              <p className="flex items-center gap-2">
                <Check size={18} color="green" aria-hidden="true" />
                Generate enterprise-grade security reports automatically
              </p>
            </div>
          </div>

          <div className="pt-6 space-y-2 text-sm text-white">
            <div className="flex items-center gap-2">
              <Star size={18} fill="#0CC8A8" color="#0CC8A8" aria-hidden="true" />
              <span>Trustpilot</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">
                Rated 4.5/5.0
              </span>
              <span className="text-text-secondary">(100k+ reviews)</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md bg-surface rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-semibold text-text-primary text-center mb-2">
            Sign up
          </h1>

          <p className="text-sm text-text-secondary text-center mb-6">
            Already have an account?{" "}
            <span className="text-accent cursor-pointer hover:underline">
              Log in
            </span>
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              disabled={loading}
              placeholder="First name*"
              aria-label="First name"
              required
              className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <input
              type="text"
              disabled={loading}
              placeholder="Last name*"
              aria-label="Last name"
              required
              className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <input
              type="email"
              disabled={loading}
              placeholder="Email address*"
              aria-label="Email address"
              required
              className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <input
              type="password"
              disabled={loading}
              placeholder="Password (8+ characters)*"
              aria-label="Password"
              required
              className="w-full px-4 py-3 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />

            <div className="flex items-start gap-2 text-sm text-text-secondary">
              <input
                type="checkbox"
                disabled={loading}
                required
                aria-label="Agree to terms and conditions"
                className="mt-1 h-4 w-4 accent-accent"
              />
              <p>
                I agree to Aps's{" "}
                <span className="text-accent hover:underline cursor-pointer">
                  Terms & Conditions
                </span>{" "}
                and{" "}
                <span className="text-accent hover:underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent hover:opacity-90 text-white py-3 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupLoginForm;
