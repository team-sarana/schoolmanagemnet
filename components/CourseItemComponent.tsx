"use client"
import React from 'react'

export default function CourseItemComponent() {
    const courses = [
        {
            id: 1,
            title: 'Automatic Car Lessons',
            price: '$99',
            description: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
            level: 'Beginner',
            duration: '3 Week',
            imageUrl: '/assets/img/courses-1.jpg',
            link: '',  // Link for 'Read More' button
        },
        {
            id: 2,
            title: 'Highway Driving Lesson',
            price: '$99',
            description: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
            level: 'Beginner',
            duration: '3 Week',
            imageUrl: '/assets/img/courses-2.jpg',
            link: '',  // Link for 'Read More' button
        },
        {
            id: 3,
            title: 'International Driving',
            price: '$99',
            description: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
            level: 'Beginner',
            duration: '3 Week',
            imageUrl: '/assets/img/courses-3.jpg',
            link: '',  // Link for 'Read More' button
        },
    ];

    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div
                    className="text-center mx-auto mb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: 500 }}
                >
                    <h6 className="text-primary text-uppercase mb-2">Trending Courses</h6>
                    <h1 className="display-6 mb-4">
                        Our Courses Upskill You With Driving Training
                    </h1>
                </div>
                <div className="row g-4 justify-content-center">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay={`${0.1 * course.id}s`}
                        >
                            <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                                <div className="text-center p-4 pt-0">
                                    <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                                        {course.price}
                                    </div>
                                    <h5 className="mb-3">{course.title}</h5>
                                    <p>{course.description}</p>
                                    <ol className="breadcrumb justify-content-center mb-0">
                                        <li className="breadcrumb-item small">
                                            <i className="fa fa-signal text-primary me-2" />
                                            {course.level}
                                        </li>
                                        <li className="breadcrumb-item small">
                                            <i className="fa fa-calendar-alt text-primary me-2" />
                                            {course.duration}
                                        </li>
                                    </ol>
                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid" src={course.imageUrl} alt={course.title} />
                                    <div className="courses-overlay">
                                        <a className="btn btn-outline-primary border-2" href={course.link}>
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
