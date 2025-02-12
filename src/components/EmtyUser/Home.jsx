
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import Button from "../ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-black text-white p-6 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-50 animate-pulse"></div>
      <div className="lg:w-1/2 text-center lg:text-left p-8 z-10">
        <h1 className="text-6xl font-bold text-cyan-400 glow flex">
          <span className="text-white">Tasks</span>blaze
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          AI-powered task management to boost productivity and streamline your workflow.
        </p>
        <div className="mt-6 grid gap-4">
          <Feature text="AI Assistant for smart suggestions and automation." />
          <Feature text="Create, assign, and track tasks effortlessly." />
          <Feature text="Smart reminders to keep you on schedule." />
          <Feature text="Collaborate seamlessly with your team." />
          <Feature text="Monitor progress with real-time tracking." />
        </div>
      </div>
      
      <div className="lg:w-1/2 flex items-center justify-center bg-gray-900 shadow-lg rounded-2xl p-8 z-10">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold text-center text-white">Log In</h2>
          <form className="mt-6 space-y-4">
            <input type="email" placeholder="Email" className="w-full p-3 bg-gray-800 rounded-md text-white" />
            <input type="password" placeholder="Password" className="w-full p-3 bg-gray-800 rounded-md text-white" />
            <Button className="w-full px-6 py-3 text-lg font-semibold rounded-xl bg-gray-700 text-white hover:bg-gray-600">
              Log In
            </Button>
          </form>
          <div className="mt-4 flex justify-center space-x-4">
            <FaGoogle className="text-red-500 text-3xl cursor-pointer hover:scale-110 transition" />
            <FaGithub className="text-gray-400 text-3xl cursor-pointer hover:scale-110 transition" />
            <FaFacebook className="text-blue-500 text-3xl cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-green-400 text-xl">✔</span>
      <p className="text-gray-300 text-lg">{text}</p>
    </div>
  );
}

