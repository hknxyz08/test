// ============================================================
// Locket Remote Config Rewrite (Firebase)
// Refactored & Optimized by: Hoang Khanh Nam
// Original Logic & Credits: Duy Vinh (@duyvinh09) & Contributors
// ============================================================

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var obj = JSON.parse($response.body);

if (ua.includes("Locket")) {
    obj.Attention = "Locket VIP Mod - Được tối ưu và duy trì server bởi Hoàng Khánh Nam!";
    obj.entries = obj.entries || {};

    // 1. MỞ KHÓA TÍNH NĂNG GOLD & GIAO DIỆN
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({ app_icon_picker: "enabled", camera_roll: "enabled", camera_theme: "enabled", locket_views: "enabled", long_captions: "enabled", longer_video: "enabled", unlimited_friends: "enabled", priority_support: "enabled", profile_badge: "enabled", remove_ads: "enabled", video: "enabled", custom_widget_frames: "enabled", streak_recovery: "enabled" }),
        upsell_features: JSON.stringify({ app_icon_picker: true, camera_roll: true, camera_theme: true, locket_views: true, remove_ads: true, custom_widget_frames: true }),
        feature_discovery_popup_config: JSON.stringify({ tag: "LOCKET GOLD VIP", tag_gradient: true, tag_style: "gold_gradient", title: "Chào mừng đến với Locket VIP 😎", feature_set: [ { title: "Bản Mod bởi Hoàng Khánh Nam", body: "Tận hưởng mọi tính năng Gold miễn phí! 💛", imageURL: "https://cdn.upanhlaylink.com/i/GSfYXmKd.png" } ], primary_button_title: "Xong rồi nhé!", campaign: "locket_gold_welcome_v3", start_at: "2020-01-01T00:00:00", end_at: "2099-12-31T23:59:59", use_local_time_zone: true }),
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true"
    });

    // 2. TẮT QUẢNG CÁO & TRACKING
    Object.assign(obj.entries, {
        history_ads_mode: "off", history_ads_prefetch_count: "0", history_ads_dynamic_insertion: "false", sentry_sample_rate: "0", sentry_network_tracing: "false", sentry_performance_tracking: "false"
    });

    // 3. MỞ KHÓA CAMERA 60s, UPLOAD CHẤT LƯỢNG CAO
    Object.assign(obj.entries, {
        camera: JSON.stringify({ gold_max_duration: 60.0, max_duration: 60.0, ultra_wide: true, volume_button: true, flash_button: true, telephoto: true, quality_mbps: 0.6 }),
        camera_roll: JSON.stringify({ gold_max_duration: 60.0, video_max_duration: 60.0, quality_mbps: 0.6, flash_button: true }),
        upload_main_image_size: "1440"
    });

    // 4. KHÔNG GIỚI HẠN BẠN BÈ (999 TRIỆU)
    Object.assign(obj.entries, {
        max_friends_count: "999999999", friend_limit_mode: "0", soft_friend_limit_threshold_count: "999999999"
    });

    // 8. TÙY CHỈNH CAPTIONS (NHÃN DÁN CỦA KHÁNH NAM Ở ĐÂY)
    Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        captions_enabled: "true",
        music_caption_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([ "standard", "poll", "color_palette", "review", "music", "location", "weather", "time", "streak", "star_sign", "party_time", "locket_count", "good_morning", "goodnight", "ootd", "miss_you" ]),
        overlay_items: JSON.stringify([
            {
                section: "🚀 Đặc quyền Khánh Nam",
                items: [
                    { overlay_id: "caption:khanhnam_deptrai", source: "remote", caption: { background: { colors: ["#F6D365", "#FDA085"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "Khánh Nam Đẹp Trai", text_color: "#000000", type: "static_content" } },
                    { overlay_id: "caption:vip_locket", source: "remote", caption: { background: { colors: ["#36D1DC", "#5B86E5"] }, icon: { data: "👑", type: "emoji" }, max_lines: 1, text: "Locket VIP User", text_color: "#FFFFFF", type: "static_content" } },
                    { overlay_id: "caption:deadline", source: "remote", caption: { background: { colors: ["#FF416C", "#FF4B2B"] }, icon: { data: "🔥", type: "emoji" }, max_lines: 1, text: "Deadline dí tụt quần", text_color: "#FFFFFF", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Bất ổn & Hết cứu 🫠",
                items: [
                    { overlay_id: "caption:nay_la_het_cuu", source: "remote", caption: { background: { colors: ["#607D8B", "#455A64"] }, icon: { type: "sf_symbol", data: "bolt.badge.xmark", color: "#FFFFFFE6" }, max_lines: 1, text: "Này là hết cứu", text_color: "#FFFFFFE6", type: "static_content" } },
                    { overlay_id: "caption:bat_luc", source: "remote", caption: { background: { colors: ["#2C3E50", "#3498DB"] }, icon: { data: "🏳️", type: "emoji" }, max_lines: 1, text: "Bất lực", text_color: "#FFFFFF", type: "static_content" } }
                ]
            },
            {
                section: "🎨 Gen Z & Xéo xắt 💅",
                items: [
                    { overlay_id: "caption:dep_trai_co_gi_sai", source: "remote", caption: { background: { colors: ["#FF5722", "#FFC107"] }, icon: { data: "😎", type: "emoji" }, max_lines: 1, text: "Đẹp trai có gì sai", text_color: "#000000E6", type: "static_content" } },
                    { overlay_id: "caption:hom_nay_slay", source: "remote", caption: { background: { colors: ["#C5B5E8", "#DDD0F2", "#F0C9DD"] }, icon: { type: "sf_symbol", data: "sparkles", color: "#514368" }, max_lines: 1, text: "hôm nay cũng slay", text_color: "#514368", type: "static_content" } }
                ]
            }
        ])
    });
}

$done({ body: JSON.stringify(obj) });
