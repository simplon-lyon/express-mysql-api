
/*
    On peut définir une classe générique en mettant
    un placeholder entre chevron. Ce placeholder 
    représente une classe réelle qui viendra le remplacer
    partout dans la classe. 
*/
export class FirstGeneric<T> {
    constructor(protected prop:T){}
    /**
     * Cette méthode qui attend un paramètre de type T
     * deviendra donc une méthode qui attend un Chien
     * si on instancie la classe new FirstGeneric<Chien>()
     * 
     */
    show(parametre:T) {
        console.log(parametre);
    }
    /**
     * Cette méthode qui renvoie un tableau de T 
     * renverra un tableau de Chien si on l'instancie 
     * en new FirstGeneric<Chien>() 
     */
    getEntities():T[] {
        let tableau = [];
        tableau.push(this.prop);
        tableau.push(this.prop);
        tableau.push(this.prop);
        return tableau;
    }

}

/**
 * Une classe peut hériter d'une classe généric en lui
 * spécifiant un type, ainsi, elle héritera de toutes
 * les méthodes de la générique, mais typé comme on lui
 * à indiquer.
 * On peut donc définir dans la générique des méthodes
 * communes à tous les types et définir des méthodes spécifiques
 * à un certain type dans la classe enfant.
 */
export class FirstString extends FirstGeneric<string> {
    captilize():string {
        return this.prop.toUpperCase();
    }
}

let firstString = new FirstString('bloup');
firstString.getEntities();
