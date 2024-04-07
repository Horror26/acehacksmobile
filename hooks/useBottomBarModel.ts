import { create } from "zustand";

interface BottomBarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useBottomBarModel = create<BottomBarStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useBottomBarModel;
