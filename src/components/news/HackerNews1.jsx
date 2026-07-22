import axios from "axios";
// import { debounce } from "lodash";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import LoadingOverlay from "../../util/LoadingOverlay";
import { Button, Dropdown, Modal, Table, Tag, Tooltip } from "antd";
import {
  MoreOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { columnHackerNews, STATUS_CONFIG } from "./Contants";
import dayjs from "dayjs";

const HackerNews1 = () => {
  const [hits, setHits] = useState([]);
  // text nhập tìm kiếm
  const [query, setQuery] = useState("");
  // keyword url dùng gọi api
  const [searchQuery, setSearhQuery] = useState("");

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [errorMsg, setErrorMgs] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleFetchDataRef = useRef("");
  // call api
  handleFetchDataRef.current = async () => {
    try {
      setLoading(true);
      setErrorMgs(null);
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search",

        {
          params: {
            query: searchQuery,
            page,
          },
        },
      );
      setHits(response?.data?.hits || []);
      setTotalPages(response?.data?.nbPages || 0);
      console.log(response?.data?.hits);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMgs(`The error: ${error.message}`);
    }
  };

  //   const handleUpdateQuery = debounce((e) => {
  //     setQuery(e.target.value);
  //   }, 1000);
  const handleFetch = () => {
    if (!query.trim()) return; // tránh query rỗng
    setPage(0);
    setSearhQuery(query.trim());
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setPage(0);
      handleFetch();
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    handleFetchDataRef.current();
    console.log("render");

    return () => {
      controller.abort();
    };
  }, [searchQuery, page]);

  // xử lý các nút
  const handleView = useCallback((record) => {
    console.log(record);
  }, []);

  const handleEdit = useCallback((record) => {
    console.log(record);
  }, []);

  const handleDelete = useCallback((record) => {
    Modal.confirm({
      title: "Bạn có chắc muốn xóa?",
      content: `Bài viết: ${record.title || "Không có tiêu đề"}`,
      onOk: () => {
        console.log("Delete:", record);
      },
    });
  }, []);

  const columns = useMemo(() => {
    return columnHackerNews.map((column) => {
      if (column.key === "num_comments") {
        return {
          ...column,
          render: (value, record, index) => {
            if (!value) return "-";
            if (value > 400) {
              return (
                <Tag color={STATUS_CONFIG.NEW.color}>
                  {STATUS_CONFIG.NEW.label}
                </Tag>
              );
            } else {
              return (
                <Tag color={STATUS_CONFIG.DONE.color}>
                  {STATUS_CONFIG.NEW.label}
                </Tag>
              );
            }
          },
        };
      }
      switch (column.type) {
        case "datetime":
          return {
            ...column,
            render: (value, record, index) => {
              if (!value) return "-";
              const date = dayjs(value);

              return date.isValid() ? date.format("HH:mm:ss DD/MM/YYYY") : "-";
            },
          };

        case "tags":
          return {
            ...column,
            render: (tags = [], record, index) => {
              const MAX_TAGS = 3;

              if (!tags.length) return "-";

              return (
                <>
                  {tags.slice(0, MAX_TAGS).map((tag) => (
                    <Tag key={tag} color="blue">
                      {tag}
                    </Tag>
                  ))}

                  {tags.length > MAX_TAGS && (
                    <Tooltip
                      title={
                        <div>
                          {tags.slice(MAX_TAGS).map((tag) => (
                            <div key={tag}>{tag}</div>
                          ))}
                        </div>
                      }
                    >
                      <Tag color="blue">+{tags.length - MAX_TAGS}</Tag>
                    </Tooltip>
                  )}
                </>
              );
            },
          };

        case "link":
          return {
            ...column,
            render: (link) => {
              if (!link) return "-";

              return (
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              );
            },
          };

        case "actions":
          return {
            ...column,
            render: (_, record) => {
              const items = [
                {
                  key: "view",
                  icon: <EyeOutlined />,
                  label: "Xem chi tiết",
                },
                {
                  key: "edit",
                  icon: <EditOutlined />,
                  label: "Sửa",
                },
                {
                  type: "divider",
                },
                {
                  key: "delete",
                  danger: true,
                  icon: <DeleteOutlined />,
                  label: "Xóa",
                },
              ];

              const handleMenuClick = ({ key }) => {
                if (key === "view") handleView(record);
                if (key === "edit") handleEdit(record);
                if (key === "delete") handleDelete(record);
              };

              return (
                <Dropdown
                  trigger={["click"]}
                  menu={{
                    items,
                    onClick: handleMenuClick,
                  }}
                >
                  <Button type="text" icon={<MoreOutlined />} />
                </Dropdown>
              );
            },
          };

        default:
          return column;
      }
    });
  }, [handleView, handleEdit, handleDelete]);

  // const columns = columnHackerNews({
  //   onView: handleView,
  //   onEdit: handleEdit,
  //   onDelete: handleDelete,
  // });
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-3.5/4">
      <div className="flex gap-x-2 mb-5">
        <input
          type="text"
          className="border border-gray-300 p-5 block w-full rounded-md transition-all focus:border-blue-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 text-white font-semibold"
          onClick={() => handleFetch()}
        >
          Tìm kiếm
        </button>
      </div>

      {/* {loading && (
        <div className=" w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )} */}
      {loading && <LoadingOverlay />}
      {!loading && errorMsg && <p>{errorMsg}</p>}
      {/* <div>
        {!loading &&
          hits.length > 0 &&
          hits.map((item) => {
            if (item.title) {
              return (
                <div key={item.story_id} className="p-3 bg-gray-100 rounded-md">
                  {item.title}
                </div>
              );
            }
          })}
      </div> */}
      {!loading && (
        <div>
          <Table
            columns={columns}
            dataSource={hits}
            rowKey="objectID"
            expandable={{
              showExpandColumn: false,
            }}
            scroll={{ x: 1000 }}
            pagination={{
              current: page + 1,
              pageSize: 20,
              total: totalPages * 20,
              showSizeChanger: false,
              hideOnSinglePage: true,
              onChange: (page) => setPage(page - 1),
            }}
          ></Table>
        </div>
      )}
    </div>
  );
};

export default HackerNews1;
