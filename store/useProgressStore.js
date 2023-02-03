import { create } from "zustand"

export const useProgressStore = create((set) => ({
    isAnimating: false,
    setIsAnimating: (isAnimating) => set(() => ({isAnimating }))
    // progress: 0,
    // setProgress: (value) => set((state) => ({ ...state, progress: value })),
    // resetProgress: () => set((state) => ({ ...state, progress: 0 })),
    // getProgress: () => set((state) => ({ ...state, progress })),
    // incrementProgress: () => set((state) => ({ ...state, progress: state.progress })),
    // decrementProgress: () => set((state) => ({ ...state, progress: state.progress })),
    // getProgressInPercent: () => set((state) => ({ ...state, progress: Math })),
}))