import { useEffect } from "react";
import { useTeacherStore } from "../store/teacherStore";

const Home = () => {
  const { teachers, fetchTeachers, loading, error } = useTeacherStore();

  useEffect(() => {
    fetchTeachers();
    console.log(teachers);
  }, [fetchTeachers]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Teachers</h1>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>
            {teacher.firstname} {teacher.lastname} {teacher.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
