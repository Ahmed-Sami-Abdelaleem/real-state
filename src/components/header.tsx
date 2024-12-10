"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Heart,
  History,
  Home,
  LogIn,
  LogOut,
  Menu,
  MessageCircle,
  Plus,
  User,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("forSell");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock authenticated state - replace with your auth logic
  const isAuthenticated = false;
  const user = {
    name: "John Doe",
    image: "/api/placeholder/32/32",
  };

  const tabs = [
    { id: "forSell", label: "For Sell", onClick: () => router.push("/") },
    { id: "forRent", label: "For Rent", onClick: () => router.push("/rent") },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "messages", label: "Message", icon: MessageCircle },
    { id: "agent", label: "Agent", icon: User },
  ];

  const menuItems = [
    {
      id: "account",
      label: "My Account",
      icon: User,
      onClick: () => router.push("/account"),
    },

    {
      id: "history",
      label: "History",
      icon: History,
      onClick: () => router.push("/history"),
    },
    {
      id: "logout",
      label: "Logout",
      icon: LogOut,
      onClick: () => router.push("/logout"),
    },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white shadow-md z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left section: Logo, App Name, and Navigation */}
            <div className="flex items-center">
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Home className="h-8 w-8 text-blue-600" />
                </motion.div>
                <motion.h1
                  className="text-2xl font-bold text-blue-600"
                  whileHover={{ scale: 1.05 }}
                >
                  Taklok
                </motion.h1>
              </div>

              {/* Navigation Tabs */}
              <nav className="hidden md:flex ml-8">
                <div className="relative flex space-x-8">
                  {tabs
                    .filter(
                      (tab) =>
                        isAuthenticated ||
                        (tab.label !== "Wishlist" && tab.label !== "Message")
                    )
                    .map((tab) => (
                      <div key={tab.id} className="relative">
                        <motion.button
                          onClick={() => setActiveTab(tab.id)}
                          className={`px-3 py-2 text-sm font-medium relative flex items-center space-x-1 ${
                            activeTab === tab.id
                              ? "text-blue-600"
                              : "text-gray-600"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tab.icon && <tab.icon className="h-4 w-4" />}
                          <span>{tab.label}</span>
                          {activeTab === tab.id && (
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                              layoutId="underline"
                              initial={false}
                            />
                          )}
                        </motion.button>
                      </div>
                    ))}
                </div>
              </nav>
            </div>

            {/* Right section: Action Buttons */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-4 w-4" />
                <span>Post Your Ad</span>
              </motion.button>

              {isAuthenticated ? (
                <>
                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="md:hidden"
                  >
                    <Menu className="h-6 w-6 text-gray-600" />
                  </button>

                  {/* Desktop User Avatar */}
                  <div className="relative hidden md:block">
                    <motion.button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2"
                    >
                      <img
                        src={user.image}
                        alt="User avatar"
                        className="w-8 h-8 rounded-full"
                      />
                    </motion.button>

                    {/* Desktop Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                        >
                          {menuItems.map((item) => (
                            <button
                              key={item.id}
                              className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              <item.icon className="h-4 w-4" />
                              <span>{item.label}</span>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md flex items-center space-x-2 text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg z-50"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-3">
                    <img
                      src={user.image}
                      alt="User avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium">{user.name}</span>
                  </div>
                  <button onClick={() => setIsSidebarOpen(false)}>
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </div>

                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 w-full p-2 rounded-md hover:bg-gray-50"
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
