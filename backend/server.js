require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./models');
const authRoutes = require('./routes/auth');
const childRoutes = require('./routes/childRoutes');
const progressRoutes = require('./routes/progressRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/children', childRoutes);
app.use('/api/progress', progressRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Avoid database connection on simple required modules during tests if possible, but for MVP we sync.
if (process.env.NODE_ENV !== 'test_compile_only') {
  db.sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }).catch(err => {
    console.error("Failed to sync database:", err);
  });
} else {
  // Just export app for testing
  module.exports = app;
}
