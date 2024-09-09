module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/node_modules/**",
        "!**/coverage/**",
        "!**/jest.config.js"
    ],
    coverageReporters: [
        "json",
        "text"
    ],
    coverageDirectory: "coverage",
    "coverageThreshold": {
        "branches": 100,
        "functions": 100,
        "lines": 100
    }
};
