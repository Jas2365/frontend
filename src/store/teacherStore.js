import { create } from "zustand";
import axios from "axios";

export const useTeacherStore = create((set) => ({
  teachers: [],
  loading: false,
  error: null,

  fetchTeachers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get("/api/teachers");
      set({ teachers: res.data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addTeacher: async (newTeacher) => {
    try {
      const res = await axios.post(
        "http://localhost:2365/api/teachers",
        newTeacher
      );
      set((state) => ({ teachers: [...state.teachers, res.data] }));
    } catch (err) {
      set({ error: err.message });
    }
  },
}));
