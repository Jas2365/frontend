import { useState } from "react";
import { useTeacherStore } from "../store/teacherStore";
import CameraUpload from "../Components/CameraUpload";

const createPage = () => {
  const { addTeacher } = useTeacherStore();

  const [teacher, setTeacher] = useState({
    kgid: "",
    name: "",
    schoolName: "",
  });
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    setTeacher((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profileImage || !teacher.kgid || !teacher.name || !teacher.schoolName)
      return;
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(teacher));
    formdata.append("profileImage", profileImage);

    await addTeacher(formdata);
    setTeacher({ kgid: "", name: "", schoolName: "" });
    setProfileImage(null);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="kgid">Kgid</label>
        <input
          type="number"
          id="kgid"
          name="kgid"
          placeholder="enter kgid"
          onChange={(e) => handleChange(e)}
          value={teacher.kgid}
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="enter name"
          onChange={(e) => handleChange(e)}
          value={teacher.name}
        />
        <label htmlFor="schoolName">School Name</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          placeholder="enter schoolName"
          onChange={(e) => handleChange(e)}
          value={teacher.schoolName}
        />
        <CameraUpload onImageSelect={setProfileImage} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default createPage;
