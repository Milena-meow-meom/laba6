const express = require('express');
const cors = require('cors'); 
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const notFoundHandler = require('./middleware/notFoundHandler');

const paintingRoutes = require('./routes/paintingRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(logger);
}

app.use('/api/paintings', paintingRoutes);

app.get('/health', (req, res) => {
  res.json({ 
    success: true, 
    message: 'Сервер работает нормально', 
    timestamp: new Date().toISOString() 
  });
});

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Сервер галереи запущен на порту ${PORT}`);
  console.log(`Режим: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Статус: http://localhost:${PORT}/health`);
  console.log(`API картин: http://localhost:${PORT}/api/paintings`);
});

