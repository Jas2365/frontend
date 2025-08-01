import { create } from "zustand";
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
});

export const useTeacherStore = create((set) => ({
  teachers: [{}],

  fetchTeachers: async () => {
    const res = await api.get("/api/teachers");
    const data = res.data;
    set({ teachers: data.data });

    // try {
    //   const res = await fetch(
    //     `${import.meta.env.VITE_BACKEND_URL}/api/teachers`
    //   );
    //   const data = await res.json();
    //   if (data.success) {
    //     set({ teachers: data.data, loading: false });
    //   } else {
    //     console.error("Error: ", data.message);
    //   }
    // } catch (err) {
    //   set({ error: err.message, loading: false });
    // }
  },

  addTeacher: async (newTeacher) => {
    const res = await api.post(
      "/api/teachers",
      newTeacher
      // , {
      // headers: {
      //   "Content-Type": "multipart/formdata",
      // },
      // }
    );
    const data = await res.data;
    console.log(" adding data  ", data);
    alert("teacher created");
    // console.log("res:", res);
    set((state) => ({ teachers: [...state.teachers, res.data.data] }));
  },
}));
