import { useState } from "react";
import { useNavigate } from "react-router-dom";
import star from "../assets/media/star.png";

export default function Login() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("auth", "true");

    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* 🔵 Left Side (Hidden on Mobile) */}
      <div className=" md:flex md:w-1/2 
        bg-gradient-to-br from-black via-teal-900 to-orange-600 
        text-white 
        p-6 md:p-16 
        flex-col justify-center">

        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          Expert level Cybersecurity <br />
          in <span className="text-teal-400">hours</span> not weeks.
        </h1>

        <div className="mt-8 md:mt-10 space-y-4 text-gray-300 text-sm md:text-base">
          <h2 className="text-lg md:text-xl font-semibold">What's Included</h2>
          <p>✔ Effortlessly spider and map targets to uncover hidden security flaws</p>
          <p>✔ Deliver high-quality validated findings in hours, not weeks.</p>
          <p>✔ Enterprise grade security reports automatically.</p>
        </div>

        <div className="mt-8 md:mt-10">
          <h2 className="flex items-center text-lg font-semibold">
            <img src={star} alt="star" className="w-4 h-4 mr-2" />
            Trustpilot
          </h2>
          <p className="text-sm md:text-base">
            Rated 4.5/5.0 <span className="text-gray-400">(100k+ reviews)</span>
          </p>
        </div>
      </div>

      {/* 🟢 Right Side */}
      <div className="flex w-full md:w-1/2 items-center justify-center 
        bg-gray-100 dark:bg-[#1A1A1A] 
        px-4 py-8">

        <div className="bg-white dark:bg-[#1F1F1F] 
          text-center 
          p-6 sm:p-8 md:p-10 
          rounded-2xl shadow-xl 
          w-full max-w-md">

          <h2 className="text-2xl font-semibold mb-6">
            Sign in
          </h2>

          <div className="space-y-4">
            <input
              className="w-full p-3 rounded-lg border dark:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              className="w-full p-3 rounded-lg border dark:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="email"
              className="w-full p-3 rounded-lg border dark:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="w-full p-3 rounded-lg border dark:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}