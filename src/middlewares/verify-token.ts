import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY as string;

const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(401).json({ message: 'Token não fornecido. Realize o login.' });
        return;
    }

    const token = authHeader.split(' ')[1]; 

    if (!token) {
        res.status(401).json({ message: 'Formato do token inválido. Realize o login.' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        if (error instanceof jwt.TokenExpiredError) {
            res.status(401).json({ message: 'Token expirado. Realize o login novamente.' });
        } else if (error instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ message: 'Token inválido. Realize o login.' });
        } else {
            res.status(500).json({ message: 'Erro ao verificar o token.' });
        }
    }
};

export default authenticateJWT;
