"use client";
import Breadcrumb from "@/components/Breadcrumb";

export default function SubPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <Breadcrumb />
            {children}
        </>
    );
}
