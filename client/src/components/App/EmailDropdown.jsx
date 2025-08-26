import React, { useRef, useState, useEffect } from "react";

function EmailDropdown({ emailOptions, handleAddEmail, selectedEmailsList, max }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const isMaxReached = selectedEmailsList.length >= max;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown if max is reached
  useEffect(() => {
    if (isMaxReached) {
      setIsDropdownOpen(false);
    }
  }, [isMaxReached]);

  const filteredOptions = emailOptions
    .filter((email) =>
      email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => a.localeCompare(b));

  return (
    <div className="relative w-full max-w-md" ref={dropdownRef}>
      {/* Search Input */}
      <input
        type="text"
        placeholder={isMaxReached ? `Max ${max} emails selected` : "Search email..."}
        value={searchQuery}
        onChange={(e) => {
          if (!isMaxReached) {
            setSearchQuery(e.target.value);
            setIsDropdownOpen(true); // keep dropdown open while typing
          }
        }}
        onFocus={() => {
          if (!isMaxReached) setIsDropdownOpen(true); // always show on focus
        }}
        disabled={isMaxReached}
        className={`w-full border border-gray-300 rounded px-3 py-2 text-white focus:outline-none focus:ring focus:border-blue-300 ${
          isMaxReached ? "bg-black-100 cursor-not-allowed" : ""
        }`}
      />

      {/* Dropdown List */}
      {isDropdownOpen && !isMaxReached && (
        <div className="absolute left-0 right-0 mt-1 z-50 bg-white border border-gray-300 rounded w-full max-h-[100px] overflow-y-auto shadow-md">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((email, idx) => (
              <div
                key={idx}
                className="px-3 py-2 cursor-pointer hover:bg-blue-100 text-sm text-black"
                onClick={() => {
                  handleAddEmail(email);
                  setSearchQuery("");
                  setIsDropdownOpen(false);
                }}
              >
                {email}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-gray-400 text-sm">
              No matching emails
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default EmailDropdown;
