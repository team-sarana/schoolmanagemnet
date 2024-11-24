"use client"
import React from 'react'

export default function NavbarMenu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <a
                    href="/"
                    className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5"
                >
                    <h2 className="m-0">
                        <i className="fa fa-car text-primary me-2" />
                        Drivin
                    </h2>
                </a>
                <button
                    type="button"
                    className="navbar-toggler me-4"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a href="/" className="nav-item nav-link active">
                            Home
                        </a>
                        <a href="/about" className="nav-item nav-link">
                            About
                        </a>
                        <a href="/courses" className="nav-item nav-link">
                            Courses
                        </a>
                        <a href="/feature" className="nav-item nav-link">
                            Feature
                        </a>
                        <a href="/appointment" className="nav-item nav-link">
                            Appointment
                        </a>
                        <a href="/testimonial" className="nav-item nav-link">
                            Testimonial
                        </a>

                        <a href="/contact" className="nav-item nav-link">
                            Contact
                        </a>
                    </div>
                    <a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
                        Get Started
                        <i className="fa fa-arrow-right ms-3" />
                    </a>
                </div>
            </nav>
        </>
    )
}
