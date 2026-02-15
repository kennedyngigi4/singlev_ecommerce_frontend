import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}


type CartState = {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
}


export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (item) => {
                const existing = get().cart.find((i) => i.id === item.id);

                if (existing) {
                    set({
                        cart: get().cart.map((i) =>
                            i.id === item.id
                                ? { ...i, quantity: i.quantity + item.quantity }
                                : i
                        ),
                    });
                } else {
                    set({ cart: [...get().cart, item] });
                }
            },

            removeFromCart: (id) => {
                set({ cart: get().cart.filter((i) => i.id !== id) });
            },

            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    set({ cart: get().cart.filter((i) => i.id !== id) });
                } else {
                    set({
                        cart: get().cart.map((i) =>
                            i.id === id ? { ...i, quantity } : i
                        ),
                    });
                }
            },

            clearCart: () => set({ cart: []}),

            getTotalItems: () =>
                get().cart.reduce((total, item) => total + item.quantity, 0),
        }),
        {
            name: "quza-cart",
        }
    )
);

