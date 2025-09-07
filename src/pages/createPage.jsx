import { useState } from "react";
import { useTeacherStore } from "../store/teacherStore";
import CameraUpload from "../Components/CameraUpload";

const createPage = () => {
  const { addTeacher } = useTeacherStore();

  const [teacher, setTeacher] = useState({
    kgid: "",
    name: "",
    schoolName: "",
    taluka: "",
    cluster: "",
  });
  const [profileImage, setProfileImage] = useState(null);

  const handleChange = (e) => {
    setTeacher((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    alert("teacher created");
    e.preventDefault();
    if (
      !profileImage ||
      !teacher.kgid ||
      !teacher.name ||
      !teacher.schoolName ||
      !teacher.taluka ||
      !teacher.cluster
    )
      return;
    const formdata = new FormData();
    formdata.append("data", JSON.stringify(teacher));
    formdata.append("profileImage", profileImage);

    await addTeacher(formdata);
    setTeacher({ kgid: "", name: "", schoolName: "", taluka: "", cluster: "" });
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
        <label htmlFor="taluka">Taluka</label>
        <input
          type="text"
          id="taluka"
          name="taluka"
          placeholder="enter taluka"
          onChange={(e) => handleChange(e)}
          value={teacher.taluka}
        />
        <label htmlFor="cluster">Taluka</label>
        <input
          type="text"
          id="cluster"
          name="cluster"
          placeholder="enter cluster"
          onChange={(e) => handleChange(e)}
          value={teacher.cluster}
        />

        <CameraUpload onImageSelect={setProfileImage} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default createPage;
