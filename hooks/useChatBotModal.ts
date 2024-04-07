import { create } from "zustand";

interface ChatBotModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  type: string;
  change: any;
}

const useChatBotModal = create<ChatBotModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  type: "grandmother",
  change: (str: string) => set({ type: str }),
}));

export default useChatBotModal;
