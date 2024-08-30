enum Damage {
    Ranged, // 0
    Seige,  // 1
    Melee,  // 2
};

export class Vector {
    private vals: number[];

    constructor(dims: number) {
        this.vals = new Array(dims);
    }

    set(i: number, val: number) {
        if (i < 0 || i >= this.vals.length) {
            throw new Error("Invalid provided index");
        }
        this.vals[i] = val;
    }

    get(i: number) {
        if (i < 0 || i >= this.vals.length) {
            throw new Error("Invalid provided index");
        }
        return this.vals[i];
    }

    sum(): number {
        return this.vals.reduce((acc: number, val: number) => {
            return acc + val;
        }, 0);
    }

    static create(vals: number[]) {
        const ret: Vector = new Vector(vals.length)
        vals.forEach((val: number, index: number) => {
            ret.vals[index] = val;
        })
        return ret;
    }
}