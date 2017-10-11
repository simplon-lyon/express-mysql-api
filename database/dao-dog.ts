import { Dog } from "../entities/dog";
import { createConnection, Repository, getConnection } from "typeorm";



export class DaoDog {

    private getRepo(): Repository<Dog> {
        return getConnection().getRepository(Dog);
            
    }
    getAllDogs(): Promise<Dog[]> {
        return this.getRepo().find();
    }
    getDogById(id: number): Promise<Dog> {
        return this.getRepo().findOneById(id);
    }
    addDog(dog: Dog): Promise<Dog> {
        return this.getRepo().save(dog);
    }
    removeDog(id:number): Promise<any> {
        return this.getRepo().removeById(id);
    }
    modifyDog(dog: Dog): Promise<void> {
        return this.getRepo().updateById(dog.id,dog);
    }

}