import { create } from "zustand";
interface BearStoreType {
    bears:number,
    updateBears: (newBears: number) => void,
    removeAllBears: () => void,
    increaseBears: () => void
}

const useBearStore = create<BearStoreType>((set) => {
    console.log(set);
    return {
        bears: 0,
        updateBears: (newBears) => set({bears: newBears}),
        removeAllBears:() => set({bears:0}),
        increaseBears:() => set((state) => ({ bears: state.bears + 1 })),
    };
});
export default useBearStore;