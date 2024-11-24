"use client"
import React from 'react'

export default function FeatureItemComponent() {
    const features = [
        {
            id: 1,
            title: 'Fully Licensed',
            description: 'Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos',
            iconClass: 'fa-check',
            delay: '0.1s',
        },
        {
            id: 2,
            title: 'Online Tracking',
            description: 'Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos',
            iconClass: 'fa-check',
            delay: '0.2s',
        },
        {
            id: 3,
            title: 'Affordable Fee',
            description: 'Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos',
            iconClass: 'fa-check',
            delay: '0.3s',
        },
        {
            id: 4,
            title: 'Best Trainers',
            description: 'Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos',
            iconClass: 'fa-check',
            delay: '0.4s',
        },
    ];

    return (
        <div className="row gy-5 gx-4">
            {features.map((feature) => (
                <div
                    key={feature.id}
                    className="col-sm-6 wow fadeIn"
                    data-wow-delay={feature.delay}
                >
                    <div className="d-flex align-items-center mb-3">
                        <div className="flex-shrink-0 btn-square bg-primary me-3">
                            <i className={`fa ${feature.iconClass} text-white`} />
                        </div>
                        <h5 className="mb-0">{feature.title}</h5>
                    </div>
                    <span>{feature.description}</span>
                </div>
            ))}
        </div>
    );
}
