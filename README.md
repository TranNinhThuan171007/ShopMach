# ShopMach — Mạch, cửa hàng phụ kiện máy tính

Website thương mại điện tử demo bằng HTML, CSS và JavaScript thuần, thực hiện theo LAB1.

## Chạy trang web

Mở `index.html` trong trình duyệt. Ảnh sản phẩm được tải từ Unsplash nên cần Internet; font chữ sử dụng Be Vietnam Pro.

## Chức năng

- Tìm kiếm, lọc danh mục và sắp xếp sản phẩm theo giá.
- 36 sản phẩm chia thành dải nổi bật có thể kéo ngang và lưới danh mục phân trang 12 món.
- Ảnh sản phẩm có ảnh dự phòng để tránh thẻ trống khi một nguồn ảnh bị lỗi.
- Thêm, xóa và đổi số lượng sản phẩm trong giỏ hàng; giỏ hàng được lưu trên thiết bị.
- Tạo tài khoản, đăng nhập và đăng xuất; trạng thái đăng nhập được lưu trên thiết bị để trình diễn.
- Đặt hàng bằng COD hoặc chuyển khoản qua mã QR VietQR trong thư mục `Images/maqr.jpg`.
- Giao diện responsive cho màn hình máy tính và điện thoại.

## Cấu trúc thư mục

- `index.html`: trang cửa hàng.
- `Styles/`: CSS.
- `Scripts/`: JavaScript.
- `Images/`: hình minh họa SVG dự phòng và tài sản hình ảnh của dự án.
- `Sounds/`, `Videos/`: thư mục dành cho tài sản đa phương tiện của bài thực hành.

## Cải tiến demo

- Bộ lọc khoảng giá, chỉ xem sản phẩm đang giảm, lọc yêu thích và sắp xếp theo phần trăm giảm.
- Chi tiết sản phẩm, đánh giá mẫu, danh sách yêu thích và mã MACH10/SETUP5.
- Mã ưu đãi được tính trong tổng thanh toán COD/chuyển khoản.
- Ảnh tham khảo được gán theo nhóm sản phẩm; ảnh bàn đèn, cáp USB-C, hub và nắp webcam dùng nguồn ảnh phù hợp hơn. Ảnh Unsplash/CDN cần Internet.

Luồng COD/QR hiện chỉ chạy phía trình duyệt và chưa gửi đơn đến cửa hàng hay tự xác nhận thanh toán. Cần kết nối API/backend để nhận đơn, bảo vệ thông tin khách và đối soát chuyển khoản.
