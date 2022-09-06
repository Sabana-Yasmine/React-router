import { Space, Table, Button,  } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {EditOutlined, DeleteOutlined}from "@ant-design/icons";

function Product() {
    const [prodList, setProdList] = useState([]);
  
    useEffect(() => {
      getProdDetails();
    },[]);

    const getProdDetails = () => {
        axios
          .get("http://localhost:402/product/getallproduct")
          .then((res) => {
            setProdList(res.data.result);
            console.log(prodList);
        });
    };
    // const removedata = async(data) =>{
    //     const token = localStorage.getItem("token")
    //     console.log("token",token)
    //     let deleteitem =await axios.deleteitem(`http://localhost:402/product/deleteproduct`,{
    //         headers:{token:token}
    //     })
    //     .then((res)=>{
    //         console.log(res.data.result);
       
    //     })
    //     .catch((error)=>{
    //         alert(error.message);
    //         console.log(error);
    //     })
    // }

    const columns = [
        {
          title: "ProductCategory",
          dataIndex: "ProductCategory",
          key: "ProductCategory",
        },
        {
          title: "ProductName",
          dataIndex: "ProductName",
          key: "ProductName",
        },
        {
          title: "Price",
          dataIndex: "Price",
          key: "Price",
        },
        {
            title: "Quantity",
            dataIndex: "Quantity",
            key: "Quantity",
          },
          {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <Space size="middle">
                <a style={{ fontStyle: "italic" }}>Mail to {record.UserName}</a>
                <EditOutlined style={{ color: "DeepSkyBlue", marginLeft: "10px" }} />
                <DeleteOutlined style={{ color: "red", marginLeft: "10px" }} />
              </Space>
            ),
          },
        ];
        return (
            <div className="Product">
              <Table className="user-table" columns={columns} dataSource={prodList} />
            </div>
          
          );
}  
export default Product;