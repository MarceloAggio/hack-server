import express, { Request, Response } from 'express';
import { prisma } from "../config/prisma";
import authenticateJWT from '../middlewares/verify-token';

const router = express.Router();

router.get('/user/score', authenticateJWT, async (req: Request, res: Response) => {
    try {

        if (!req.user) {
            res.status(401).json({ message: 'Usuário não autenticado' });
        }

        const randomScore = Math.floor(Math.random() * 1001);

        res.status(200).json({
            message: 'Score',
            user: req.user,
            score: randomScore
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
});

export default router;
