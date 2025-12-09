const ERROR_TYPES = {
  NOT_FOUND: { code: 404, message: 'Ресурс не найден' },
  VALIDATION_ERROR: { code: 400, message: 'Ошибка валидации' },
  SERVER_ERROR: { code: 500, message: 'Ошибка сервера' },
  BAD_REQUEST: { code: 400, message: 'Неверный запрос' }
};

const sendError = (res, errorType, customMessage = null) => {
  const errorName = Object.keys(ERROR_TYPES).find(key => ERROR_TYPES[key] === errorType);
  
  res.status(errorType.code).json({
    success: false,
    error: {
      code: errorType.code,
      message: customMessage || errorType.message,
      type: errorName
    }
  });
};

module.exports = { ERROR_TYPES, sendError };