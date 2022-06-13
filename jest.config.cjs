/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    collectCoverage: true,
    globals: {
        'ts-jest': {
            tsconfig: {
                "target": "ES2015"
            }
        }
    }
};
