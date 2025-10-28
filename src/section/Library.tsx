"use client";

import {JSX} from "react";
import {snakes} from "@/data/Snake";

export function Library(): JSX.Element {
    return (
        <section
            id="library"
            className="min-vh-100 d-flex flex-column align-items-center justify-content-start bg-light py-5"
            style={{ scrollMarginTop: "8vh" }}
        >
            <div className="container py-4">
                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-primary display-6 mb-3">
                        🐍 Thư Viện Loài Rắn
                    </h2>
                    <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: "800px" }}>
                        Tổng hợp 30 loài rắn được hệ thống <b>YOLOv11m</b> huấn luyện và nhận diện.
                        Mỗi loài mang đặc trưng sinh thái, hành vi và hình thái học riêng biệt — phục vụ
                        cho nghiên cứu, giám sát và bảo tồn đa dạng sinh học.
                    </p>
                </div>

                {/* List View */}
                <div className="mx-auto" style={{ maxWidth: "950px" }}>
                    {snakes.map((snake, idx) => (
                        <div
                            key={idx}
                            className="py-3 px-4 mb-2 bg-white bg-opacity-75 rounded-3 border-start border-4 border-primary-subtle hover-bg transition-all"
                            style={{
                                transition: "all 0.25s ease",
                                cursor: "default",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#e9f4ff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.75)";
                            }}
                        >
                            <div className="d-flex align-items-start">
                                <div
                                    className="me-3 fs-3 text-primary"
                                    style={{ minWidth: "40px", textAlign: "center" }}
                                >
                                    🐍
                                </div>
                                <div>
                                    <h5 className="fw-bold text-primary mb-1">
                                        {idx + 1}. {snake.name}
                                    </h5>
                                    <p className="text-muted mb-0">{snake.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
