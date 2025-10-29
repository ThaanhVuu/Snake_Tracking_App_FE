"use client";

import {JSX, useEffect, useState} from "react";
import Image from "next/image";
import bg from "../../public/snake.jpg";
import axios from "axios";

export function HomePage(): JSX.Element {
    const [info, setInfo] = useState<string>("Cpu")

    useEffect(() => {
        axios.get<{cuda_name: string}>("http://localhost:8000/health")
            .then((res) => {
                console.log(res);
                setInfo(res.data.cuda_name);
            })
            .catch((err) => {
            console.error("Lỗi khi gọi API /health:", err);
        });
    }, []);

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

                <p className="text-white fw-semibold leading-relaxed max-w-3xl text-justify tracking-wide">
                    Hệ thống <span className="text-green-400 font-bold">AI nhận diện & theo dõi rắn </span>
                    được phát triển dựa trên mô hình <b className="text-amber-300">YOLOv11m</b> –
                    một kiến trúc học sâu tiên tiến trong lĩnh vực <i>thị giác máy tính (Computer Vision)</i>,
                    với khoảng <span className="text-blue-300">25,3 triệu tham số</span> cho phép cân bằng tối ưu
                    giữa <u>tốc độ xử lý</u> và <u>độ chính xác trong nhận diện</u>.
                    <br /><br />
                    Mô hình <b>YOLOv11m</b> ứng dụng cấu trúc <b>Backbone cải tiến </b> kết hợp cơ chế
                    <b> BiFPN</b> nhằm trích xuất và hợp nhất đặc trưng hình ảnh, giúp hệ thống phát hiện
                    hiệu quả các đối tượng nhỏ và phức tạp như <span className="text-green-300">loài rắn</span>.
                    Dữ liệu huấn luyện gồm <b>10.000 hình ảnh</b> đại diện cho <b>30 loài rắn</b> trong nhiều môi trường sinh thái khác nhau,
                    được gắn nhãn chuẩn hóa theo định dạng <b>YOLO</b>.
                    <br /><br />
                    Nhờ đó, hệ thống có khả năng <span className="text-yellow-300">phát hiện và theo dõi chuyển động </span>
                    của rắn trong hình ảnh hoặc video với độ chính xác cao,
                    góp phần hỗ trợ các <b>nhà nghiên cứu</b> và <b>lực lượng cứu hộ</b> trong công tác
                     giám sát, nhận dạng và bảo tồn đa dạng sinh học
                    một cách an toàn và hiệu quả.
                </p>


                <p className="text-white italic mt-2">
                    Dự án phát triển bởi nhóm 9 – Ứng dụng công nghệ thị giác máy tính (Computer Vision) và học sâu (Deep
                    Learning).<br/>
                    Hiện server đang sử dụng {info} để vận hành
                </p>
            </div>
        </section>
    );
}
