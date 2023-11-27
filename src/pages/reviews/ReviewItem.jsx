import { Rating } from '@mui/material';
import React, { useState } from 'react';
import "./Reviews.css";
import {
    IconButton,
    Avatar,
} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ReviewItem = (props) => {
    const { name, date, description, rating, likes, dislikes} = props.response;

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
                    <div className='down-review'>
                        <span style={{}} >{date}</span>
                        <div className='like-dislike-buttons'>
                            <IconButton onClick={props.handleLike}>
                                <ThumbUpIcon />
                            </IconButton>
                            <span>{likes}</span>
                            <IconButton onClick={props.handleDislike}>
                                <ThumbDownIcon />
                            </IconButton>
                            <span>{dislikes}</span>
                        </div>
                    </div>
                </div>
                <div className='rating'><Rating style={{opacity:1}} name="half-rating" value={rating} precision={0.1} disabled /></div>
            </div>
        </div>
    )
}

export default ReviewItem;
