export class E extends Error {
    constructor() {
        super('E');
        Object.setPrototypeOf(this, E.prototype);
    }
}
