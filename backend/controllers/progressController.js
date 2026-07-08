const { Progress } = require('../models');

const getProgress = async (req, res) => {
  try {
    const { childId } = req.params;
    const progress = await Progress.findAll({ where: { childId } });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener progreso', error });
  }
};

const saveProgress = async (req, res) => {
  try {
    const { childId, activityId, starsEarned, score } = req.body;
    const progress = await Progress.create({
      childId,
      activityId,
      starsEarned,
      score,
      completedAt: new Date()
    });
    res.status(201).json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar progreso', error });
  }
};

module.exports = {
  getProgress,
  saveProgress
};
