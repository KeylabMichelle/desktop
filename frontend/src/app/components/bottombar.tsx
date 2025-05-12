"use client";


import { useEffect, useState } from "react";

export default function BottomBar() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            });
            const dateString = now.toLocaleDateString();
            setTime(`${timeString} ${dateString}`);
        };
        updateTime(); // Initial call to set the time immediately
        const interval = setInterval(updateTime, 60000); // Update every minute
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);




    return (
        <div className="fixed bottom-0 left-0 right-0 text-white bg-primary-dark h-12 flex items-center justify-between px-4 shadow-lg z-50">
            <div className="flex-1">

            </div>

            <div className="flex items-center gap-3 flex-1 justify-center">

                <img src="windows.png" alt="Windows logo" width={24} height={24} />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-amber-50 text-primary-dark px-2 py-1 focus:outline-none rounded-md text-sm w-40 "
                />

            </div>

            <div className="flex-1 flex items-center justify-end gap-4">
                <span className="text-sm">
                    {time}
                </span>
            </div>
        </div>
    );
}