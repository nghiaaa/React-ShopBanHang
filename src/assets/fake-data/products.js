import aothun1 from "../images/products/aothun1.jpg";
import aothun2 from "../images/products/aothun2.jpg";
import aothun3 from "../images/products/aothun3.jpg";
import aothun4 from "../images/products/aothun4.jpg";
import aosomi1 from "../images/products/aosomi1.jpg";
import aosomi2 from "../images/products/aosomi2.jpg";
import aosomi3 from "../images/products/aosomi3.jpg";
import aosomi4 from "../images/products/aosomi1.jpg";
import aosomi5 from "../images/products/aosomi2.jpg";
import quan1 from "../images/products/quan1.jpg";
import quan2 from "../images/products/quan2.jpg";
import quan3 from "../images/products/quan3.jpg";
const products = [
  {
    title: "Áo thun Dinosaur 01",
    price: 189000,
    image: aothun1,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange"],
    id: "1",
    size: ["s", "m", "l", "xl"],
    description:
      "Sự hiện diện của những chiếc áo thun basic cổ tròn trong tủ đồ của bạn chính là chìa khóa giúp cho bạn có thêm nhiều outfit thú vị mà lại không cần đến quá nhiều món đồ. Áo thun nữ cotton cổ tròn basic chính là vũ khí tiện dụng cho các chị em trong trang phục hàng ngày!Thiết kế đơn giản, form dáng tiện lợi của áo thun PPN4502. Tại sao chỉ với 1 chiếc áo thun nữ basic mà bạn có thể phối với 10 bộ độ khác nhau? Câu trả lời nằm ở chính sự đơn giản của chúng. Càng đơn giản, bạn lại càng dễ mix & match với những món đồ khác nhau.Áo thun nữ PPM4502 có thiết kế cổ tròn đơn giản, nhẹ nhàng tôn da. Tay cáo, form áo cũng không hề cầu kỳ, rất dễ mặc với nhiều thân hình khác nhau. Đặc biệt hơn, màu sắc của chiếc áo phông nữ cổ tròn này cũng rất nhã nhặn, trung tính, trơn màu. Sự tối giản từ thiết kế, đường may đến bảng màu giúp các chị em không cần đắn đo quá nhiều khi lựa chọn. Chất liệu cotton 95% được xử lý nghiêm ngặt, quy trình và công nghệ hiện đại nên mang tới cho chiếc áo sự thoải mái, mềm mại, thoáng mát ngay khi chạm vào",
  },
  {
    title: "Áo thun Dinosaur 02",
    price: 159000,
    image: aothun2,
    categorySlug: "ao-thun",
    colors: ["white", "red", "blue"],
    id: "2",
    size: ["s", "m"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },
  {
    title: "Áo thun Dinosaur 03",
    price: 190000,
    image: aothun3,
    categorySlug: "ao-thun",
    colors: ["white", "red", "orange", "yellow"],
    id: "3",
    size: ["m"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },
  {
    title: "Áo thun Dinosaur 13",
    price: 189000,
    image: aothun4,
    categorySlug: "ao-thun",
    colors: ["white", "red"],
    id: "4",
    size: ["s", "m", "xl"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },
  {
    title: "Áo somi caro 07",
    price: 129000,
    image: aosomi1,
    categorySlug: "ao-somi",
    colors: ["white", "red", "orange", "blue"],
    id: "7",
    size: ["l", "xl"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },
  {
    title: "Áo somi dài tay 08",
    price: 289000,
    image: aosomi2,
    categorySlug: "ao-somi",
    colors: ["white", "red", "black"],
    id: "8",
    size: ["s", "m", "xl"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },
  {
    title: "Áo somi tay dài 09",
    price: 389000,
    image: aosomi3,
    categorySlug: "ao-somi",
    colors: ["white", "blue"],
    id: "9",
    size: ["m"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },
  {
    title: "Quần jean phong cách 10",
    price: 489000,
    image: quan2,
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    id: "10",
    size: ["l"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },
  {
    title: "Quần jean 11",
    price: 155000,
    image: quan3,
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    id: "11",
    size: ["s", "m", "xl"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },
  {
    title: "Quần jean 12",
    price: 189000,
    image: quan2,
    categorySlug: "quan-jean",
    colors: ["blue"],
    id: "12",
    size: ["s", "m", "xl"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },

  {
    title: "Áo somi dài tay 16",
    price: 170000,
    image: aosomi4,
    categorySlug: "ao-somi",
    colors: ["blue", "black"],
    id: "16",
    size: ["m", "xl"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },
  {
    title: "Áo somi tay dài 17",
    price: 170000,
    image: aosomi5,
    categorySlug: "ao-somi",
    colors: ["white", "blue"],
    id: "17",
    size: ["s", "l", "xl"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },
  {
    title: "Quần jean phong cách 18",
    price: 220000,
    image: quan1,
    categorySlug: "quan-jean",
    colors: ["blue", "black"],
    id: "18",
    size: ["s", "m", "l", "xl"],
    description:
      "Được Stephen Marks thành lập vào năm 1972, French Connection (FCUK) - thương hiệu với phong cách nổi loạn, phá cách và phóng khoáng đã tạo nên sự thu hút tới thị trường thời trang rộng lớn với chất lượng tốt và giá cả hợp lý.",
  },
  // 18 products
];

export default products;
