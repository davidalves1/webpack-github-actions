module.exports = {
  clearMocks: true,
  preset: 'ts-jest',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverage: false,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  collectCoverageFrom: [
    'src/**/*.([j|t]s?(x))',
    '!src/main.ts'
  ],
  coverageReporters: ["json", "html"],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85
    }
  },
  maxWorkers: "50%",
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  testPathIgnorePatterns: [
      'src/main.ts',
      '.*/node_modules',
      '.*/public',
      '.*/dist',
  ],
  resetMocks: true,
  transformIgnorePatterns: [
    "/node_modules/",
  ],
};
