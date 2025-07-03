export function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'Token requerido' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.isAdmin = decoded.isAdmin; // <-- Añade esto
    next();
  } catch {
    res.status(401).json({ message: 'Token inválido' });
  }
}