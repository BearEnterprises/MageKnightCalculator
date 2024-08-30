export class Vector {
    private vals: number[];

    constructor(dims: number) {
        this.vals = new Array(dims);
    }

    length(): number {
        return this.vals.length;
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

    total(): number {
        return this.vals.reduce((acc: number, val: number) => {
            return acc + val;
        }, 0);
    }

    sum(vec: Vector): Vector {
        let vec_sum = new Vector(vec.length()); 
        for (let i = 0; i < vec.length(); i++) {
            vec_sum.set(i, (vec.get(i) + this.get(i)));
        }
        return vec_sum;
    }

    dot(vec: Vector): number {
        let vec_dot = new Vector(vec.length()); 
        for (let i = 0; i < vec.length(); i++) {
            vec_dot.set(i, (vec.get(i) * this.get(i)));
        }
        return vec_dot.total();
    }

    static create(vals: number[]) {
        const ret: Vector = new Vector(vals.length)
        vals.forEach((val: number, index: number) => {
            ret.vals[index] = val;
        })
        return ret;
    }
}