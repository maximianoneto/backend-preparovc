const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const localizationSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },

    cep:{
        type: Number,
        require: true,
    },

    city:{
        type: String,
        required: true,
    },

    state:{
        type: String,
        required: true, 
    },
    
    district:{
        type: String,
        required: true,
    },
    
    address:{
        type: String,
        required: true, 
    },
  
    houseNumber:{
        type: Number,
        required: true, 
    },

    complement:{
        type: String,
        required: false,
    },
});

const localization = mongoose.model('localization', localizationSchema);

module.exports = localization;