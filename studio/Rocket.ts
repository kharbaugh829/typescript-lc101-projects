import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket implements Payload{
    name: string;
    massKg: number;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name, totalCapacityKg){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[]): number{
        let sum: number = 0;
        for (let i = 0; i < items.length; i++){
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg(): number{
        let sum: number = 0;
        for (let i = 0; i < this.astronauts.length; i++){
            sum += this.astronauts[i].massKg;
        }
        for (let i = 0; i < this.astronauts.length; i++){
            sum += this.cargoItems[i].massKg;
        }
        this.sumMass += sum  ;
        return sum;
    }
    
    canAdd(item: Payload): boolean {
        if (this.currentMassKg(this.sumMass) + item.massKg <= this.totalCapacityKg){
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd() === true){
            cargo.push(this.cargoItems);
            return true;
        }
        else if (this.canAdd() === false){
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd() === true){
            astronaut.push(this.astronauts);
            return true;
        }
        else if (this.canAdd() === false){
            return false;
        }
    }
}