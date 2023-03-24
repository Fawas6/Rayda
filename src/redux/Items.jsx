import { fontWeight } from '@mui/system';
import * as React from 'react'
import { useGetDataQuery } from "../redux/apiSlice";
//import { v4 as uuidv4} from 'uuid';

const DataList = () => {
    const { data, error, isLoading, isFetching, isSuccess } = useGetDataQuery();
    
    return (
        <div className='displayed_items_container'>
            {isLoading && <div><h4>Loading...</h4></div>}
            {isFetching && <div><h4>Fetching...</h4></div>}
            {error && <div><h4>Something went wrong!!!</h4></div>}
            {isSuccess && 
                <div>
                    {data.data.map((item) => (
                            <div className='displayed_items' key={item.title}>
                                <img className='item_image' src={item.image} alt="" />
                                <div className='item_name'><span className='KO'>KO</span> {item.name}<span className='highest_bidder'> (Highest Bidder)</span></div>
                                <div className='item_title'>{item.title}</div>
                                <div className='item_bid'><span style={{ fontWeight: '100', color: '#464444' }}>Current Bid:</span> {item.bid}</div>
                                <hr/>     
                            </div>
                    ))}
                </div>}
        </div>
    )
}

export default DataList;
{/*function DataList() {
    const { data, isError, isLoading, isSuccess, error } = useGetDataQuery();

    if (isLoading) {
        <div><h2>Loading...</h2></div>
    }

    if (isSuccess) {
        return (
            <div>
                <div>{data.name}</div>
                <div>{data.title}</div>
            </div>4
        )
    }

    if (isError) {
       <div>Error: {error}</div>;
    }
}

export default DataList;*/}