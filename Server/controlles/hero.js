const mongoose = require('mongoose');
const Hero = mongoose.model('Hero');
const multer = require('multer');


function getHeroes () {
    return async (req, res) => {
        const perPage = 5;
        const { params: { page } } = req;
        const countHeroes = await Hero.find({}).count();
        const heroes = await Hero.find({}).skip((perPage * page) - perPage).limit(perPage);
        return res.json({ heroes, countHeroes })
    }
}

function getHero () {
    return async (req, res) => {
        const { params: { id } } = req;
        const hero = await Hero.findOne({_id:id});
        return res.json({ hero })
    }
}

function createHero () {
    return async (req, res) => {
        try {
            const {hero} = req.body;
            const newHero = await Hero(hero).save();
            return  res.json({ newHero });
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

function deleteHero () {
    return async (req, res) => {
        const { params: { id } } = req;
        const hero = await Hero.findByIdAndRemove(id);
        return res.json({ hero });
    }
}

function updateHero () {
    return async (req, res) => {
        const { body } = req;
        console.log('333',body);
        const hero = await Hero.update({_id: body.id}, {...body});
        return res.json({ hero });
    }
}

module.exports = {
    getHeroes,
    createHero,
    deleteHero,
    updateHero,
    getHero
};
