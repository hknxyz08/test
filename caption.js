// =======================================================
// Locket Custom Captions 
// Tự host bởi Hoang Khanh Nam
// =======================================================

var obj = JSON.parse($response.body);

// Tạo nhóm Nhãn dán độc quyền của Khánh Nam
var gocKhanhNam = {
    "section": "🚀 Đặc quyền Khánh Nam",
    "items": [
        {
            "overlay_id": "caption:khanhnam_deptrai",
            "source": "remote",
            "caption": {
                "background": { "colors": ["#F6D365", "#FDA085"] }, // Dải màu cam vàng
                "icon": { "data": "😎", "type": "emoji" },
                "max_lines": 1,
                "text": "Khánh Nam Đẹp Trai", 
                "text_color": "#000000",
                "type": "static_content"
            }
        },
        {
            "overlay_id": "caption:deadline",
            "source": "remote",
            "caption": {
                "background": { "colors": ["#FF416C", "#FF4B2B"] }, // Dải màu đỏ
                "icon": { "data": "🔥", "type": "emoji" },
                "max_lines": 1,
                "text": "Deadline dí tụt quần",
                "text_color": "#FFFFFF",
                "type": "static_content"
            }
        },
        {
            "overlay_id": "caption:locket_vip",
            "source": "remote",
            "caption": {
                "background": { "colors": ["#36D1DC", "#5B86E5"] }, // Dải màu xanh biển
                "icon": { "data": "👑", "type": "emoji" },
                "max_lines": 1,
                "text": "Locket xác nhận bạn cutii",
                "text_color": "#FFFFFF",
                "type": "static_content"
            }
        }
    ]
};

// Đẩy nhóm caption này lên vị trí đầu tiên trong danh sách của Locket
if (obj && Array.isArray(obj)) {
    obj.unshift(gocKhanhNam);
}

// Trả kết quả về cho ứng dụng hiển thị
$done({ body: JSON.stringify(obj) });
