"use client"
import React from 'react'
import FeatureItemComponent from './FeatureItemComponent'

export default function FeatureComponent() {
    return (
        <>
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="text-primary text-uppercase mb-2">Why Choose Us!</h6>
                            <h1 className="display-6 mb-4">
                                Best Driving Training Agency In Your City
                            </h1>
                            <p className="mb-5">
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                                lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <FeatureItemComponent />
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div
                                className="position-relative overflow-hidden pe-5 pt-5 h-100"
                                style={{ minHeight: 400 }}
                            >
                                <img
                                    className="position-absolute w-100 h-100"
                                    src="/assets/img/about-1.jpg"
                                    alt=""
                                    style={{ objectFit: "cover" }}
                                />
                                <img
                                    className="position-absolute top-0 end-0 bg-white ps-3 pb-3"
                                    src="/assets/img/about-2.jpg"
                                    alt=""
                                    style={{ width: 200, height: 200 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features End */}
        </>


    )
}
