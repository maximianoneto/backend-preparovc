const express = require('express');
const authMiddleware = require('../middlewares/auth');

const BasicData = require('../models/basicData');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) =>{
    try {
        const basicData = await BasicData.find().populate('user');

        return res.send({ basicData });
    } catch (err){
        return res.status(400).send({ error: 'Error loading basic data' });
    }
});

router.get('/:basicDataId', async (req, res) =>{
    try {
        const basicDat = await BasicData.findById(req.params.basicDataId).populate('user');

        return res.send({ basicDat });
    } catch (err){
        return res.status(400).send({ error: 'Error loading basic data' });
    }
});

router.post('/', async (req, res) =>{
    try{
        const basicData = await BasicData.create({ ...req.body, user: req.userId});

        return res.send({ basicData });
    }catch(err){
        return res.status(400).send({ error: 'Error creating new basic data' });
    }
});

router.put('/:basicDataId', async (req, res) =>{
    try {
        const { photo, email, name, lastName, phone, github, behance, linkedin} = req.body;
        const basicData = await BasicData.findByIdAndUpdate(req.params.basicDataId,
        {
        photo,
        email,
        name,
        lastName,
        phone,
        github, 
        behance, 
        linkedin
        }, {new: true}); 
        await basicData.save();
       
        return res.send({ basicData });
    }catch (err){
        return res.status(400).send({ error: 'Error updating basic data' });
    }
});

router.delete('/:basicDataId', async (req, res) =>{
    try {
         await BasicData.findByIdAndRemove(req.params.basicDataId);

        return res.send();
    } catch (err){
        return res.status(400).send({ error: 'Error deleting basic data' });
    }
});

module.exports = app => app.use('/basicData', router);