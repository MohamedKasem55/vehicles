import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Footer from "./components/molecules/footer";
import Navbar from "./components/molecules/navbar";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Inbox from "./pages/inbox";
import Settings from "./pages/settings";
import { ISidebarRoute, settingsSidebarRoutes } from "./consts/sidebarRoutes";
import SettingsMainPage from "./pages/settings/settingsMainPage";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <main className="flex-1 flex flex-col bg-[#F5F7F6]">
            <Routes>
              <Route index element={<Navigate to="/login" replace />} />
              <Route path="/login" element={<Login />} />
              <Route path="/settings" element={<Settings />}>
                {settingsSidebarRoutes.map((route: ISidebarRoute) => (
                  <Route path={route.route} element={<SettingsMainPage />} />
                ))}
              </Route>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inbox" element={<Inbox />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
