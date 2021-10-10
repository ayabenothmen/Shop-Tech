import React, { Fragment, useState, useEffect } from 'react'
import { MDBDataTable } from 'mdbreact'

import MetaData from '../layout/MetaData'
import Loader from '../layout/Loader'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getProductBiddings, deleteBidding, clearErrors} from '../../actions/productActions'
import { DELETE_BIDDING_RESET } from '../../constants/productConstants'
import axios from 'axios'
import { set } from 'mongoose'

const ProductBiddings = () => {

    const [productId, setProductId] = useState('')

    const alert = useAlert();
    const dispatch = useDispatch();


    const { error, biddings } = useSelector(state => state.productBiddings);
    const { isDeleted, error: deleteError } = useSelector(state => state.bidding);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors())
        }

        if (productId !== '') {
            dispatch(getProductBiddings(productId))
        }

        if (isDeleted) {
            alert.success('Auction deleted successfully');
            dispatch({ type: DELETE_BIDDING_RESET })
        }



    }, [dispatch, alert, error, productId, isDeleted, deleteError])

    const deleteBiddingHandler = (id) => {
        dispatch(deleteBidding(id, productId))
    }

 
    

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(getProductBiddings(productId))
    }

    /*const auction =  bidding.accept_bid;
      auction.set(1);*/
    
        const [accept, setAccept] =  useState(0);
        
       
   
      

   // console.log(accept_bid);

    const setBiddings = () => {
        const data = {
            columns: [
                {
                    label: 'Bidding ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Auction',
                    field: 'auction',
                    sort: 'asc'
                },
                {
                    label: 'User',
                    field: 'user',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
                {
                    label: 'Bid',
                    field: 'bid',
                },

                {
                    label: 'Accept',
                    field: 'accept',
                    value: 'accept_bid'
                }
            ],
            rows: []
        }


        console.log(biddings);

        biddings.forEach(bidding => {

            /*const auction =  bidding.accept_bid;
      auction.set(1);*/
     
      
            data.rows.push({
                id: bidding._id,
                auction: bidding.auction,
                user: bidding.name,
                bid: bidding.accept_bid,
                

                accept:
                <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => 
                    setAccept(accept+0)}
                    >accept Bid</button>,
                actions:
                    <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteBiddingHandler(bidding._id)}>
                        <i className="fa fa-trash"></i>
                    </button>

            })
        })

        return data;
    }

    return (
        <Fragment>
            <MetaData title={'Product Auctions'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="row justify-content-center mt-5">
                            <div className="col-5">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group">
                                        <label htmlFor="productId_field">Enter Product ID</label>
                                        <input
                                            type="text"
                                            id="productId_field"
                                            className="form-control"
                                            value={productId}
                                            onChange={(e) => setProductId(e.target.value)}
                                        />
                                    </div>

                                    <button
                                        id="search_button"
                                        type="submit"
                                        className="btn btn-primary btn-block py-2"
                                    >
                                        SEARCH
								    </button>
                                </ form>
                            </div>

                        </div>
                         

                        {biddings && biddings.length > 0 ? (
                            <MDBDataTable
                                data={setBiddings()}
                                className="px-3"
                                bordered
                                striped
                                hover
                            />
                        ) : (
                                <p className="mt-5 text-center">No Biddings for this product.</p>
                            )}


                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default ProductBiddings