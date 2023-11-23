import React, { useEffect, useState } from 'react';
import "./Reviews.css";
import ReviewItem from './ReviewItem';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Rating } from '@mui/material';
import Header from '../Header';
import Menu from '../cars-list/components/Menu';

const Reviews = () => {

    const reviewsData = [
        {
            name: "Oleksandr",
            date: '17.11.2023',
            description: "Задоволений своєю онлайн-покупкою автомобіля від цього продавця. Весь процес від початку до кінця пройшов швидко і ефективно. Продавець надав детальний опис авто та його історію обслуговування. Додаткові сервіси, такі як доставка та фінансування, були також добре організовані. Залишився задоволений та раджу іншим користувачам Інтернету.",
            rating: 5,
        },

        {
            name: "ChatGPT",
            date: '26.06.2022',
            description: "Покупка авто через Інтернет від цього продавця була чудовим досвідом! Сайт був зручним для навігації, а весь процес покупки був прозорий. Продавець оперативно відповідав на всі мої запитання та надавав додаткові фотографії та інформацію про авто. Автомобіль був у відмінному стані, як описано. Рекомендую цього продавця для онлайн-покупок!",
            rating: 1,
        },

        {
            name: "Юрій",
            date: '23.09.2023',
            description: "Жахливий досвід покупки авто в інтернеті. Продавець обіцяв одне, але отримавшись зовсім інше. Авто потребує серйозного ремонту, якого він не вказав у оголошенні. Не рекомендую цього продавця!",
            rating: 2,
        }
    ]

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [response, setResponse] = useState(reviewsData); // Додав стан для тримання відгуків
    const [feedback, setFeedback] = useState({
        rating: 0,
        name: '',
        comment: '',
    });

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            [name]: value,
        }));
    };

    const handleRatingChange = (newValue) => {
        setFeedback((prevFeedback) => ({
            ...prevFeedback,
            rating: newValue,
        }));
    };

    const handleConfirmFeedback = () => {
        // Створюємо об'єкт для відгуку
        const newFeedback = {
            name: feedback.name,
            date: new Date().toLocaleDateString(), // Додаємо поточну дату
            description: feedback.comment,
            rating: feedback.rating,
        };

        // Додаємо новий відгук до стану response
        setResponse((prevResponse) => [...prevResponse, newFeedback]);

        // Створюємо об'єкт для відгуку, який відправляється на сервер
        const userData = {
            name: feedback.name,
            date: newFeedback.date,
            description: feedback.comment,
            rating: feedback.rating,
        };

        // Закриваємо модальне вікно
        handleModalClose();
        setFeedback({
            rating: 0,
            name: "",
            comment: ""
        })
    };

    const sorting = (value) => {
        if (value) {
            response.sort(item => item.rating)
        }
        console.log(response)
    }

    return (
        <div className="carsList--page">
            <Header />
            <div style={{ display: "flex" }}>
                <Menu />
                <div style={{ width: "100%", height: "100%", margin: "0px 30px" }} >
                    <div className='container'>
                        <h2 >Залиште свій відгук про продавця</h2>
                    </div>
                    <div className='reviews'>
                        <div className='response'>
                            <p style={{}} onClick={sorting(true)}>POSITIVE {response.filter(item => item.rating > 2.5).length}</p>
                            <p style={{}}>ALL {response.length}</p>
                            <p style={{}}>NEGATIVE {response.filter(item => item.rating <= 2.5).length}</p>
                        </div>
                    </div>
                    <button className='responseButton' onClick={handleModalOpen}>Give feedback</button>

                    <Dialog open={isModalOpen} onClose={handleModalClose}>
                        <DialogTitle>Give Feedback</DialogTitle>
                        <DialogContent style={{ width: "400px" }}>
                            <TextField style={{ marginTop: "10px" }} label="Name" name="name" value={feedback.name} onChange={handleInputChange} fullWidth />
                            <br />
                            <TextField style={{ marginTop: "20px", marginBottom: "10px" }} label="Comment" name="comment" value={feedback.comment} onChange={handleInputChange} fullWidth />
                            <br />
                            <p style={{ marginLeft: 130 }} >Your rating</p>
                            <Rating style={{ marginLeft: 110, marginTop: 10 }} name="half-rating" value={feedback.rating} precision={0.5} onChange={(event, newValue) => handleRatingChange(newValue)} />
                        </DialogContent>
                        <DialogActions>
                            <Button style={{ color: "black" }} onClick={handleConfirmFeedback}>Confirm</Button>
                            <Button style={{ color: "black" }} onClick={handleModalClose}>Cancel</Button>
                        </DialogActions>
                    </Dialog>

                    {response.map((responseItem, index) => (
                        <ReviewItem response={responseItem} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews