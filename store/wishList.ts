import { create } from "zustand";
import { persist } from "zustand/middleware";

export type WishItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}


type WishState = {
    wish: WishItem[];
    addToWish: (item: WishItem) => void;
    removeFromWish: (id: string) => void;
}



export const useWishStore = create<WishState>()(
    persist(
        (set, get) => ({
            wish: [],

            addToWish: (item) => {
                const existing = get().wish.find((i) => i.id === item.id);

                if (existing) {
                    set({
                        wish: get().wish.map((i) =>
                            i.id === item.id
                                ? { ...i, quantity: i.quantity + item.quantity }
                                : i
                        ),
                    });
                } else {
                    set({ wish: [...get().wish, item] });
                }
            },

            removeFromWish: (id) => {
                set({ wish: get().wish.filter((i) => i.id !== id) });
            }
        }),
        {
            name: "quza-wishes",
        }
    )
)

