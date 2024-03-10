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
            console.error('There was an error creating the reservation:', error.response?.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                placeholder="User Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="date"
                name="reservation_date"
                value={formData.reservation_date}
                onChange={handleChange}
                required
            />
            <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Notes"
            />
            <button type="submit">予約する</button>
        </form>
    );
}

export default ReservationForm;
