// resources/js/components/ReservationForm.js

import React, { useState } from 'react';
import axios from 'axios';

function ReservationForm() {
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        reservation_date: '',
        notes: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/reservations', formData);
            console.log('Reservation created:', response.data);
        } catch (error) {
            console.error('There was an error creating the reservation:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* フォームフィールド */}
            <button type="submit">予約する</button>
        </form>
    );
}

export default ReservationForm;
