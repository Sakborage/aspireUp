function UserProfile() {
    return (
        <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg text-center">
        <div class="flex justify-center mb-4">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="gray">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
            </div>
        </div>
        <h2 class="text-xl font-semibold">Harsh Badhe</h2>
        <div class="border-b my-4"></div>
        <div class="grid grid-cols-2 gap-x-8 gap-y-4 text-left">
            <div class="break-words">
                <p class="font-semibold">Email:</p>
                <p>harshbadhe83@gmail.com</p>
            </div>
            <div class="break-words">
                <p class="font-semibold">Phone number:</p>
                <p>9633584020</p>
            </div>
            <div class="break-words">
                <p class="font-semibold">Address:</p>
                <p>Vrindavan Heights, Saswad</p>
            </div>
            <div class="break-words">
                <p class="font-semibold">Job title:</p>
                <p>Full Stack Developer</p>
            </div>
            <div class="break-words">
                <p class="font-semibold">Experience:</p>
                <p>Wipro, Google</p>
            </div>
            <div class="break-words">
                <p class="font-semibold">Education:</p>
                <p>B.Tech in Computer Engineering</p>
            </div>
            <div class="break-words">
                <p class="font-semibold">City:</p>
                <p>Pune</p>
            </div>
            <div class="break-words">
                <p class="font-semibold">Country:</p>
                <p>India</p>
            </div>
        </div>
        <button class="mt-4 bg-accent text-white px-4 py-2 rounded-lg hover:bg-teal-700">Edit Profile</button>
    </div>
      );
}

export default UserProfile;