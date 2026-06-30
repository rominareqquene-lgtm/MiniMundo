const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ message: 'Se requiere un token de autenticación.' });
  }

  try {
    // Soportar el formato "Bearer <token>" o solo "<token>"
    const tokenParts = authHeader.split(' ');
    const token = tokenParts.length === 2 ? tokenParts[1] : tokenParts[0];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Se guarda la data del token en el request
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token no válido o expirado.' });
  }
};

module.exports = {
  verifyToken
};
