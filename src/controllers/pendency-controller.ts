import express, { Request, Response } from 'express';
import authenticateJWT from '../middlewares/verify-token';

const router = express.Router();

const pendingItems = [
    { id: 1, name: 'Empréstimo Bancário', amount: 1500, installments: 12 },
    { id: 2, name: 'Financiamento Veicular', amount: 30000, installments: 48 },
    { id: 3, name: 'Cartão de Crédito', amount: 5000, installments: 6 },
    { id: 4, name: 'Empréstimo Pessoal', amount: 8000, installments: 24 },
    { id: 5, name: 'Consórcio de Imóvel', amount: 100000, installments: 120 },
    { id: 6, name: 'Dívida de Educação', amount: 20000, installments: 36 },
    { id: 7, name: 'Reforma Residencial', amount: 15000, installments: 18 },
    { id: 8, name: 'Dívida Médica', amount: 3000, installments: 10 }
];

router.get('/user/pendency', authenticateJWT, (req: Request, res: Response) => {

    try {

        res.status(200).json({
            message: 'Lista de pendências recuperada com sucesso',
            pendingItems
        });

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: 'Erro ao recuperar a lista de pendências' });

    }
});

const slips = [
    { id: 1, pendingItemId: 1, name: 'Boleto 1 - Empréstimo Bancário', amount: 125, dueDate: '2024-11-15' },
    { id: 2, pendingItemId: 1, name: 'Boleto 2 - Empréstimo Bancário', amount: 125, dueDate: '2024-12-15' },
    { id: 3, pendingItemId: 2, name: 'Boleto 1 - Financiamento Veicular', amount: 625, dueDate: '2024-11-20' },
    { id: 4, pendingItemId: 3, name: 'Boleto 1 - Cartão de Crédito', amount: 834, dueDate: '2024-11-30' },
    { id: 5, pendingItemId: 3, name: 'Boleto 2 - Cartão de Crédito', amount: 834, dueDate: '2024-12-30' },
    { id: 6, pendingItemId: 4, name: 'Boleto 1 - Empréstimo Pessoal', amount: 333, dueDate: '2024-11-25' }
];

router.get('/user/pendency/:id/slips', authenticateJWT, (req: Request, res: Response) => {
    const pendingItemId = parseInt(req.params.id, 10);

    if (isNaN(pendingItemId)) {
        res.status(400).json({ message: 'ID inválido' });
    }

    const filteredBoletos = slips.filter(boleto => boleto.pendingItemId === pendingItemId);

    if (filteredBoletos.length === 0) {
        res.status(404).json({ message: 'Nenhum boleto encontrado para o ID da pendência fornecido' });
    }

    res.status(200).json({  
        message: 'Boletos recuperados com sucesso',
        boletos: filteredBoletos
    });
});

export default router;
