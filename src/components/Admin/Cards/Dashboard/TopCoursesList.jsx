
const courses = [
  { name: "Full Stack Web Development", enrollments: 1200 },
  { name: "UI/UX Design Bootcamp", enrollments: 950 },
  { name: "Digital Marketing Mastery", enrollments: 820 },
];

const TopCoursesList = () => {
  return (
    <ul className="space-y-3">
      {courses.map((course, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
        >
          <span className="font-medium">{course.name}</span>
          <span className="text-sm text-gray-600">{course.enrollments} Enrollments</span>
        </li>
      ))}
    </ul>
  );
};

export default TopCoursesList;
