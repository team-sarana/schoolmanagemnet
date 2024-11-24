"use client"
import React from 'react'
import Image from 'next/image';

export default function AboutTeam() {
    const teamMembers = [
        {
            id: 1,
            name: 'John Doe',
            role: 'Trainer',
            imageUrl: '/assets/img/team-1.jpg',
            facebookUrl: 'https://facebook.com/johndoe',
            twitterUrl: 'https://twitter.com/johndoe',
            instagramUrl: 'https://instagram.com/johndoe',
        },
        {
            id: 2,
            name: 'Jane Smith',
            role: 'Trainer',
            imageUrl: '/assets/img/team-2.jpg',
            facebookUrl: 'https://facebook.com/janesmith',
            twitterUrl: 'https://twitter.com/janesmith',
            instagramUrl: 'https://instagram.com/janesmith',
        },
        {
            id: 3,
            name: 'Sam Brown',
            role: 'Trainer',
            imageUrl: '/assets/img/team-3.jpg',
            facebookUrl: 'https://facebook.com/sambrown',
            twitterUrl: 'https://twitter.com/sambrown',
            instagramUrl: 'https://instagram.com/sambrown',
        },
        {
            id: 4,
            name: 'Lisa White',
            role: 'Trainer',
            imageUrl: '/assets/img/team-4.jpg',
            facebookUrl: 'https://facebook.com/lisawhite',
            twitterUrl: 'https://twitter.com/lisawhite',
            instagramUrl: 'https://instagram.com/lisawhite',
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
                    <h6 className="text-primary text-uppercase mb-2">Meet The Team</h6>
                    <h1 className="display-6 mb-4">We Have Great Experience Of Driving</h1>
                </div>
                <div className="row g-0 team-items">
                    {teamMembers.map((member: any) => (
                        <div
                            key={member.id}
                            className="col-lg-3 col-md-6 wow fadeInUp"
                            data-wow-delay={`${0.1 * member.id}s`}
                        >
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <Image
                                        className="img-fluid"
                                        src={member.imageUrl}
                                        width={500}
                                        height={500}
                                        alt={member.name} />
                                    <div className="team-social text-center">
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href={member.facebookUrl}
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href={member.twitterUrl}
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-square btn-outline-primary border-2 m-1"
                                            href={member.instagramUrl}
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4">
                                    <h5 className="mt-2">{member.name}</h5>
                                    <span>{member.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
