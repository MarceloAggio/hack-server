import express, { Request, Response } from 'express';
import { prisma } from "../config/prisma";
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';

const router = express.Router();

const SECRET_KEY = process.env.SECRET_KEY;

router.post('/register', async (req: Request, res: Response) => {
    const { email, password, name , cpf , phoneNumber } = req.body;

    if (!email || !password || !name || !cpf || !phoneNumber) {
        res.status(400).json({ message: "Email, senha e nome são requeridos" });
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
                name : name,
                cpf : cpf,
                phoneNumber : phoneNumber,
                status: "enable"
            }
        });

        const token = jwt.sign(
            { email: newUser.email, id: newUser.id },
            SECRET_KEY as string,
            { expiresIn: '1m' }
        );

        res.status(201).json({ message: "Usuário registrado com sucesso", token });

    } catch (error) {

        console.error(error);
        res.status(500).json({ message: "Erro ao registrar o usuário" });

    }
});


router.get('/login' , async (req : Request, res : Response) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(401).json({ message: "Usuario e senha são requeridos" });
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
            res.status(404).json({ message: "Usuario não encontrado ou senha incorreta" });
            return;
        }

        if (findUser.status !== "enable") {
            res.status(500).json({ message: "Usuario inativo" });
            return;
        }

        const token = jwt.sign(
            { email: email, id: findUser.id },
            SECRET_KEY,
            { expiresIn: '24h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }

})

router.put('/user/alter-password' , async (req : Request, res : Response) => {

    const { email , password , newPassword } = req.body;

    if(!email || !password){
        res.status(401).json({message : "Não Autorizado por falta de email ou senha"})
        return;
    }

    try{

        const findUser = await prisma.user.findFirst({
            where : {
                 email : email
            },
            select : {
                password : true,
            }
        })

        if(!findUser){
            res.status(404).json({message : "Usuario não encontrado"})
        }

        const alterPassword = await prisma.user.update({
           where : {
                email : email,
           },
           data : {
                password : newPassword
           }
        })

        res.status(200).json({message : "Senha alterada com sucesso"})

    }
    catch(error){
        console.error(error);
        res.status(500).json(error);
    }

})

export default router;