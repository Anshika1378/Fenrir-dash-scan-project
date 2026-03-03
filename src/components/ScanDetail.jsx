import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import radio from "../assets/media/radio.png";
import apps from "../assets/media/apps.png";
import briefing from "../assets/media/briefing.png";
import code from "../assets/media/qr-code.png";
import schedule from "../assets/media/event.png";
import notification from "../assets/media/notification.png";
import settings from "../assets/media/settings.png";
import support from "../assets/media/headset.png";
import Top from "./Top";

export default function ScanDetail() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-[#121212]">

      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-gray-200 dark:bg-[#1A1A1A]">
        <h1 className="text-lg font-bold flex gap-2 items-center">
          <img src={radio} alt="radio" className="h-4 w-4" />
          aps
        </h1>

        <button onClick={() => setOpen(true)}>
          <FiMenu size={24} />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 z-50
        h-screen lg:min-h-screen
        w-64 bg-gray-200 dark:bg-[#1A1A1A] p-6
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >
        <h1 className="text-xl font-bold mb-10 flex gap-2 items-center">
          <img src={radio} alt="radio" className="h-4 w-4" />
          <a href="/">aps</a>
        </h1>

        <ul className="space-y-5">
          <li className=" flex items-center">
            <img src={apps} alt="apps" className="h-4 w-4 mr-2" />
           <a href="/dashboard"> Dashboard</a>
          </li>

          <li className="flex items-center">
            <img src={briefing} alt="apps" className="dark:invert h-4 w-4 mr-2" />
            Projects
          </li>

          <li className="text-teal-500 font-semibold flex items-center">
            <img src={code} alt="apps" className="h-4 w-4 mr-2 dark:invert" />
            Scans
          </li>

          <li className="flex items-center">
            <img src={schedule} alt="apps" className="h-4 w-4 mr-2 dark:invert" />
            Schedule
          </li>

          <li className="flex items-center">
            <img src={notification} alt="apps" className="h-4 w-4 mr-2 dark:invert" />
            Notification
          </li>

          <li className="flex items-center">
            <img src={settings} alt="apps" className="h-4 w-4 mr-2 dark:invert" />
            Settings
          </li>

          <li className="flex items-center">
            <img src={support} alt="apps" className="h-4 w-4 mr-2 dark:invert" />
            Support
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-10 space-y-6">
        <Top />
        <div className="w-full h-px bg-gray-300 dark:bg-gray-700"></div>

        {/* Progress Card */}
        <div className="bg-[#F3F4F6] dark:bg-[#1F1F1F] p-4 sm:p-6 rounded-xl shadow">
          <div className="flex flex-col lg:flex-row gap-8">

            <div className="flex justify-center lg:justify-start">
              <div className="w-28 h-28 rounded-full bg-[#0B1220] 
                flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-bold text-teal-400">0%</span>
                <span className="text-xs text-gray-400">In Progress</span>
              </div>
            </div>

            <div className="hidden lg:block w-px h-24 bg-gray-300 dark:bg-gray-700"></div>

            <div className="flex-1">
              <div className="relative overflow-x-auto">
                <div className="min-w-[600px]">
                  <div className="flex justify-between items-center relative">
                    <div className="absolute top-5 left-0 right-0 h-px bg-gray-300 dark:bg-gray-700"></div>

                    {["Spidering","Mapping","Testing","Validating","Reporting"].map((step, i) => (
                      <div key={i} className="relative flex flex-col items-center z-10">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm
                          ${i === 0
                            ? "bg-teal-500 text-white shadow-lg"
                            : "bg-gray-200 dark:bg-[#2A2A2A] text-gray-500"}`}
                        >
                          {i + 1}
                        </div>
                        <span className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px bg-gray-300 dark:bg-gray-700"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-4 text-sm">
                <div>
                  <p className="text-gray-400">Scan Type</p>
                  <p className="font-semibold">Grey Box</p>
                </div>
                <div>
                  <p className="text-gray-400">Targets</p>
                  <p className="font-semibold break-words">google.com</p>
                </div>
                <div>
                  <p className="text-gray-400">Started At</p>
                  <p className="font-semibold">Nov 22, 09:00AM</p>
                </div>
                <div>
                  <p className="text-gray-400">Credentials</p>
                  <p className="font-semibold">2 Active</p>
                </div>
                <div>
                  <p className="text-gray-400">Files</p>
                  <p className="font-semibold break-words">Control.pdf</p>
                </div>
                <div>
                  <p className="text-gray-400">Checklists</p>
                  <p className="font-semibold text-teal-500">40/350</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-black text-green-400 p-4 sm:p-6 rounded-xl 
            h-[300px] sm:h-[400px] overflow-auto font-mono text-sm">
            [09:00:00] Starting scan... <br />
            [09:01:00] Target identified: helpdesk.demo.com <br />
            [09:02:00] Running tests...
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-[#1F1F1F] p-4 rounded-xl shadow">
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs">
                Critical
              </span>
              <h3 className="mt-2 font-semibold">
                SQL Injection in Authentication Endpoint
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 break-words">
                /api/users/profile
              </p>
            </div>

            <div className="bg-white dark:bg-[#1F1F1F] p-4 rounded-xl shadow">
              <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs">
                High
              </span>
              <h3 className="mt-2 font-semibold">
                Unauthorized Access to Metadata
              </h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}