import express, { Request, Response } from 'express';
import { prisma } from "../config/prisma";
import authenticateJWT from '../middlewares/verify-token';
import { nanoid } from 'nanoid';

const router = express.Router();

router.post('/action-plan', authenticateJWT, async (req: Request, res: Response) => {
    const { id } = req.user as { id: string };
    const {
        priorityList,
        monthlyPaymentSuggestions,
        estimatedPayoffTime,
        negotiationTips,
        monthlyBudget,
        alerts,
        additionalTips
    } = req.body;

    if (!priorityList || !monthlyPaymentSuggestions || !estimatedPayoffTime || !negotiationTips || !monthlyBudget || !alerts || !additionalTips) {
        res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
        return;
    }

    try {
        const newActionPlan = await prisma.actionPlan.create({
            data: {
                id: nanoid(),
                userId: id,
                priorityList: priorityList,
                monthlyPaymentSuggestions: monthlyPaymentSuggestions,
                estimatedPayoffTime: estimatedPayoffTime,
                negotiationTips: negotiationTips,
                monthlyBudget: monthlyBudget,
                alerts: alerts,
                additionalTips: additionalTips
            }
        });

        res.status(201).json({
            message: 'Plano de ação criado com sucesso',
            actionPlan: newActionPlan
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor ao criar o plano de ação' });
    }
});

router.get('/action-plan', authenticateJWT, async (req: Request, res: Response) => {
    const { id } = req.user as { id: string }; 

    try {
        const actionPlans = await prisma.actionPlan.findMany({
            where: {
                userId: id
            }
        });

        if (actionPlans.length === 0) {
            res.status(404).json({ message: 'Nenhum plano de ação encontrado para o usuário.' });
            return;
        }

        res.status(200).json({
            message: 'Planos de ação encontrados com sucesso',
            actionPlans: actionPlans
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor ao buscar os planos de ação' });
    }
});

export default router;
