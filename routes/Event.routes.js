const router = require('express').Router();
// const bcrypt = require("bcryptjs");
ProductModel;

const EventsModel = require('../models/Event.model');
const isAdmin = require('../middlewares/isAdmin');
const isAuthenticated = require('../middlewares/isAuthenticated');
const attachCurrentUser = require('../middlewares/attachCurrentUser');

//Criar um novo evento
router.post(
    '/Eventos',
    isAuthenticated,
    attachCurrentUser,
    isAdmin,
    async (req, res, next) => {
        try {
            const event = await EventsModel.create(req.body);
            return res.status(201).json(event);
        } catch (err) {
            return next(err);
        }
    }
);

//Ler a lista de eventos
router.get('/Eventos', async (req, res, next) => {
    try {
        const event = await EventsModel.find();
        return res.status(201).json(event);
    } catch (err) {
        return next(err);
    }
});

//Ler evento
router.get('/Eventos/:id', async (req, res, next) => {
    try {
        const event = await EventsModel.findOne({ _id: req.params.id });
        if (!event) {
            return res.status(404).json({ msg: 'Evento não localizado' });
        }
        return res.status(201).json(event);
    } catch (err) {
        return next(err);
    }
});

// Atualizar

router.patch(
    '/Eventos/:id',
    isAuthenticated,
    attachCurrentUser,
    isAdmin,
    async (req, res, next) => {
        try {
            const event = await EventsModel.findOneAndUpdate(
                { _id: req.params.id },
                { $set: { ...req.body } },
                { new: true, runValidators: true }
            );

            if (!event) {
                return res.status(404).json({ msg: 'Evento não localizado' });
            }

            return res.status(200).json(event);
        } catch (err) {
            return next(err);
        }
    }
);

// Delete

router.delete(
    '/Eventos/:id',
    isAuthenticated,
    attachCurrentUser,
    isAdmin,
    async (req, res, next) => {
        try {
            const event = await EventsModel.findOne({ _id: req.params.id });
            if (!event) {
                return res.status(404).json({ msg: 'Evento não localizado' });
            }
            await event.remove();
            return res.status(200).json({});
        } catch (err) {
            return next(err);
        }
        z;
    }
);

module.exports = router;
