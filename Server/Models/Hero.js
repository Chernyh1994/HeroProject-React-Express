const mongoose = require('mongoose');

const { Schema } = mongoose;

const HeroSchema = new Schema({
    nickname: String,
    real_name: String,
    origin_description: String,
    superpowers: String,
    catch_phrase: String,
    dateCreated: {
        type: Date,
        default: new Date()
    },
    image: String
});

module.exports = mongoose.model('Hero', HeroSchema);
