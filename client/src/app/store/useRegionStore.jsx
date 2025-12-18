import { create } from "zustand";
import {
  fetchRegions,
  filterBarangay,
  filterMunicipality,
  filterProvince,
} from "../services/regionService";

const useRegionStore = create((set) => ({
  regions: [],
  provinces: [],
  municipalities: [],
  barangays: [],
  loading: false,
  error: null,

  getRegion: async () => {
    set({ loading: true, error: null });

    try {
      const data = await fetchRegions();
      set({ regions: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  getProvince: async (code) => {
    set({ loading: true, error: null });
    try {
      const data = await filterProvince(code);
      set({ provinces: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  getMunicipality: async (code) => {
    set({ loading: true, error: null });
    try {
      const data = await filterMunicipality(code);
      set({ municipalities: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

  getBarangay: async (code) => {
    set({ loading: true, error: null });
    try {
      const data = await filterBarangay(code);
      set({ barangays: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useRegionStore;
