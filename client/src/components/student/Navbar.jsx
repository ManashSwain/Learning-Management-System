import React, { useContext, useState } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { ContextProvider } from "../../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const { user, isLoaded } = useUser();
  const { openSignIn } = useClerk();
  // eslint-disable-next-line no-unused-vars
  const {educator,setEducator} = useContext(ContextProvider);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <nav className="border-gray-200 z-50 relative">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Flowbite
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              open ? "block" : "hidden"
            } md:flex items-center space-x-8 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent z-50 md:space-x-8 md:justify-end`}
          >
            <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border border-gray-100 md:border-0 bg-gray-50 md:bg-white rounded-lg md:rounded-none">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700"
                >{ educator ? "Educator Dashboard" :
                  "Become Educator"}
                </a>
              </li>
              <li>
                <a className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700">
                  My Enrollments
                </a>
              </li>
              <li>
                {user ? (
                  <UserButton />
                ) : (
                  <button
                    onClick={() => {
                      openSignIn();
                    }}
                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700"
                  >
                    Create Account
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
