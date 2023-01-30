import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import "./index.css";

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListAvatar">
            <img
              className="userListImg"
              src={params.row.avatar}
              alt="Usr Img"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "E-Mail",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      sortable: false,
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListAction">
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={5}
        disableSelec
        tionOnClick
      />
    </div>
  );
};

export default UserList;
