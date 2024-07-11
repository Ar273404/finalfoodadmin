import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const MainNavbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <a href="/" className="text-xl font-bold text-gray-800">
                Admin
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="https://finalfoodfronted.vercel.app"
                  className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  HomePage
                </a>
                <Link to='/dash'>
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </a>
                </Link>

                <a
                  href="#"
                  className="text-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Settings
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-gray-700 ${
                          active ? "bg-gray-100" : ""
                        }`}>
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-gray-700 ${
                          active ? "bg-gray-100" : ""
                        }`}>
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={`block px-4 py-2 text-sm text-gray-700 ${
                          active ? "bg-gray-100" : ""
                        }`}>
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Users
          </a>
          <a
            href="#"
            className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Settings
          </a>
        </div>
      </div>
    </nav>
  );
};


