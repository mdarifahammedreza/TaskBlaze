import React from "react";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { PiCertificateDuotone } from "react-icons/pi";


const TaskViewCard = ({ title, description, teamName, category, endDate, completedCount }) => {
    return (



        <div className="bg-gray-700 text-white shadow-lg p-4 max-w-xs max-h-48 min-w-64  ">
            <h2 className="text-xl font-semibold text-cyan-500">{title}</h2>
            {/* <p className="text-sm text-gray-300 mt-2">{description}</p> */}
            <div className="mt-4 flex justify-between text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold"><PiMicrosoftTeamsLogo /></span>
                    <span>{teamName}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="font-semibold"><PiCertificateDuotone />
                    </span>
                    <span>{category}</span>
                </div>
            </div>
            <div className="mt-4 flex justify-between text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                    <span className="font-semibold">End Date:</span>
                    <span>{endDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="font-semibold">Completed:</span>
                    <span>{completedCount}</span>
                </div>
            </div>
        </div>

    );
};

export default TaskViewCard;
