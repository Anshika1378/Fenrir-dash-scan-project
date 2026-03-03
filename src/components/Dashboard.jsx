// import { AiOutlineHome } from "react-icons/ai";
import { useState } from "react";

import { FiMenu } from "react-icons/fi"; 
import { Link,useNavigate } from "react-router-dom";
import radio from "../assets/media/radio.png";
import apps from "../assets/media/apps.png";
import briefing from "../assets/media/briefing.png";
import code from "../assets/media/qr-code.png";
import schedule from "../assets/media/event.png";
import notification from "../assets/media/notification.png";
import settings from "../assets/media/settings.png";
import support from "../assets/media/headset.png";
import critical from "../assets/media/block.png";
import Top from "./Top";


const scans = [

  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    critical: 5,
    high: 12,
    medium: 23,
    low: 18,
    vulnerabilities: { total: 58, critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 2,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Completed",
    progress: 100,
    critical: 2,
    high: 4,
    medium: 8,
    low: 1,
    vulnerabilities: { total: 58, critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 3,
    name: "Web App Servers",
    type: "Greybox",
    status: "Failed",
    progress: 10,
    critical: 5,
    high: 12,
    medium: 23,
    low: 18,
    vulnerabilities: { total: 58, critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
  {
    id: 4,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Completed",
    progress: 100,
    critical: 2,
    high: 4,
    medium: 8,
    low: 1,
    vulnerabilities: { total: 58, critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
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

  {/* Sidebar Panel */}
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
      <li className="text-teal-500 font-semibold flex items-center">
        <img src={apps} alt="apps" className="h-4 w-4 mr-2" />
        Dashboard
      </li>

      <li className="flex items-center">
        <img
          src={briefing}
          alt="apps"
          className="dark:invert h-4 w-4 mr-2"
        />
        Projects
      </li>

      <li className="flex items-center">
        <img src={code} alt="apps" className="h-4 w-4 mr-2 dark:invert" />
        <Link to="/scan">Scans</Link>
      </li>

      <li className="flex items-center">
        <img
          src={schedule}
          alt="apps"
          className="h-4 w-4 mr-2 dark:invert"
        />
        Schedule
      </li>

      <li className="flex items-center">
        <img
          src={notification}
          alt="apps"
          className="h-4 w-4 mr-2 dark:invert"
        />
        Notification
      </li>

      <li className="flex items-center">
        <img
          src={settings}
          alt="apps"
          className="h-4 w-4 mr-2 dark:invert"
        />
        Settings
      </li>

      <li className="flex items-center">
        <img
          src={support}
          alt="apps"
          className="h-4 w-4 mr-2 dark:invert"
        />
        Support
      </li>
    </ul>
  </div>

      {/* Main */}
      <div className="flex-1 p-4 sm:p-6 lg:p-10">
        <Top />

        <div className="w-full h-px bg-gray-300 my-4"></div>

        {/* Top Stats Responsive */}
        <div className="flex flex-wrap gap-y-4 text-sm sm:text-base">
          <div className="w-1/2 sm:w-1/3 lg:w-auto px-4">
            <h1 className="text-gray-400">
              Org:{" "}
              <span className="text-black dark:text-white font-semibold">
                Project X
              </span>
            </h1>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-auto px-4">
            <h1 className="text-gray-400">
              Owner:{" "}
              <span className="text-black dark:text-white font-semibold">
                Nammagiri
              </span>
            </h1>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-auto px-4">
            <h1 className="text-gray-400">
              Total Scan:{" "}
              <span className="text-black dark:text-white font-semibold">
                100
              </span>
            </h1>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-auto px-4">
            <h1 className="text-gray-400">
              Scheduled:{" "}
              <span className="text-black dark:text-white font-semibold">
                1000
              </span>
            </h1>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-auto px-4">
            <h1 className="text-gray-400">
              Rescans:{" "}
              <span className="text-black dark:text-white font-semibold">
                100
              </span>
            </h1>
          </div>

          <div className="w-1/2 sm:w-1/3 lg:w-auto px-4">
            <h1 className="text-gray-400">
              Failed Scan:{" "}
              <span className="text-black dark:text-white font-semibold">
                100
              </span>
            </h1>
          </div>

          <div className="w-full sm:w-auto px-4 text-gray-400">10 mins ago</div>
        </div>

        {/* Severity Cards Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          {[
            { title: "Critical Severity", value: 86, color: "red-600" },
            { title: "High Severity", value: 16, color: "red-600" },
            { title: "Medium Severity", value: 26, color: "green-600" },
            { title: "Low Severity", value: 16, color: "red-600" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-white dark:bg-black dark:text-white"
            >
              <div className="flex items-center gap-4">
                <h1 className="text-gray-400">{item.title}</h1>
                <img src={critical} className="h-4 w-4 bg-red-100" />
              </div>
              <h1>
                {item.value}{" "}
                <span className={`text-${item.color}`}>
                  0.9% increase than yesterday
                </span>
              </h1>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gray-300 mb-5"></div>

        {/* Table Responsive */}
        <div className="bg-white dark:bg-[#1F1F1F] rounded-xl shadow overflow-x-auto">
          <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between p-4">
            <div className="relative w-full md:max-w-sm">
              <input
                type="search"
                placeholder="Search scans..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700
                bg-white dark:bg-[#1A1A1A] text-sm focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]"
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              <button className="px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] text-sm">
                Filter
              </button>

              <button className="px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1A1A1A] text-sm">
                Columns
              </button>

              <button className="px-5 py-2.5 rounded-lg bg-[#0CC8A8] text-white text-sm font-medium">
                + New Scan
              </button>
            </div>
          </div>

          <table className="w-full min-w-[700px]">
            <thead className="bg-gray-100 dark:bg-[#2A2A2A]">
              <tr>
                <th className="p-4 text-left">Scan Name</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Progress</th>
                <th className="p-4 text-left">Vulnerability</th>
                <th className="p-4 text-left">Last Scan</th>
              </tr>
            </thead>

            <tbody>
              {scans.map((scan) => (
                <tr
                  key={scan.id}
                  onClick={() => navigate("/scan")}
                  className="border-t cursor-pointer hover:bg-gray-50 dark:hover:bg-[#2A2A2A]"
                >
                  <td className="p-4">{scan.name}</td>
                  <td className="p-4">{scan.type}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        scan.status === "Completed"
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {scan.status}
                    </span>
                  </td>
                  <td className="p-4">{scan.progress}%</td>
                  <td className="p-4">
                    <div className="flex gap-2 text-xs font-semibold">
                      <span className="px-2 py-1 rounded bg-red-100 text-red-600">
                        {scan.vulnerabilities.critical}
                      </span>
                      <span className="px-2 py-1 rounded bg-orange-100 text-orange-600">
                        {scan.vulnerabilities.high}
                      </span>
                      <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700">
                        {scan.vulnerabilities.medium}
                      </span>
                      <span className="px-2 py-1 rounded bg-green-100 text-green-600">
                        {scan.vulnerabilities.low}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-400 text-sm">{scan.lastScan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
