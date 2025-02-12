import ChatUI from '@/components/ChatAI/ChatUI'
import TaskViewCard from '@/components/Task/CardUi'
import { GrTask } from "react-icons/gr";
import React from 'react'

export default function () {
    return (
        <div className='flex'>
            <ChatUI />
            <div className="bg-gray-800 ">
                <div className='flex justify-center items-center bg-cyan-400 text-slate-200 text-2xl font-semibold p-2 gap-2'><GrTask />
                    <p className=''>Upcoming Task</p>
                </div>

               <div className=''>
               <TaskViewCard
                    title="AI Research Project"
                    description="Exploring new AI algorithms for natural language processing."
                    teamName="AI Innovators"
                    category="Research"
                    endDate="2025-05-12"
                    completedCount={5}
                />
               </div>
            </div>
        </div>
    )
}
