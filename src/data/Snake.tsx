export interface Snake {
    name: string;
    desc: string;
    image?: string; // có thể thêm ảnh minh họa sau
}

export const snakes: Snake[] = [
    { name: "Acanthophis antarcticus", desc: "Còn gọi là Rắn tử thần Úc, có nọc cực mạnh, thân dày và đầu tam giác. Thường ngụy trang trong lá khô." },
    { name: "Ahaetulla prasina", desc: "Rắn roi xanh châu Á, cơ thể mảnh, màu xanh lục tươi, chuyên săn côn trùng và thằn lằn trên cây." },
    { name: "Amphiesma Stolatum", desc: "Rắn sọc dưa, không độc, phổ biến ở Đông Nam Á, thường sinh sống gần ruộng nước và suối nhỏ." },
    { name: "Boa constrictor", desc: "Rắn khổng lồ Nam Mỹ, giết mồi bằng cách siết chặt thay vì dùng nọc độc." },
    { name: "Bungarus Fasciatus", desc: "Rắn cạp nia vàng, cực độc, thân có vằn đen – vàng xen kẽ, hoạt động ban đêm." },
    { name: "Bungarus caeruleus", desc: "Rắn cạp nia xanh, loài nọc độc mạnh ở Ấn Độ và Đông Nam Á, thường ẩn mình vào ban ngày." },
    { name: "Calloselasma Rhodostoma", desc: "Rắn lục Malayan, nọc độc mạnh, sống chủ yếu ở rừng ẩm và đồng bằng Đông Nam Á." },
    { name: "Chrysopelea Ornata", desc: "Rắn bay Ấn Độ, có khả năng lượn qua không trung bằng cách ép dẹt cơ thể." },
    { name: "Coelognathus Radiatus", desc: "Rắn ráo trâu, không độc, thân dài, linh hoạt, thường được nuôi để bắt chuột." },
    { name: "Daboia russelii", desc: "Rắn lục Russell, cực độc, chịu trách nhiệm cho nhiều ca tử vong ở châu Á." },
    { name: "Dendrelaphis Pictus", desc: "Rắn roi nâu, nhanh nhẹn, thường sống trên cây, ăn ếch và côn trùng." },
    { name: "Fowlea Flavipunctata", desc: "Rắn nước đốm vàng, hiền lành, săn cá nhỏ ở vùng nước ngọt." },
    { name: "Fowlea piscator", desc: "Rắn nước thông thường, không độc, có khả năng bơi giỏi và thích nghi cao." },
    { name: "Heterodon Platirhinos", desc: "Rắn mũi lợn, giả chết để tự vệ, không độc, sống ở Bắc Mỹ." },
    { name: "Indotyphlops Braminus", desc: "Rắn mù Bramin, nhỏ, mảnh, sống dưới đất, ăn mối và ấu trùng côn trùng." },
    { name: "Lampropeltis Californiae", desc: "Rắn vua California, không độc, có khả năng ăn các loài rắn khác kể cả rắn độc." },
    { name: "Lampropeltis Triangulum", desc: "Rắn sữa, màu đỏ–đen–vàng rực rỡ, thường bị nhầm với rắn san hô độc." },
    { name: "Malayopython Reticulatus", desc: "Trăn gấm, một trong những loài rắn dài nhất thế giới, không độc, siết mồi để giết." },
    { name: "Naja Naja", desc: "Rắn hổ mang Ấn Độ, có thể bạnh cổ khi bị đe dọa, nọc độc thần kinh mạnh." },
    { name: "Oligodon Fasciolatus", desc: "Rắn khiếm vằn, nhỏ, không độc, sống trong lá rụng rừng nhiệt đới." },
    { name: "Ophiophagus hannah", desc: "Rắn hổ mang chúa, loài rắn độc dài nhất thế giới, có hành vi bảo vệ tổ con hiếm thấy." },
    { name: "Pantherophis guttatus", desc: "Rắn ngô, hiền lành, phổ biến trong thú nuôi, có nhiều màu sắc biến thể đẹp mắt." },
    { name: "Psammodynastes pulverulentus", desc: "Rắn giả hổ mang, bán độc nhẹ, thường nâng đầu như rắn hổ để tự vệ." },
    { name: "Ptyas korros", desc: "Rắn ráo thường, không độc, di chuyển nhanh, thường gặp ở khu vực nông thôn." },
    { name: "Ptyas mucosa", desc: "Rắn ráo trâu lớn, không độc, thân dài, rất phổ biến ở Việt Nam và châu Á." },
    { name: "Python Regius", desc: "Trăn bóng châu Phi, hiền lành, thường cuộn tròn khi bị đe dọa, phổ biến trong nuôi cảnh." },
    { name: "Python bivittatus", desc: "Trăn Miến Điện, kích thước khổng lồ, sống ở rừng ngập nước, không độc." },
    { name: "Thamnophis sirtalis", desc: "Rắn sọc garter Bắc Mỹ, không độc, ăn ếch và cá, hoạt động cả ngày." },
    { name: "Trimeresurus albolabris", desc: "Rắn lục mép trắng, nọc độc mạnh, phổ biến ở Việt Nam, hoạt động về đêm." },
    { name: "Trimeresurus purpureomaculatus", desc: "Rắn lục đốm tím, hiếm gặp, có nọc độc, thường sống ở rừng mưa nhiệt đới." },
];
