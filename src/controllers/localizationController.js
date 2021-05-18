const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Localization = require('../models/localization');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) =>{
    try {
        const localization = await Localization.find().populate('user');

        return res.send({ localization });
    } catch (err){
        return res.status(400).send({ error: 'Error loading localization' });
    }
});

router.get('/:localizationId', async (req, res) =>{
    try {
        const localizationId = await Localization.findById(req.params.localizationId).populate('user');

        return res.send({ localizationId });
    } catch (err){
        return res.status(400).send({ error: 'Error loading localization' });
    }
});

router.post('/', async (req, res) =>{
    try{
        const localization = await Localization.create({ ...req.body, user: req.userId});

        return res.send({ localization });
    }catch(err){
        return res.status(400).send({ error: 'Error creating new localization' });
    }
});

router.put('/:localizationId', async (req, res) =>{
    try {
        const { cep, city, state, district, address, houseNumber, complement} = req.body;
        const localization = await Localization.findByIdAndUpdate(req.params.localizationId,
        {
        cep,
        city,
        state,
        district,
        address,
        houseNumber,
        complement
        }, {new: true}); 
        await localization.save();
       
        return res.send({ localization });
    }catch (err){
        return res.status(400).send({ error: 'Error updating localization' });
    }
});

router.delete('/:localizationId', async (req, res) =>{
    try {
         await Localization.findByIdAndRemove(req.params.localizationId);

        return res.send();
    } catch (err){
        return res.status(400).send({ error: 'Error deleting localization' });
    }
});

module.exports = app => app.use('/localization', router);