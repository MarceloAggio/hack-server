import express, { Request, Response } from 'express';
import { prisma } from "../config/prisma";
import authenticateJWT from '../middlewares/verify-token';
import { nanoid } from 'nanoid';

const router = express.Router();

router.post('/financial-registration', authenticateJWT, async (req: Request, res: Response) => {
    const userId = (req.user as { id: string }).id;

    if (!userId) {
        res.status(401).json({ message: 'Usuário não autenticado.' });
        return;
    }

    console.log('User ID:', userId);

    const { type, title, amount, category } = req.body;

    if (!type || !title || !amount || !category) {
        res.status(400).json({ message: 'Todos os campos são obrigatórios (tipo, título, valor, categoria).' });
        return;
    }

    if (type !== 'GANHO' && type !== 'DESPESA') {
        res.status(400).json({ message: 'O tipo de entrada deve ser GANHO ou DESPESA.' });
        return;
    }

    const validCategories = ['ALIMENTACAO', 'TRANSPORTE', 'LAZER', 'SAUDE', 'EDUCACAO', 'INVESTIMENTO', 'OUTROS'];
    if (!validCategories.includes(category)) {
        res.status(400).json({ message: 'Categoria inválida. Use uma das seguintes: ' + validCategories.join(', ') });
        return;
    }

    try {
        const entry = await prisma.entry.create({
            data: {
                id: nanoid(),
                userId: userId,
                type: type,
                title: title,
                amount: parseFloat(amount),
                category: category
            }
        });

        res.status(201).json({
            message: 'Entrada registrada com sucesso',
            entry
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor ao registrar a entrada' });
    }
});


export default router;
