import { useState } from "react";
import { useTeacherStore } from "../store/teacherStore";

const createPage = () => {
  const { addTeacher } = useTeacherStore();

  const [teacher, setTeacher] = useState({
    kgid: "",
    name: "",
    schoolName: "",
  });

  const handleChange = (e) => {
    setTeacher((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTeacher(teacher);
    setTeacher({ kgid: "", name: "", schoolName: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="kgid">First Name</label>
        <input
          type="text"
          id="kgid"
          name="kgid"
          placeholder="enter kgid"
          onChange={(e) => handleChange(e)}
          value={teacher.kgid}
        />
        <label htmlFor="name">Last Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="enter name"
          onChange={(e) => handleChange(e)}
          value={teacher.name}
        />
        <label htmlFor="schoolName">Email</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          placeholder="enter schoolName"
          onChange={(e) => handleChange(e)}
          value={teacher.schoolName}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default createPage;
