"use client";

import {JSX} from "react";
import Image from "next/image";
import bg from "../../public/snake.jpg";

export function HomePage(): JSX.Element {
    return (
        <section id="home" className="d-flex flex-column align-items-center">
            <Image
                src={bg}
                alt="Background"
                fill
                className="absolute -z-10 blur brightness-75"
                priority
            />

            <div className={"pt-40"}>
                <h1 className="text-white mb-4">
                    Ứng dụng nhận diện và phân loại rắn
                </h1>

                <p className="text-white fw-semibold leading-relaxed max-w-3xl">
                    Hệ thống AI hỗ trợ phát hiện, theo dõi chuyển động và xác định loài rắn
                    trong hình ảnh hoặc video với độ chính xác cao. Ứng dụng giúp các nhà nghiên cứu
                    và nhân viên cứu hộ nhận diện nhanh chóng, an toàn, đồng thời góp phần vào
                    công tác giám sát và bảo tồn đa dạng sinh học.
                </p>

                <p className="text-white italic mt-2">
                    Dự án phát triển bởi nhóm 6 – kết hợp công nghệ thị giác máy tính (Computer Vision) và học sâu (Deep
                    Learning).
                </p>
            </div>
        </section>
    );
}
