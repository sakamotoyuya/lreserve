import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ReservationsList() {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get('/api/reservations');
                setReservations(response.data);
            } catch (error) {
                console.error('There was an error fetching the reservations:', error);
            }
        };

        fetchReservations();
    }, []);

    return (
        <div>
            <ul>
                {reservations.map(reservation => (
                    <li key={reservation.id}>{reservation.user_name} - {reservation.reservation_date}</li>
                ))}
            </ul>
        </div>
    );
}

export default ReservationsList;
