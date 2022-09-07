import { Space, Table, Pagination, Button, Select } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  EditOutlined,
  DeleteOutlined,
  PrinterTwoTone,
  PlusSquareOutlined,
  RightCircleOutlined
  
} from "@ant-design/icons";

function ProdTable() {
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    getProdDetails();
  }, []);


  const getProdDetails = async(data) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://localhost:402/product/getallproduct",{
        headers:{token:token}
      })
      .then((res) => {
        setProdList(res.data.result);
        console.log(prodList);
      });
  };

  const columns = [
    {
      title: "ProductCategory",
      dataIndex: "productCategory",
      key: "productCategory",
    },
    {
      title: "ProductName",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a style={{ fontStyle: "italic" }}>Mail to {record.UserName}</a>
          <PlusSquareOutlined style={{ color: "Lime", marginLeft: "100px" }} />
          <EditOutlined style={{ color: "DeepSkyBlue", marginLeft: "10px" }} />
          <DeleteOutlined style={{ color: "red", marginLeft: "10px" }} />
          <PrinterTwoTone style={{ marginLeft: "10px" }} />
          <RightCircleOutlined />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table className="user-table" columns={columns} dataSource={prodList} />
    </>
  );
}

export default ProdTable;