import SidebarComponent from "@/components/Sidebar/SidebarComponent";
import Button from "@/components/ui/button";
import Image from "next/image";
export const metadata = {
  title: "TaskBlaze",
  description: `TaskBlaze - Smart Task Management with AI-Powered Productivity  

TaskBlaze is an advanced task management platform designed to help you organize, schedule, and track tasks effortlessly. With seamless integration of the **Kanban model**, TaskBlaze enables smooth workflow visualization, making task prioritization and delegation more efficient.  

One of TaskBlaze’s standout features is its AI-integrated chatbot, which intelligently remembers and prioritizes tasks based on different sectors such as **education, health, work, and personal projects**. Whether you’re a student managing coursework, a professional handling deadlines, or an individual planning daily routines, TaskBlaze adapts to your needs.  

With its intuitive interface and smart scheduling system, TaskBlaze ensures that you stay on top of your responsibilities without feeling overwhelmed. The AI assistant **analyzes your workload, offers reminders, and suggests optimizations** to enhance productivity.  

TaskBlaze is built for teams and individuals, providing real-time collaboration, task sharing, and seamless integration with other productivity tools. Designed with **efficiency, flexibility, and user experience in mind**, TaskBlaze empowers users to **achieve their goals with precision**.  

Start organizing your tasks smarter with TaskBlaze – your AI-powered productivity partner.Keywords for SEO:  
Task management, Kanban model, AI chatbot, task scheduling, productivity tools, smart workflow, task automation, team collaboration, AI assistant, task prioritization.`,
};
export default function Home() {
  
  return (
    <div className="bg-gradient-to-l from-blue-950 via-blue-900 to-blue-950">
    <div className="max-w-3xl text-center  shadow-lg rounded-2xl p-8">
      <h1 className="text-4xl font-bold text-gray-900">Taskblaze</h1>
      <p className="text-lg text-gray-600 mt-4">
        AI-powered task management to boost productivity and streamline your workflow.
      </p>
      <div className="mt-6 grid gap-4">
        <Feature text="AI Assistant for smart suggestions and automation." />
        <Feature text="Create, assign, and track tasks effortlessly." />
        <Feature text="Smart reminders to keep you on schedule." />
        <Feature text="Collaborate seamlessly with your team." />
        <Feature text="Monitor progress with real-time tracking." />
      </div>
      <Button className="mt-6 px-6 py-3 text-lg font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700">
        Get Started
      </Button>
    </div>
   
  </div>
);
}

function Feature({ text }) {
return (
  <div className="flex items-center space-x-3">
    <span className="text-green-500 text-xl">✔</span>
    <p className="text-gray-700 text-lg">{text}</p>
  </div>
);
}