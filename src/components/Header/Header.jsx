import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog, Popover } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-b border-gray-200 shadow-lg sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1 items-center">
          <NavLink to="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="text-3xl font-bold text-white">
              Journey Junction
            </span>
          </NavLink>
        </div>

        <div className="flex items-end justify-end lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white focus:outline-none focus:ring focus:border-purple-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <ul className="md:flex md:space-x-6 md:items-center ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-base font-bold leading-6 text-gray-900  ${
                    isActive ? "text-white" : "text-gray-900"
                  }  `
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destinations"
                className={({ isActive }) =>
                  `text-base font-bold leading-6 text-gray-900  ${
                    isActive ? "text-white" : "text-gray-900"
                  }  `
                }
              >
                Destinations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hotels"
                className={({ isActive }) =>
                  `text-base font-bold leading-6 text-gray-900  ${
                    isActive ? "text-white" : "text-gray-900"
                  }  `
                }
              >
                Hotels
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/restaurants"
                className={({ isActive }) =>
                  `text-base font-bold leading-6 text-gray-900  ${
                    isActive ? "text-white" : "text-gray-900"
                  }  `
                }
              >
                Restaurants
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `text-base font-bold leading-6 text-gray-900  ${
                    isActive ? "text-white" : "text-gray-900"
                  }  `
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-base font-bold leading-6 text-gray-900 focus:outline-none"
              >
                Profile <span aria-hidden="true">&darr;</span>
              </button>
            </div>
            {dropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/likedItems"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                  >
                    Liked Items
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="/saveItem"
                  >
                    Saved Items
                  </NavLink>
                  {/* Add more NavLink items for dropdown options */}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" onClick={handleLinkClick} className="-m-1.5 p-1.5">
              <span className="text-2xl font-semibold leading-6 text-gray-900">
                Journey Junction
              </span>
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  onClick={handleLinkClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/destinations"
                  onClick={handleLinkClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Destinations
                </NavLink>
                <NavLink
                  to="/hotels"
                  onClick={handleLinkClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Hotels
                </NavLink>
                <NavLink
                  to="/restaurants"
                  onClick={handleLinkClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Restaurants
                </NavLink>
                <NavLink
                  to="/blogs"
                  onClick={handleLinkClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </NavLink>
              </div>
              <div className="py-6">
                <NavLink
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </NavLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
