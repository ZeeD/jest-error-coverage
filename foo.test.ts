import { E } from './foo';

describe('E', () => {
    it('is an exception', () => {
        expect(() => {
            throw new E();
        }).toThrow(E);
    });
});
