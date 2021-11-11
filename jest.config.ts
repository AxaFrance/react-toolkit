// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  name: 'react-toolkit',
  cacheDirectory: '.cache/jest',
  roots: ['<rootDir>/packages'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/core/css/'],
  setupFilesAfterEnv: ['<rootDir>/scripts/jest.init.ts'],
  collectCoverageFrom: [
    'packages/**/*.{js,jsx,ts,tsx}',
    '!packages/**/dist/**',
    '!**/core/css/**',
    '!packages/**/src/**/*.stories.*',
    '!packages/**/src/**/*.spec.*',
    '!packages/**/src/index.{js,ts}',
    '!packages/**/src/**/index.{js,ts}',
    '!packages/core/src/common/scss/colorsList.js',
    '!packages/all/**',
  ],
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|css|less|md)$': '<rootDir>/__mocks__/styleMock.js',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
export default config;
