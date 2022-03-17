module.exports = {
  roots: ["<rootDir>"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/styles.mock.js",
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styles.mock.js",
  },
  coverageReporters: ["json-summary", "text-summary", "lcov"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "jest tests",
        outputDirectory: "coverage",
        outputName: "junit.xml",
      },
    ],
  ],
};
