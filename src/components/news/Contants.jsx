export const columnHackerNews = [
  {
    title: "Tác giả",
    dataIndex: "author",
    key: "author",
    width: 150,
  },
  {
    title: "Tiểu đề",
    dataIndex: "title",
    key: "title",
    width: 320,
  },
  {
    title: "Thời gian tạo",
    dataIndex: "created_at",
    key: "created_at",
    width: 170,
    type: "datetime",
  },
  {
    title: "Thời gian cập nhập",
    dataIndex: "updated_at",
    key: "updated_at",
    width: 170,
    type: "datetime",
  },
  {
    title: "Số điểm",
    dataIndex: "points",
    key: "points",
    width: 90,
    align: "center",
    type: "number",
  },
  {
    title: "Số comment",
    dataIndex: "num_comments",
    key: "num_comments",
    width: 90,
  },
  {
    title: "Tags",
    dataIndex: "_tags",
    key: "_tags",
    width: 250,
    type: "tags",
  },
  {
    title: "Đường dẫn",
    dataIndex: "url",
    key: "url",
    width: 250,
    ellipsis: true,
    type: "link",
  },
  {
    title: "",
    key: "action",
    width: 70,
    align: "center",
    fixed: "right",
    type: "actions",
  },
];

// constants/status.js
export const STATUS_CONFIG = {
  NEW: {
    label: "Tạo mới",
    color: "blue",
  },
  PROCESSING: {
    label: "Đang xử lý",
    color: "orange",
  },
  DONE: {
    label: "Hoàn thành",
    color: "green",
  },
  CANCELLED: {
    label: "Đã hủy",
    color: "red",
  },
};
