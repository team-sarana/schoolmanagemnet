import { create } from "zustand";

interface BreadcrumbState {
    breadcrumb: {
        title: string;
        url: string;
    };
    setBreadcrumb: (item: any) => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>()((set) => ({
    breadcrumb: {
        title: "Loading...",
        url: "/",
    },
    setBreadcrumb: (item) => set((state) => ({ breadcrumb: item })),
}));