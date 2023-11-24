import { Rating } from '@mui/material'
import React, { useState } from 'react'
import "./Reviews.css"
import {
    IconButton,
    Avatar,
} from "@mui/material";

const ReviewItem = (props) => {
    const { name, date, description, rating } = props.response;
    const topReviews = useState(0)
    return (
        <div>
            <div className='response-cart-all'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className='name' >
                        <div>
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="" />
                            </IconButton>
                        </div>
                        {name}
                    </div>
                </div>
                <div className='response-cart'>
                    <p style={{ marginBottom: "20px" }} > {description}</p>
                    <span style={{}} >{date}</span>
                </div>
                <div className='rating'><Rating name="half-rating" value={rating} precision={0.5} /></div>

            </div>
        </div>
    )
}

export default ReviewItem