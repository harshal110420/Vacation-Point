export default function AboutUs() {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're dedicated to providing the best services and experiences.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <img
              src="https://via.placeholder.com/400"
              alt="Team"
              className="h-auto w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900">Meet Our Team</h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team member cards */}
            {/* You can populate team member information here */}
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="h-32 w-32 rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold">John Doe</h4>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="h-32 w-32 rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold">John Doe</h4>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="h-32 w-32 rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold">John Doe</h4>
              <p className="text-gray-600">CEO</p>
            </div>
            {/* ... more team member cards */}
          </div>
        </div>
      </div>
    </div>
  );
}
