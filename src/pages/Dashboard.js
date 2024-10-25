import React, { useState } from "react";

const Dashboard = () => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [isRightWidgetsHidden, setRightWidgetsHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
    setRightWidgetsHidden(!isRightWidgetsHidden);
  };

  return (
    <div className="bg-blue-50">
      <div className="flex">
        {/* Sidebar with collapsed by default */}
        <div
          id="sidebar"
          className={`sidebar ${
            isSidebarCollapsed ? "collapsed" : ""
          } w-1/5 bg-white p-6 rounded-r-3xl shadow-lg`}
        >
          <button
            id="toggleSidebar"
            className="text-gray-800 mb-6 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="flex items-center mb-10">
            <img
              src="https://storage.googleapis.com/a1aa/image/4O7e57RoQ7z7Oi7OHYJe5lIS4T5u5SwfzSUdK1M3cDpDl8TnA.jpg"
              alt="Travigo Logo"
              width="30"
              height="30"
              className="mr-2"
            />
            <span className="text-2xl font-bold text-gray-800 sidebar-item-text">
              Travigo
            </span>
          </div>
          <nav className="space-y-6">
            <a
              href="#"
              className="flex items-center text-green-600 font-semibold"
            >
              <i className="fas fa-home mr-3"></i>
              <span className="sidebar-item-text">Dashboard</span>
            </a>
            <a href="#" className="flex items-center text-gray-600">
              <i className="fas fa-ticket-alt mr-3"></i>
              <span className="sidebar-item-text">My Tickets</span>
            </a>
            <a href="#" className="flex items-center text-gray-600">
              <i className="fas fa-heart mr-3"></i>
              <span className="sidebar-item-text">Favorite</span>
            </a>
            <a href="#" className="flex items-center text-gray-600 relative">
              <i className="fas fa-envelope mr-3"></i>
              <span className="sidebar-item-text">Message</span>
              <span className="absolute right-0 top-0 bg-red-500 text-white text-xs rounded-full px-2">
                4
              </span>
            </a>
            <a href="#" className="flex items-center text-gray-600">
              <i className="fas fa-exchange-alt mr-3"></i>
              <span className="sidebar-item-text">Transaction</span>
            </a>
            <a href="#" className="flex items-center text-gray-600">
              <i className="fas fa-cog mr-3"></i>
              <span className="sidebar-item-text">Settings</span>
            </a>
          </nav>
          <div className="mt-20 bg-green-100 p-4 rounded-xl relative">
            <span className="text-green-600 font-semibold sidebar-item-text">
              50% Discount!
            </span>
            <p className="text-gray-600 text-sm sidebar-item-text">
              Get a discount on certain days and don't miss it.
            </p>
            <button className="absolute bottom-4 right-4 bg-orange-500 text-white p-2 rounded-full">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <a href="#" className="flex items-center text-gray-600 mt-10">
            <i className="fas fa-sign-out-alt mr-3"></i>
            <span className="sidebar-item-text">Log Out</span>
          </a>
        </div>

        {/* Main Content */}
        <div
          id="mainContent"
          className={`main-content ${
            isSidebarCollapsed ? "collapsed" : ""
          } w-4/5 p-10`}
        >
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Hello, Jeremy! <span className="wave">👋</span>
              </h1>
              <p className="text-gray-600">
                Welcome back and explore the world.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  className="bg-gray-100 p-3 rounded-full pl-10"
                  placeholder="Search Destination..."
                  type="text"
                />
                <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
              </div>
              <i className="fas fa-bell text-gray-400 text-xl"></i>
              <div className="flex items-center">
                <img
                  src="https://storage.googleapis.com/a1aa/image/8fZsSfjzsZtS1kNKfSff1EY6Tof2FNZJfSQh6ehgCfqJ0k8TnA.jpg"
                  alt="User Avatar"
                  className="rounded-full mr-2"
                  width="40"
                  height="40"
                />
                <div>
                  <p className="text-gray-800 font-semibold">Jeremy Zuck</p>
                  <p className="text-gray-400 text-sm">Traveler Enthusiast</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-lg content-card">
              <img
                src="https://storage.googleapis.com/a1aa/image/boQH23tkUYbYIVLcv1whqXdWKFT8RKd5nze8aifWRwLfk8TnA.jpg"
                alt="Mount Forel"
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Mount Forel
              </h2>
              <p className="text-gray-400">Greenland</p>
              <p className="text-yellow-500">
                <i className="fas fa-star"></i> 4.8
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg content-card">
              <img
                src="https://storage.googleapis.com/a1aa/image/ofiekBKh7CgAgkNS049t4vCb6EBmjXRp3mdS2oeKcnHGl8TnA.jpg"
                alt="Eco Camping"
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Eco Camping
              </h2>
              <p className="text-gray-400">Patagonia</p>
              <p className="text-yellow-500">
                <i className="fas fa-star"></i> 4.5
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg content-card">
              <img
                src="https://storage.googleapis.com/a1aa/image/x8A1nTHP7Cq0Hph9A9kIBfN29Pm7E5HWjWMypPNDFQRLJfpTA.jpg"
                alt="Mount Everest"
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                Mount Everest
              </h2>
              <p className="text-gray-400">Nepal</p>
              <p className="text-yellow-500">
                <i className="fas fa-star"></i> 4.7
              </p>
            </div>
          </div>

          {/* Best Destinations Section */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Best Destination <span className="text-yellow-500">🌈</span>
            </h2>
            <button className="bg-gray-100 p-2 rounded-full">
              <i className="fas fa-filter text-gray-400"></i>
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg mb-10">
            <p className="text-gray-400 mb-4">100 Destinations found</p>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="https://storage.googleapis.com/a1aa/image/nDSacDBXqjLZO9i9Xo7TTWpIC57wnnxrcvfo1nkIbMMOJfpTA.jpg"
                    alt="Redwood Forest"
                    className="rounded-lg mr-4"
                    width="50"
                    height="50"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Redwood Forest
                    </h3>
                    <p className="text-gray-400">California</p>
                  </div>
                </div>
                <p className="text-gray-800 font-semibold">$150/day</p>
                <p className="text-yellow-500">
                  <i className="fas fa-star"></i> 4.9
                </p>
              </div>

              {/* More destination cards... */}
            </div>
          </div>
        </div>

        {/* Right Widgets Section (Calendar & My Schedule) */}
        <div
          id="rightWidgets"
          className={`right-widgets ${
            isRightWidgetsHidden ? "hidden" : ""
          } w-1/5 p-6`}
        >
          {/* Calendar Widget */}
          <div className="bg-white p-6 rounded-xl shadow-lg mb-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              June 2021
            </h2>
            <div className="grid grid-cols-7 gap-2 text-center text-gray-600">
              <div>Mo</div>
              <div>Tu</div>
              <div>We</div>
              <div>Th</div>
              <div>Fr</div>
              <div>Sa</div>
              <div>Su</div>
              <div className="text-gray-400">1</div>
              <div className="text-gray-400">2</div>
              <div className="text-gray-400">3</div>
              <div className="text-gray-400">4</div>
              <div className="text-gray-400">5</div>
              <div className="text-gray-400">6</div>
              <div className="text-gray-400">7</div>
              <div className="text-gray-400">8</div>
              <div className="text-gray-400">9</div>
              <div className="text-gray-400">10</div>
              <div className="text-gray-400">11</div>
              <div className="text-gray-400">12</div>
              <div className="text-gray-400">13</div>
              <div className="text-gray-400">14</div>
              <div className="text-gray-400">15</div>
              <div className="bg-green-200 text-green-600 rounded-full">16</div>
              <div className="bg-green-200 text-green-600 rounded-full">17</div>
              <div className="text-gray-400">18</div>
              <div className="text-gray-400">19</div>
              <div className="bg-green-200 text-green-600 rounded-full">20</div>
              <div className="text-gray-400">21</div>
              <div className="text-gray-400">22</div>
              <div className="text-gray-400">23</div>
              <div className="text-gray-400">24</div>
              <div className="text-gray-400">25</div>
              <div className="text-gray-400">26</div>
              <div className="text-gray-400">27</div>
              <div className="text-gray-400">28</div>
              <div className="text-gray-400">29</div>
              <div className="text-gray-400">30</div>
            </div>
          </div>

          {/* Schedule Widget */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              My Schedule
            </h2>
            <div className="space-y-4">
              <div className="schedule-item">
                <img
                  src="https://storage.googleapis.com/a1aa/image/XxL4zVfrqkQNQKs0oeUXkyX4SHOR4YCxxbdxpH9cc9mdSeTnA.jpg"
                  alt="Crooked Forest"
                />
                <div className="schedule-item-info">
                  <h3>Crooked Forest</h3>
                  <p>16 June - 20 June</p>
                  <div className="schedule-item-participants">
                    <i className="fas fa-users"></i> +2
                  </div>
                </div>
              </div>
              <div className="schedule-item">
                <img
                  src="https://storage.googleapis.com/a1aa/image/T5ewe2S5eqemNTIW3d5h5UcOFVHzsvedcQqYfw5RUAJupkf0JA.jpg"
                  alt="Gioc Waterfall"
                />
                <div className="schedule-item-info">
                  <h3>Gioc Waterfall</h3>
                  <p>22 June - 26 June</p>
                  <div className="schedule-item-participants">
                    <i className="fas fa-users"></i> +4
                  </div>
                </div>
              </div>
              <div className="schedule-item">
                <img
                  src="https://storage.googleapis.com/a1aa/image/3eqE3riWWry8BCmVzt0crrn7ym8rpmBDVJEWAluwitVQJfpTA.jpg"
                  alt="Tartaruga Camp"
                />
                <div className="schedule-item-info">
                  <h3>Tartaruga Camp</h3>
                  <p>1 July - 7 July</p>
                  <div className="schedule-item-participants">
                    <i className="fas fa-users"></i> +6
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
