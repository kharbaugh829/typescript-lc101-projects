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

    // currentMassKg(): number{
    //     this.sumMass 
    //     return sum;
    // }

}