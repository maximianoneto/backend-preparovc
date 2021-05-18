const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({

    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },

    password:{
        type: String,
        required: true,
        select: false, 
    },

    localization:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Localization',
    },

    basicData:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'basicData',
        require: true,
    },

    createdAt:{
        type: Date,
        default: Date.now,
    },    
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
}); 

const User = mongoose.model('User', UserSchema);

module.exports = User;