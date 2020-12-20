const express = require('express');

const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp,
    experiment
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router.route('/:id')
    .post(experiment)
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);


module.exports = router;