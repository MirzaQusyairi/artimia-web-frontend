import React, { useState }from 'react'
import './productlist.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import {  productRows } from '../../dummyData';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item)=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'product',
            headerName: 'Product',
            width: 200,
            renderCell: (params)=> { 
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="Usr Img" />
                        {params.row.name}
                    </div>
                )
            }
        },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 200,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            sortable: false,
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => { 
                return (
                    <div className="userListAction">
                        <Link to={"/product/"+params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="productListDelete" onClick={()=>handleDelete(params.row.id)}/>
                    </div>
                )
            }
        }
    ];
    
    return (
        <div className="productList">
            <DataGrid
                disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={5}
                disableSelec
                tionOnClick/>
        </div>
    )
}

export default ProductList