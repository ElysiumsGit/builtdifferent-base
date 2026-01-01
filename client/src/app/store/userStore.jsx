import { create } from "zustand";
import { getAllUser } from "../services/userService";

const userStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });

    try {
      const response = await getAllUser();
      set({ users: response.data.data });
      set({ loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default userStore;
