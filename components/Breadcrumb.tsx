"use client"
import { useBreadcrumbStore } from '@/app/lib/BreadCrumb';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'
import Link from 'next/link';

export default function Breadcrumb() {
    const breadcrumb = useBreadcrumbStore((state) => state.breadcrumb);
    const setBreadcrumb = useBreadcrumbStore((state) => state.setBreadcrumb);
    const pathname = usePathname();

    useEffect(() => {

        if (pathname === "/") {
            setBreadcrumb({ title: "Home", url: "/" });
        }
        else if (pathname.toLocaleLowerCase().includes("/about")) {
            setBreadcrumb({ title: "About", url: "/about" })
        }
        else if (pathname.toLocaleLowerCase().includes("/coursesr")) {
            setBreadcrumb({ title: "Courses", url: "/courses" })
        }
        else if (pathname.toLocaleLowerCase().includes("/feature")) {
            setBreadcrumb({ title: "Feature", url: "/feature" })
        }
        else if (pathname.toLocaleLowerCase().includes("/appointment")) {
            setBreadcrumb({ title: "/appointment", url: "/appointment" })
        }
        else if (pathname.toLocaleLowerCase().includes("/testimonial")) {
            setBreadcrumb({ title: "Testimonial", url: "/testimonial" })
        }
        else if (pathname.toLocaleLowerCase().includes("/contact")) {
            setBreadcrumb({ title: "Contact", url: "/contact" })
        }
        else {
            setBreadcrumb({ title: "Home", url: "/" });
        }
    }, [pathname]);
    return (
        <>
            <div
                className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container text-center">
                    <h1 className="display-4 text-white animated slideInDown mb-4">
                        {breadcrumb.title}
                    </h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <Link className="text-white" href="/">
                                    Home
                                </Link>
                            </li>
                            {/* <li className="breadcrumb-item">
                                <Link className="text-white" href={breadcrumb.url}>
                                    {breadcrumb.title}
                                </Link>
                            </li> */}
                            <li
                                className="breadcrumb-item text-primary active"
                                aria-current="page"
                            >
                                {breadcrumb.title}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}
