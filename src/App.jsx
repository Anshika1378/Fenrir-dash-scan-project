import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ScanDetail from "./components/ScanDetail";
import sun from "./assets/media/sun.png"
import ProtectedRoute from "./components/ProtectRoute";



export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white transition-all">
        <div className="fixed bottom-2 right-4 z-50">
          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 bg-white rounded-lg"
          >
            <img src={sun} alt="" className="h-8"/>
          </button>
        </div>

        <Routes>
  <Route path="/" element={<Login />} />

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />

  <Route
    path="/scan"
    element={
      <ProtectedRoute>
        <ScanDetail />
      </ProtectedRoute>
    }
  />
</Routes>
      </div>
    </BrowserRouter>
  );
}