import { Table } from "antd";

export default function We() {
  const dataSource = [
    {
      key: "1",
      name: "Fahim",
      Mobile: "----",
      Email: "ehsanulbarifahim7@gmail.com",
    },
    {
      key: "2",
      name: "Masum Rana",
      Mobile: "01644626735",
      Email: "masum.rana6267@gmail.com",
    },
    {
      key: "3",
      name: "Md.Kamrul Hasan",
      Mobile: "+8801823855998",
      Email: "kamrulhasan635653@gmail.com",
    },
    {
      key: "4",
      name: "Shofikul",
      Mobile: "01974297726",
      Email: "179398ssshofik@gmail.com",
    },
    {
      key: "5",
      name: "Omor",
      Mobile: "----",
      Email: "----",
    },
    {
      key: "6",
      name: "Jion",
      Mobile: "01627698905",
      Email: "----",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile",
      dataIndex: "Mobile",
      key: "Mobile",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}
