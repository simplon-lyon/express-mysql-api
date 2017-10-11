import { Router } from "express";
import { DaoDog } from "../database/dao-dog";

const dao = new DaoDog();

export const routerDog = Router();

routerDog.get('/', (req,resp) => {
    dao.getAllDogs().then((dogs) => resp.json(dogs))
    .catch((error) => resp.status(500).send(error));
});

routerDog.get('/:id', (req,resp) => {
    dao.getDogById(req.params.id).then((dog) => resp.json(dog))
    .catch((error) => resp.status(500).send(error));;
});

routerDog.post('/', (req,resp)=> {
    dao.addDog(req.body).then(dog => resp.json(dog))
    .catch((error) => resp.status(500).send(error));;
});

routerDog.patch('/', (req,resp)=> {
    dao.modifyDog(req.body).then(dog => resp.json(dog))
    .catch((error) => resp.status(500).send(error));;
});

routerDog.delete('/:id', (req,resp)=> {
    dao.removeDog(req.params.id).then(dog => resp.json(dog))
    .catch((error) => resp.status(500).send(error));;
});