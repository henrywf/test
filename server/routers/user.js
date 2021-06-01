const express = require('express');
const router = new express.Router();
const User = require('../models/user');

router.post('/user', async (req, res) => {
    const userItem = req.body;
    const user = new User(userItem);

    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(400).send();
    }
});

router.get('/user/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findById(_id);

        if (!user) {
            return res.status(400).send({
                error: 'User does not exist'
            });
        }

        res.send(user);
    } catch (err) {
        res.status(500).send();
    }
});

router.delete('/user/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const user = await User.findOneAndDelete({
            _id
        });
        if (!user) {
            return res.status(400).send({
                error: 'User does not exist'
            });
        }

        res.send();
    } catch (err) {
        res.status(500).send();
    }
});