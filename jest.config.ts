import type { Config } from 'jest';
import createJestConfig from 'next/jest.js';

module.exports = createJestConfig({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/*.{js,jsx,ts,tsx}',
        '<rootDir>/src/pages/*.{js,jsx,ts,tsx}',
        '!<rootDir>/src/pages/api/*.{js,jsx,ts,tsx}',
        '!<rootDir>/src/*/.type.{js,jsx,ts,tsx}',
        '!<rootDir>/src/pages/_app.tsx',
        '!<rootDir>/src/pages/_document.tsx',
    ],
    // Add more setup options before each test is run
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(config);
// module.exports = config;
