"use client";

import { create } from "zustand";

export type CartItem = {
  slug: string;
  name: string;
  image: string;
  weight: string;
  price?: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];

  addItem: (item: CartItem) => void;

  removeItem: (slug: string) => void;

  increaseQuantity: (slug: string) => void;

  decreaseQuantity: (slug: string) => void;

  clearCart: () => void;
};

const saveCart = (items: CartItem[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(items));
  }
};
export const useCart = create<CartStore>((set) => ({
  items:
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("cart") || "[]")
    : [],

  addItem: (item) =>
  set((state) => {
    const existing = state.items.find(
      (cartItem) => cartItem.slug === item.slug
    );

    let items: CartItem[];

    if (existing) {
      items = state.items.map((cartItem) =>
        cartItem.slug === item.slug
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      );
    } else {
      items = [...state.items, item];
    }

    saveCart(items);

    return { items };
  }),

  removeItem: (slug) =>
  set((state) => {
    const items = state.items.filter(
      (item) => item.slug !== slug
    );

    saveCart(items);

    return { items };
  }),

  increaseQuantity: (slug) =>
  set((state) => {
    const items = state.items.map((item) =>
      item.slug === slug
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    saveCart(items);

    return { items };
  }),

  decreaseQuantity: (slug) =>
  set((state) => {
    const items = state.items
      .map((item) =>
        item.slug === slug
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    saveCart(items);

    return { items };
  }),

 clearCart: () =>
  set(() => {
    saveCart([]);
    return {
      items: [],
    };
  }),
}));