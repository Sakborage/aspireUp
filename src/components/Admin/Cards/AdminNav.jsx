function AdminNav() {
    return ( 
    <div className="relative w-full bg-transparent py-4 px-0 flex items-center justify-center">
      <nav className="flex  space-x-14 text-md font-medium">
        <a href="/" className="text-gray-700 font-semibold hover:text-orange">Home</a>
        <a href="/course" className="text-gray-700 hover:text-orange transition duration-300">Courses</a>
        <a href="/job" className="text-gray-700 hover:text-orange transition duration-300">Jobs</a>
        <a href="/application" className="text-gray-700 hover:text-orange transition duration-300">Applications</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Users</a>
        <a href="#" className="text-gray-700 hover:text-orange transition duration-300">Organization</a>
      </nav> 
      </div>
      );
}

export default AdminNav;
