import React from 'react';
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline, } from "@mui/icons-material";
import {userRows} from '../../dummyData';

export default function UserList() {
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "user", headerName: "User", width: 200, renderCell: (params)=>{
            return (
              <div className="userListUser">
                  <img className="userListImg" src={params.row.avatar} alt=""/>
                  {params.row.username}
              </div>  

            )

        }},
        { field: "email", headerName: "Email", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 90,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 120,
        },
        {
            field: "action",
            headerName: "Action",
            width:150,
            renderCell: (params)=>{
                return(
                    <div>

                    <button className="userListEdit">Edit</button>
                    <DeleteOutline className= "userListDelete"/>
</div>
                );
            },
        },
       
      ];  
  return (
    <div className="userList">
         <DataGrid 
         rows={ userRows} 
         disableSelectionOnClick 
         columns={columns} 
         pageSize={8} 
         rowsPerPageOptions={[5]}
         checkboxSelection />
    </div>
  );

}