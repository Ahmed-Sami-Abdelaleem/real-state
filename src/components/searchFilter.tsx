"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Clock, Search, X } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [searchHistory] = useState([
    { id: 1, text: "Modern apartment in downtown", timestamp: "2 days ago" },
    { id: 2, text: "House with garden", timestamp: "3 days ago" },
    { id: 3, text: "Studio apartment", timestamp: "5 days ago" },
    { id: 4, text: "Luxury penthouse", timestamp: "1 week ago" },
  ]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log("Searching for:", searchTerm);
      setIsHistoryOpen(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const clearHistory = (e, id) => {
    e.stopPropagation();
    console.log("Clear history item:", id);
  };

  return (
    <div className="max-w-2xl mx-auto relative">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center p-3 space-x-3">
          {/* Search Icon */}
          <Search className="h-5 w-5 text-gray-400 flex-shrink-0" />

          {/* Search Input */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for houses, apartments..."
            className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
          />

          {/* History Dropdown Button */}
          <motion.button
            onClick={() => setIsHistoryOpen(!isHistoryOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <ChevronDown
              className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                isHistoryOpen ? "transform rotate-180" : ""
              }`}
            />
          </motion.button>

          {/* Search Button */}
          <motion.button
            onClick={handleSearch}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              searchTerm.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!searchTerm.trim()}
          >
            Search
          </motion.button>
        </div>
      </div>

      {/* Search History Dropdown */}
      <AnimatePresence>
        {isHistoryOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full mt-2 bg-white rounded-lg shadow-lg z-50 overflow-hidden"
          >
            <div className="p-2">
              <div className="flex items-center justify-between px-3 py-2 text-sm text-gray-500">
                <span className="font-medium">Recent Searches</span>
                <button
                  onClick={() => console.log("Clear all history")}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Clear All
                </button>
              </div>

              <div className="mt-2">
                {searchHistory.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer group"
                    onClick={() => {
                      setSearchTerm(item.text);
                      setIsHistoryOpen(false);
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-700">
                          {item.text}
                        </span>
                        <span className="text-xs text-gray-400">
                          {item.timestamp}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      initial={{ opacity: 0 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#e5e7eb",
                      }}
                      animate={{ opacity: 1 }}
                      onClick={(e) => clearHistory(e, item.id)}
                      className="p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4 text-gray-400" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div className="border-t border-gray-100 bg-gray-50 p-3">
              <div className="text-xs font-medium text-gray-500 mb-2">
                Quick Filters
              </div>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full hover:border-blue-500 hover:text-blue-500 transition-colors">
                  Apartments
                </button>
                <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full hover:border-blue-500 hover:text-blue-500 transition-colors">
                  Houses
                </button>
                <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full hover:border-blue-500 hover:text-blue-500 transition-colors">
                  For Rent
                </button>
                <button className="px-3 py-1 text-sm bg-white border border-gray-200 rounded-full hover:border-blue-500 hover:text-blue-500 transition-colors">
                  For Sale
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
