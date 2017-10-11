import { ConnectionUtil } from "./connection-util";
import { Chien } from "../entities/chien";



export class DaoChien {
    private conUtil:ConnectionUtil;
    constructor() {
        this.conUtil = new ConnectionUtil();
    }

    getAllChien():Promise<Chien[]> {
        return new Promise((resolve,reject) => {
            this.conUtil.getConnection()
            .query('SELECT * FROM small_doggo', (err,rows) => {
                if(err) {
                    reject(err);
                }
                let retour:Chien[] = [];
                for(let line of rows) {
                    retour.push(new Chien(line['name'], 
                    line['race'], 
                    new Date(line['birthdate']), 
                    line['id']));
                }
                resolve(retour);
            });
        });
    }

    addChien(chien:Chien):Promise<Chien[]> {
        return new Promise((resolve,reject) => {
            this.conUtil.getConnection()
            .query('INSERT INTO small_doggo (name,race,birthdate) VALUES (?,?,?)', (err,rows) => {
                if(err) {
                    reject(err);
                }
                let retour:Chien[] = [];
                for(let line of rows) {
                    retour.push(new Chien(line['name'], 
                    line['race'], 
                    new Date(line['birthdate']), 
                    line['id']));
                }
                resolve(retour);
            });
        });
    }
}