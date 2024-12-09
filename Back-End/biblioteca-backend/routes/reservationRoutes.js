const express = require('express');
const router = express.Router();
const verifyToken = require('../Middleware/authMiddleware'); // Middleware de autenticação
const reservationController = require('../controllers/reservationController'); // Controlador de reservas

// Rotas de reservas
// Rota para criar uma reserva
router.post('/api/reservations', verifyToken, reservationController.createReservation);

// Rota para listar todas as reservas do usuário autenticado
router.get('/api/reservations', verifyToken, reservationController.getReservations);

// Rota para cancelar uma reserva
router.patch('/api/reservations/:id/cancel', verifyToken, reservationController.cancelReservation);


module.exports = router;
