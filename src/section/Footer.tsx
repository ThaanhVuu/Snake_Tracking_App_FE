import { JSX } from "react";
import { Mail, Github, Phone } from "lucide-react";

export function AboutUs(): JSX.Element {
    return (
        <section
            id="aboutus"
            className="d-flex flex-column align-items-center justify-content-center bg-primary text-center text-white py-5"
            style={{ scrollMarginTop: "8vh" }}
        >
            <div className="container">
                <h2 className="fw-bold text-light display-6 mb-3">
                    🌿 Giới Thiệu Nhóm
                </h2>

                <p className="text-white fs-5 mx-auto" style={{ maxWidth: "800px" }}>
                    Đây là sản phẩm đồ án môn <b>Thực Tập Chuyên Môn I</b>, được phát triển bởi
                    <b> nhóm gồm 4 thành viên: Hà Thanh Vũ, Nguyễn Hữu Triệu, Vũ Anh Tuấn, Nguyễn Trường Nguyên</b>.
                    <br />
                    Ứng dụng hướng đến việc hỗ trợ <b>nhận diện và theo dõi loài rắn</b> bằng trí tuệ nhân tạo,
                    góp phần vào công tác <b>nghiên cứu và bảo tồn sinh học</b>.
                </p>

                <p className="mt-4 fs-5 fw-semibold text-warning">
                    <b>22CN1</b> – Trường Đại học Kiến trúc Hà Nội
                </p>

                <div className="mt-5">
                    <h4 className="fw-semibold mb-3 text-light">Liên hệ nhóm phát triển</h4>
                    <ul className="list-unstyled fs-5">
                        <li className="mb-2 d-flex justify-content-center align-items-center gap-2">
                            <Mail className="text-white" size={20} />
                            <a href="mailto:thanhvu7623@gmail.com" className="text-decoration-none text-white">
                                thanhvu7623@gmail.com
                            </a>
                        </li>
                        <li className="mb-2 d-flex justify-content-center align-items-center gap-2">
                            <Github className="text-white" size={20} />
                            <a
                                href="https://github.com/ThaanhVuu"
                                target="_blank"
                                className="text-decoration-none text-white"
                            >
                                github.com/ThaanhVuu
                            </a>
                        </li>
                        <li className="d-flex justify-content-center align-items-center gap-2">
                            <Phone className="text-success" size={20} />
                            <span>0879 592 258</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
