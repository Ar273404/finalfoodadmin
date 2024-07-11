import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  HomeIcon,
  UsersIcon,
  CogIcon,
  ArrowLeftOnRectangleIcon as LogoutIcon,
  Bars3Icon as MenuAlt1Icon,
  XMarkIcon as XIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block md:w-64 bg-white shadow-md`}>
        <div className="flex items-center justify-between p-4 bg-blue-600">
          <div className="text-white text-2xl font-bold">Admin</div>
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}>
            <XIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        <nav className="mt-4">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white">
            <HomeIcon className="h-6 w-6 mr-2" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white">
            <UsersIcon className="h-6 w-6 mr-2" />
            Users
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white">
            <ChartBarIcon className="h-6 w-6 mr-2" />
            Analytics
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white">
            <CogIcon className="h-6 w-6 mr-2" />
            Settings
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-600 hover:text-white">
            <LogoutIcon className="h-6 w-6 mr-2" />
            Logout
          </a>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-blue-600">
          <div className="flex items-center">
            <button
              className="md:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}>
              <MenuAlt1Icon className="h-6 w-6 text-gray-600" />
            </button>
            <h1 className="text-3xl font-bold text-gray-700 ml-4">Dashboard</h1>
          </div>
          <div className="flex items-center">
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center text-gray-700">
                <span className="mr-2">Admin</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                  alt="Admin"
                />
              </Menu.Button>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1">
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
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stats Cards */}
            <div className="bg-white shadow-lg rounded-md p-6">
              <div className="text-2xl font-bold text-gray-700">Orders</div>
              <div className="text-4xl font-semibold text-blue-600 mt-2">
                1,234
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-6">
              <div className="text-2xl font-bold text-gray-700">Revenue</div>
              <div className="text-4xl font-semibold text-green-600 mt-2">
                $12,345
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-6">
              <div className="text-2xl font-bold text-gray-700">Users</div>
              <div className="text-4xl font-semibold text-purple-600 mt-2">
                345
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-md p-6">
              <div className="text-2xl font-bold text-gray-700">Reviews</div>
              <div className="text-4xl font-semibold text-yellow-600 mt-2">
                4.5
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-700">Recent Orders</h2>
            <div className="bg-white shadow-lg rounded-md mt-4 overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">ORD1234</td>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">01/01/2023</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">$50.00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">ORD1235</td>
                    <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                    <td className="px-6 py-4 whitespace-nowrap">01/02/2023</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">$75.00</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
