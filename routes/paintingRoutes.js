const express = require('express');
const router = express.Router();

// Импортируем контроллеры
const {
    getPaintings,
    getPaintingById,
    getGalleryInfo,
    getFeaturedPaintings,
    getPaintingsByGenre
} = require('../controlles/paintingController');

const validateQueryParams = require('../middleware/validateQueryParams');

// Подключаем контроллеры к маршрутам
router.get('/', validateQueryParams, getPaintings);
router.get('/:id', getPaintingById);
router.get('/info/count', getGalleryInfo);
router.get('/info/featured', getFeaturedPaintings);
router.get('/info/genres/:genre', getPaintingsByGenre);

module.exports = router;
