module.exports = {
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/'],
    coveragePathIgnorePatterns: ['/node_modules/'],
    "roots": [
        "<rootDir>/src"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
    ],
    "verbose": true,
    "testTimeout": 50000,
}