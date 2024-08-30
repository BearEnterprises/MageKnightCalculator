import { Vector } from "./Math";
import { Damage, Phases } from "./Enums";

class Game {
    private o_vec: Vector;
    private d_vec: Vector;
    private a_vec: Vector;
    private health: number;
    private phase: Phases;

    constructor(offesnive_vec: Vector, defensive_vec: Vector, attribute_vec: Vector, health: number, current_phase: Phases) {
        this.o_vec = offesnive_vec;
        this.d_vec = defensive_vec;
        this.a_vec = attribute_vec;
        this.health = health; 
        this.phase = current_phase;
    }

    process() {
        // apply attributes relative to phase
        // if ranged/siege phase or attack phase, dot
        // if block phase, block optimally
    } 

}