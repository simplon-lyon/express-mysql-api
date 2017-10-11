

export class FirstGeneric<T> {
    constructor(protected prop:T){}

    show(parametre:T) {
        console.log(parametre);
    }

    getEntities():T[] {
        let tableau = [];
        tableau.push(this.prop);
        tableau.push(this.prop);
        tableau.push(this.prop);
        return tableau;
    }

}


export class FirstString extends FirstGeneric<string> {
    captilize():string {
        return this.prop.toUpperCase();
    }
}

let firstString = new FirstString('bloup');
firstString.getEntities();
