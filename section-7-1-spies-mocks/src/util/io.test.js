import { it, expect, vi } from 'vitest'
import { promises as fs } from 'fs'
import writeData from './io'

vi.mock('fs')
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => {
        return args[args.length - 1]
      }
    }
  }
})

it('should execute the writeFile method', () => {
  const testData = 'Test data'
  const testFileName = 'test.txt'

  writeData(testData, testFileName)

  // return expect(writeData(testData, testFileName)).resolves.toBeUndefined()
  // expect(fs.writeFile).toBeCalled()
  expect(fs.writeFile).toBeCalledWith(testFileName, testData)
})

it('should return a promise that resolved to no value if called correctly', () => {
  const testData = 'Test data'
  const testFileName = 'test.txt'

  writeData(testData, testFileName)

  return expect(writeData(testData, testFileName)).resolves.toBeUndefined()
  // expect(fs.writeFile).toBeCalled()
  // expect(fs.writeFile).toBeCalledWith(testFileName, testData)
})
