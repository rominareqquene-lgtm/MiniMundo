const { Child } = require('../models');

const getChildren = async (req, res) => {
  try {
    const children = await Child.findAll({ where: { userId: req.user.id } });
    res.json(children);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los perfiles', error });
  }
};

const createChild = async (req, res) => {
  try {
    const { name, age, avatar } = req.body;
    const child = await Child.create({
      userId: req.user.id,
      name,
      age,
      avatar
    });
    res.status(201).json(child);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear perfil de niño', error });
  }
};

module.exports = {
  getChildren,
  createChild
};
