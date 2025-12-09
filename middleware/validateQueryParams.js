const { ERROR_TYPES, sendError } = require('../utils/errors');

// Middleware для валидации числовых параметров запроса
const validateQueryParams = (req, res, next) => {
    const { page, limit, minYear, maxYear, minPrice, maxPrice } = req.query;
    
    // Параметры для валидации
    const paramsToValidate = [
        { key: 'page', value: page },
        { key: 'limit', value: limit },
        { key: 'minYear', value: minYear },
        { key: 'maxYear', value: maxYear },
        { key: 'minPrice', value: minPrice },
        { key: 'maxPrice', value: maxPrice }
    ];

    // Проверка каждого параметра на число
    for (const param of paramsToValidate) {
        if (param.value && isNaN(parseInt(param.value))) {
            return sendError(res, ERROR_TYPES.VALIDATION_ERROR, 
                `Параметр '${param.key}' должен быть числом`);
        }
    }

    // Валидация диапазонов
    if (minYear && maxYear && parseInt(minYear) > parseInt(maxYear)) {
        return sendError(res, ERROR_TYPES.VALIDATION_ERROR, 
            `minYear (${minYear}) не может быть больше maxYear (${maxYear})`);
    }

    if (minPrice && maxPrice && parseInt(minPrice) > parseInt(maxPrice)) {
        return sendError(res, ERROR_TYPES.VALIDATION_ERROR, 
            `minPrice (${minPrice}) не может быть больше maxPrice (${maxPrice})`);
    }

    next();
};

module.exports = validateQueryParams;