import { Vector } from "./Math";

enum Phases {
    RangedSeige,
    Block,
    AssignDamage,
    Attack,
}

const ATTACK = 0;
const DEFENSE = 1;

abstract class Attribute {
    private p: Phases;
    
    constructor(phase: Phases) {
        this.p = phase;
    }

    apply(phase: Phases, attackDefense: [Vector, Vector]): [Vector, Vector] {
        return this.p === phase ? this.applyInPhase(attackDefense) : attackDefense;
    }

    abstract applyInPhase(attackDefense: [Vector, Vector]): [Vector, Vector];
    description?(): string
}

class Swift extends Attribute {
    constructor() {
        super(Phases.Block);
    }

    applyInPhase(attackDefense: [Vector, Vector]): [Vector, Vector] {
        return [
            attackDefense[ATTACK].mult(2),   // Effectively increment the attack * 2 for the block phase
            attackDefense[DEFENSE]
        ];
    }
}

class Brutal extends Attribute {
    constructor() {
        super(Phases.AssignDamage);
    }

    applyInPhase(attackDefense: [Vector, Vector]): [Vector, Vector] {
        return [
            attackDefense[ATTACK].mult(attackDefense[DEFENSE].zero() ? 2 : 1),
            attackDefense[DEFENSE]
        ];
    }
}

// For now, assuming that units don't exist
class Poison extends Attribute {
    constructor() {
        super(Phases.AssignDamage);
    }


}