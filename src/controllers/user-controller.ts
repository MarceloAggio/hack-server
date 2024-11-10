import express, { Request, Response } from 'express';
import { prisma } from "../config/prisma";
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
import authenticateJWT from '../middlewares/verify-token';


const router = express.Router();

const SECRET_KEY = process.env.SECRET_KEY;

router.post('/register-user', async (req: Request, res: Response) => {
    const { email, password, name, cpf, phoneNumber , fixedIncome} = req.body;

    if (!email || !password || !name || !cpf || !phoneNumber) {
        res.status(400).json({ message: "Todos os campos são requeridos" });
        return;
    }

    try {
        const existingUser = await prisma.user.findFirst({
            where: {
                email: email
            }
        });

        if (existingUser) {
            res.status(409).json({ message: "Usuário já registrado" });
            return;
        }

        const newUser = await prisma.user.create({
            data: {
                id: nanoid(),
                email: email,
                password: password,
                name: name,
                fixedIncome : fixedIncome,
                cpf: cpf,
                phoneNumber: phoneNumber,
                status: "enable"
            }
        });

        const currentMonth = new Date();
        await prisma.monthlyIncome.create({
            data: {
                id: nanoid(),
                userId: newUser.id,
                month: currentMonth,
                totalIncome: parseFloat(fixedIncome)
            }
        });

        const token = jwt.sign(
            { email: newUser.email, id: newUser.id },
            SECRET_KEY as string,
            { expiresIn: '24h' }
        );

        res.status(201).json({ message: "Usuário registrado com sucesso", token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao registrar o usuário" });
    }
});

router.put("/user/alter" , (req : Request , res : Response)=>{

})

router.get('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(401).json({ message: "Usuário e senha são requeridos" });
        return;
    }

    try {
        const findUser = await prisma.user.findFirst({
            where: {
                email: email,
                password: password
            },
            select: {
                status: true,
                id: true
            }
        });

        if (!findUser) {
            res.status(404).json({ message: "Usuário não encontrado ou senha incorreta" });
            return;
        }

        if (findUser.status !== "enable") {
            res.status(500).json({ message: "Usuário inativo" });
            return;
        }

        const token = jwt.sign(
            { email: email, id: findUser.id },
            SECRET_KEY as string,
            { expiresIn: '24h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
});

router.put('/user/alter-password', async (req: Request, res: Response) => {
    const { email, password, newPassword } = req.body;

    if (!email || !password) {
        res.status(401).json({ message: "Não autorizado por falta de email ou senha" });
        return;
    }

    try {
        const findUser = await prisma.user.findFirst({
            where: {
                email: email
            },
            select: {
                password: true,
            }
        });

        if (!findUser) {
            res.status(404).json({ message: "Usuário não encontrado" });
            return;
        }

        const alterPassword = await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                password: newPassword
            }
        });

        res.status(200).json({ message: "Senha alterada com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});

router.put('/user/alter-fixed-income', authenticateJWT, async (req: Request, res: Response) => {
    const { id } = req.user as { id: string };
    const { newFixedIncome } = req.body;

    if (!newFixedIncome) {
        res.status(400).json({ message: "A nova renda fixa deve ser fornecida." });
        return;
    }

    try {
        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                fixedIncome: parseFloat(newFixedIncome)
            }
        });

        res.status(200).json({ message: "Renda fixa alterada com sucesso." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno do servidor ao alterar a renda fixa." });
    }
});


router.put('/user/alter-phone', authenticateJWT, async (req: Request, res: Response) => {
    const { id } = req.user as { id: string };
    const { newPhoneNumber } = req.body;

    if (!newPhoneNumber) {
        res.status(400).json({ message: "O novo número de telefone deve ser fornecido." });
        return;
    }

    try {
        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                phoneNumber: newPhoneNumber
            }
        });

        res.status(200).json({ message: "Número de telefone alterado com sucesso." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno do servidor ao alterar o número de telefone." });
    }
});


router.put('/user/alter-name', authenticateJWT, async (req: Request, res: Response) => {
    const { id } = req.user as { id: string };
    const { newName } = req.body;

    if (!newName) {
        res.status(400).json({ message: "O novo nome deve ser fornecido." });
        return;
    }

    try {
        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: newName
            }
        });

        res.status(200).json({ message: "Nome alterado com sucesso." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno do servidor ao alterar o nome." });
    }
});

export default router;
