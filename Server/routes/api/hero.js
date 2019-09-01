const router = require('express').Router();
const { HeroController } = require('../../controlles');

/*get posts*/
router.get('/:page', HeroController.getHeroes());

/*create post*/
router.post('/hero', HeroController.createHero());

/*get single post*/
router.get('/hero/:id', HeroController.getHero());

/*delete post*/
router.delete('/hero/:id', HeroController.deleteHero());

/*edit post*/
router.post('/hero/update', HeroController.updateHero());

module.exports = router;
