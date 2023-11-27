import React, { useEffect, useState } from 'react';
import "./Reviews.css";
import ReviewItem from './ReviewItem';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Rating } from '@mui/material';
import Header from '../Header';
import Menu from '../cars-list/components/Menu';

const Reviews = () => {

    // Параметри пагінації
    const itemsPerPage = 3; // Кількість елементів на сторінці
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState(false);

    const reviewsData = [
        {
            name: "Oleksandr",
            date: '17.11.2023',
            description: "Задоволений своєю онлайн-покупкою автомобіля від цього продавця. Весь процес від початку до кінця пройшов швидко і ефективно. Продавець надав детальний опис авто та його історію обслуговування. Додаткові сервіси, такі як доставка та фінансування, були також добре організовані. Залишився задоволений та раджу іншим користувачам Інтернету.",
            rating: 5,
            likes: 6,
            dislikes: 1
        },

        {
            name: "ChatGPT",
            date: '26.06.2022',
            description: "Покупка авто через Інтернет від цього продавця була чудовим досвідом! Сайт був зручним для навігації, а весь процес покупки був прозорий. Продавець оперативно відповідав на всі мої запитання та надавав додаткові фотографії та інформацію про авто. Автомобіль був у відмінному стані, як описано. Рекомендую цього продавця для онлайн-покупок!",
            rating: 1,
            likes: 2,
            dislikes: 9
        },

        {
            name: "Юрій",
            date: '23.09.2023',
            description: "Жахливий досвід покупки авто в інтернеті. Продавець обіцяв одне, але отримавшись зовсім інше. Авто потребує серйозного ремонту, якого він не вказав у оголошенні. Не рекомендую цього продавця!",
            rating: 2,
            likes: 12,
            dislikes: 2
        },

        {
            name: "Yan",
            date: '10.03.2023',
            description: "Продавець продемонстрував вражаючий рівень знань у галузі автомобільної техніки. Він надав докладну інформацію про кожну модель і чудово порадив щодо вибору, враховуючи мої потреби. Його експертиза вразила мене.",
            rating: 4.3,
            likes: 7,
            dislikes: 2
        },

        {
            name: "Vlad",
            date: '16.10.2023',
            description: "Продавець виявив уважний підхід до клієнта, завжди готовий вислухати мої побажання та відповідати на запитання. Він створив дуже комфортну атмосферу під час покупки, що зробило процес приємним.",
            rating: 5,
            likes: 6,
            dislikes: 1
        },

        {
            name: "Vasyl",
            date: '13.12.2023',
            description: "Цей продавець відзначився чесністю у всіх транзакціях. Він розкрив всі деталі стосовно автомобіля, включаючи можливі недоліки. Це створило високий рівень довіри в процесі угоди.",
            rating: 4.2,
            likes: 3,
            dislikes: 2
        },

        {
            name: "Roman",
            date: '21.06.2004',
            description: "На жаль, постачання автомобіля затягнулося, і я отримав його пізніше, ніж очікував. Така затримка створила певні незручності у моєму графіку.",
            rating: 3,
            likes: 1,
            dislikes: 5
        },

        {
            name: "Ivan",
            date: '11.10.2001',
            description: "Хоча перші етапи обслуговування були відмінними, пізніше зв'язок з продавцем став нестабільним. Важко було отримати відповіді на питання та уточнення.",
            rating: 2,
            likes: 3,
            dislikes: 2
        },

        {
            name: "Dmytro",
            date: '21.05.2004',
            description: "Під час оформлення угоди виявилося, що є додаткові витрати, які раніше не були зазначені. Це створило деяке непорозуміння та розчарування у фінансовому плані.",
            rating: 2.3,
            likes: 2,
            dislikes: 2
        },
    ]

    // // Обчислюємо індекси для відображення відгуків на поточній сторінці
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const currentReviews = reviewsData.slice(startIndex, endIndex);

    // // Загальна кількість сторінок
    // const totalPages = Math.ceil(reviewsData.length / itemsPerPage);

    // // Функція для зміни сторінки
    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [response, setResponse] = useState([...reviewsData]); // Додав стан для тримання відгуків
    console.log(response)
    const [feedback, setFeedback] = useState({
        rating: 0,
        name: '',
        comment: '',
        likes: 0,
        dislikes: 0
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
            likes: 0,
            dislikes: 0
        };

        // Додаємо новий відгук до стану response
        setResponse((prevResponse) => [newFeedback, ...prevResponse]);
        // Закриваємо модальне вікно
        handleModalClose();
        setFeedback({
            rating: 0,
            name: "",
            comment: "",
            likes: 0,
            dislikes: 0
        })
    };

    const sortResponseUp = (columnName) => {
        const sortedResponse = [...response].sort((a, b) => {
            return b[columnName] - a[columnName];
        });

        setResponse(sortedResponse);
    };

    const sortResponseDown = (columnName) => {
        const sortedResponse = [...response].sort((a, b) => {
            return a[columnName] - b[columnName];
        });

        setResponse(sortedResponse);
    };

    const handleLike = (index) => {
        const resCopy = [...response]
        resCopy[index].likes = resCopy[index].likes + 1;
        setResponse(resCopy)
    };

    const handleDislike = (index) => {
        const resCopy = [...response]
        resCopy[index].dislikes = resCopy[index].dislikes + 1;
        setResponse(resCopy)
    };

    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const currentReviews = response.slice(startIndex, endIndex);

    const totalPages = Math.ceil(response.length / itemsPerPage);

    const handlePageChange = () => {
        setCurrentPage(currentPage + 1);
    };

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
        // Приклад валідації: наприклад, поле не повинно бути порожнім
        setError(e.target.value === '');
    };

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
                            <p style={{ cursor: "pointer" }} onClick={() => sortResponseUp('rating')}>POSITIVE {response.filter(item => item.rating > 2.5).length}</p>
                            <p style={{}}>ALL {response.length}</p>
                            <p style={{ cursor: "pointer" }} onClick={() => sortResponseDown('rating')}>NEGATIVE {response.filter(item => item.rating <= 2.5).length}</p>
                        </div>
                    </div>
                    <button className='responseButton' onClick={handleModalOpen}>Give feedback</button>

                    <Dialog open={isModalOpen} onClose={handleModalClose}>
                        <DialogTitle>Give Feedback</DialogTitle>
                        <DialogContent style={{ width: "400px" }}>
                            <TextField style={{ marginTop: "10px" }} label="Name" name="name" value={feedback.name} onChange={(e) => {
                                handleInputChange(e);
                                handleChange(e); // Додайте цей виклик, якщо потрібно викликати іншу функцію
                            }} fullWidth error={error}
                                helperText={error ? 'Поле не може бути порожнім' : ''} />
                            <br />
                            <TextField style={{ marginTop: "20px", marginBottom: "10px" }} label="Comment" name="comment" value={feedback.comment} onChange={(e) => {
                                handleInputChange(e);
                                handleChange(e); // Додайте цей виклик, якщо потрібно викликати іншу функцію
                            }} fullWidth error={error}
                                helperText={error ? 'Поле не може бути порожнім' : ''} />
                            <br />
                            <p style={{ marginLeft: 130 }} >Your rating</p>
                            <Rating style={{ marginLeft: 110, marginTop: 10 }} name="half-rating" value={feedback.rating} precision={0.1} onChange={(event, newValue) => handleRatingChange(newValue)} />
                        </DialogContent>
                        <DialogActions>
                            <Button style={{ color: "black" }} onClick={handleConfirmFeedback}>Confirm</Button>
                            <Button style={{ color: "black" }} onClick={handleModalClose}>Cancel</Button>
                        </DialogActions>
                    </Dialog>

                    {currentReviews.map((responseItem, index) => (
                        <ReviewItem response={responseItem} key={index} handleLike={() => handleLike(index)} handleDislike={() => handleDislike(index)} />
                    ))}

                    {/* Додана пагінація */}
                    {/* <div className='pagination'>
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            <svg viewBox='0 0 19 19' style={{ width: "15", height: "15" }}>
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                            </svg>
                        </button>
                        <p>Page {currentPage} of {totalPages}</p>
                        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        <svg viewBox='0 0 19 19' style={{ width: "15", height: "15" }}>
                                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                            </svg>
                        </button>
                    </div> */}

                    {/* Додана кнопка "Більше відгуків" */}
                    {endIndex < response.length && (
                        <div className='show-more'>
                            <Button onClick={handlePageChange}>Більше відгуків</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reviews