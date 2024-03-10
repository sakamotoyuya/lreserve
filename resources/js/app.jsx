// App.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import ReservationForm from './components/ReservationForm';
import ReservationsList from './components/ReservationsList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/reservations/new" element={
                    <Layout title="新しい予約">
                        <ReservationForm />
                    </Layout>
                } />
                <Route path="/reservations" element={
                    <Layout title="予約一覧">
                        <ReservationsList />
                    </Layout>
                } />
                {/* 他のルートも同様に */}
            </Routes>
        </Router>
    );
}

const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}
