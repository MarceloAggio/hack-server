import express, { Request, Response } from 'express';
import { prisma } from "../config/prisma";
import authenticateJWT from '../middlewares/verify-token';

const router = express.Router();

router.post('/financial-registration', authenticateJWT, async (req: Request, res: Response) => {
    const { paymentPlan, availableIncome, paymentHistory } = req.body;

    if (!paymentPlan || !availableIncome || !paymentHistory) {
        res.status(400).json({ message: 'Dados insuficientes. Informe o plano de pagamento, renda disponível e histórico de pagamentos.' });
    }

    try {

        const totalDebt = paymentPlan.reduce((acc: number, debt: any) => acc + debt.amount, 0);
        const totalPaid = paymentHistory.reduce((acc: number, payment: any) => acc + payment.amount, 0);
        const remainingDebt = totalDebt - totalPaid;

        const monthsToClearDebt = Math.ceil(remainingDebt / availableIncome);

        res.status(200).json({
            message: 'Previsão de tempo para regularização financeira calculada com sucesso',
            totalDebt,
            totalPaid,
            remainingDebt,
            monthsToClearDebt,
            details: {
                paymentPlan,
                availableIncome,
                paymentHistory
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor ao processar os dados financeiros' });
    }
});

export default router;
