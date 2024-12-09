const express = require('express');
const router = express.Router();
const verifyToken = require('../Middleware/authMiddleware'); // Middleware de autenticação
const reservationController = require('../controllers/reservationController'); // Controlador de reservas

// Rotas de reservas
router.post('/reservations', verifyToken, reservationController.createReservation);
router.get('/reservations', verifyToken, reservationController.getReservations);
router.delete('/reservations/:id', verifyToken, reservationController.cancelReservation);

module.exports = router;
