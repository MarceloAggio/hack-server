import express , { Request , Response } from 'express';
import { nanoid } from 'nanoid';

const router = express.Router();

router.post('/' , async (req : Request, res : Response) => {


    try{

    }
    catch(error){

        console.error(error);
        res.status(500).json(error);

    } 
    
})

router.get('/' , async (req : Request, res : Response) => {

    try{

    }
    catch(error){
        console.error(error);
        res.status(500).json(error);
    }

})

router.patch('/:id_tenant' , async (req : Request, res : Response) => {

    try{

       

    }
    catch(error){
        console.error(error);
        res.status(500).json(error);
    }

})

router.get('/:id_tenant/:userId' , async (req : Request, res : Response) =>{


    try{

       

    }
    catch(error){

        console.log(error)
        res.status(500).json({ message : "Error : " , error })

    }

}) 

export default router;