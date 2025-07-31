import { useEffect } from "react";
import { useTeacherStore } from "../store/teacherStore";
import List from "../Components/List";

const homePage = () => {
  const { teachers, fetchTeachers } = useTeacherStore();

  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

  return (
    <div className="home-container">
      <h1>Teachers</h1>
      <div className="list-container">
        {teachers &&
          teachers.map((teacher, index) => {
            return (
              <List
                key={index}
                firstname={teacher.kgid}
                lastname={teacher.name}
                email={teacher.schoolName}
              />
            );
          })}
      </div>
    </div>
  );
};

export default homePage;
