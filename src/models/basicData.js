const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const basicDataSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    
    photo:{
        type: String,
        require: false,
    },

    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },

    name:{
        type: String,
        required: true,
        select: true, 
    },
    
    lastName:{
        type: String,
        required: true,
        select: true, 
    },
    
    phone:{
        type: String,
        required: true,
        select: true, 
    },

    github:{
        type: String,
        required: false,
        select: true, 
    },

    behance:{
        type: String,
        required: false,
        select: true, 
    },

    linkedin:{
        type: String,
        required: false,
        select: true, 
    },
 
});

const basicData = mongoose.model('basicData', basicDataSchema);

module.exports = basicData;