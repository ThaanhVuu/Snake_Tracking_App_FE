"use client";

import {ChangeEvent, JSX, useEffect, useState} from "react";
import axios from "axios";

export function Tracking(): JSX.Element {
    const [file, setFile] = useState<File | null>(null);
    const [resultUrl, setResultUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    function callApi(file: File) {
        const formData = new FormData();
        formData.append("file", file);

        const endpoint = file.type.startsWith("image/")
            ? "http://localhost:8000/track/image"
            : file.type.startsWith("video/")
                ? "http://localhost:8000/track/video"
                : "";

        if (!endpoint) throw new Error("File không hợp lệ");

        return axios.post(endpoint, formData, {
            headers: {"Content-Type": "multipart/form-data"},
            responseType: "blob",
        });
    }

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) setFile(e.target.files[0]);
    }

    async function handleUpload() {
        if (!file) {
            alert("Vui lòng chọn file trước!");
            return;
        }

        try {
            setLoading(true);
            const res = await callApi(file);

            const contentType =
                res.headers["content-type"]?.includes("video") ? "video/mp4" :
                    res.headers["content-type"]?.includes("image") ? "image/png" :
                        "video/mp4"; // fallback

            const blob = new Blob([res.data], {type: contentType});
            if (resultUrl) URL.revokeObjectURL(resultUrl);

            const newUrl = URL.createObjectURL(blob);
            console.log("Video blob URL:", newUrl, "size:", blob.size);
            setResultUrl(`${newUrl}#t=0.1`);
        } catch (err) {
            console.error(err);
            alert("Lỗi khi gửi file đến API!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section
            id="tracking"
            className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light py-5"
            style={{scrollMarginTop: "8vh"}}
        >
            <div className="container-lg py-4">
                {/* Header */}
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-primary mb-3 display-6">
                        Nhận Diện & Theo Dõi Rắn 🐍
                    </h2>
                    <p className="text-secondary fs-5">
                        Ứng dụng <b>YOLOv11m</b> giúp phát hiện và phân loại loài rắn trong ảnh hoặc video
                        với độ chính xác cao và tốc độ xử lý vượt trội.
                    </p>
                </div>

                <div className="row g-4">
                    {/* Upload Column */}
                    <div className="col-12 col-lg-5">
                        <div className="card shadow border-0 h-100 rounded-4">
                            <div className="card-body d-flex flex-column p-4">
                                <div>
                                    <label className="form-label fw-semibold text-primary">
                                        <i className="bi bi-upload me-2"></i>Chọn tệp đầu vào
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control mb-3"
                                        accept="image/*,video/*"
                                        onChange={handleFileChange}
                                    />
                                    {file && (
                                        <p className="text-muted small mb-0">
                                            <i className="bi bi-file-earmark-check me-1 text-success"></i>
                                            Đã chọn: <b>{file.name}</b>
                                        </p>
                                    )}
                                </div>

                                <button
                                    className="btn btn-primary mt-3 rounded shadow-sm"
                                    onClick={handleUpload}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                            Đang xử lý...
                                        </>
                                    ) : (
                                        <>
                                            <i className="bi bi-cpu me-2"></i>Tracking
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Result Column */}
                    <div className="col-12 col-lg-7">
                        <div className="card shadow border-0 h-100 rounded-4">
                            <div
                                className="card-body text-center d-flex flex-column justify-content-center align-items-center p-4">
                                <h5 className="fw-bold text-primary mb-3">🎯 Kết quả xử lý</h5>

                                {!resultUrl ? (
                                    <div className="text-muted py-5">
                                        <i className="bi bi-image-alt fs-1 d-block mb-3 text-secondary"></i>
                                        <p className="fs-6">Chưa có kết quả — vui lòng chọn tệp và nhấn <b>Tracking</b>.
                                        </p>
                                    </div>
                                ) : file?.type.startsWith("image/") ? (
                                    <img
                                        src={resultUrl}
                                        alt="result"
                                        className="img-fluid rounded-4 border-2 border-primary shadow-sm"
                                    />
                                ) : (
                                    <video
                                        key={resultUrl} // ép React re-render
                                        src={resultUrl}
                                        controls
                                        autoPlay
                                        className="w-100 rounded-4 border-2 border-primary shadow-sm"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
