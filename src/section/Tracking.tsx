"use client";

import { ChangeEvent, JSX, useState } from "react";
import axios from "axios";

export function Tracking(): JSX.Element {
    const [file, setFile] = useState<File | null>(null);
    const [resultUrl, setResultUrl] = useState<string | null>(null);

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
            headers: { "Content-Type": "multipart/form-data" },
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
            const res = await callApi(file);
            const blob = new Blob([res.data], { type: res.headers["content-type"] });
            if (resultUrl) URL.revokeObjectURL(resultUrl);
            const newUrl = URL.createObjectURL(blob);
            setResultUrl(newUrl);
        } catch (err) {
            console.error(err);
            alert("Lỗi khi gửi file đến API!");
        }
    }

    return (
        <section
            id="tracking"
            className="min-vh-100 d-flex flex-column justify-content-center align-items-center bg-green-50 py-5"
            style={{ scrollMarginTop: "8vh", paddingTop: "8vh" }}
        >
            <div className="bg-light rounded-4 shadow p-4">
                {/* Header */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-success">
                        Tải ảnh hoặc video để nhận dạng và phân loại loài rắn 🐍
                    </h2>
                    <p className="text-muted mb-0">
                        Hỗ trợ định dạng ảnh (JPG/PNG/WebP) và video (MP4/WebM/MOV)
                    </p>
                </div>

                {/* Nội dung chính */}
                <div className="row g-4 align-items-stretch">
                    {/* Cột upload */}
                    <div className="col-12 col-lg-5">
                        <div className="h-100 p-4 border rounded bg-white d-flex flex-column">
                            <label className="form-label fw-semibold">Chọn tệp</label>
                            <input
                                type="file"
                                className="form-control mb-3"
                                accept="image/*,video/*"
                                onChange={handleFileChange}
                            />
                            <button
                                className="btn btn-success rounded w-100 mt-auto"
                                onClick={handleUpload}
                            >
                                Tracking
                            </button>
                        </div>
                    </div>

                    {/* Cột kết quả */}
                    <div className="col-12 col-lg-7">
                        <div className="h-100 p-4 border rounded bg-white text-center d-flex flex-column justify-content-center">
                            <p className="fs-5 fw-semibold mb-3">Kết quả</p>
                            {!resultUrl ? (
                                <p className="text-muted">
                                    Chưa có kết quả, hãy chọn tệp và bấm <i>Tracking</i>
                                </p>
                            ) : file?.type.startsWith("image/") ? (
                                <img
                                    src={resultUrl}
                                    alt="result"
                                    className="img-fluid rounded border shadow-sm"
                                />
                            ) : (
                                <video
                                    src={resultUrl}
                                    controls
                                    className="w-100 rounded border shadow-sm"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}