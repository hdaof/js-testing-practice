import { expect, it } from 'vitest'
import { generateToken, generateTokenPromise } from './async-example'

it('with callback, should generate a token value', (done) => {
  const testUserEmail = 'test@test.com'

  generateToken(testUserEmail, (err, token) => {
    try {
      expect(token).toBeDefined()
      // expect(token).toBe(123) // purpose fail. token should be string.
      done()
    } catch (err) {
      done(err)
    }
  })
})

it('with promise, should generate a token value', () => {
  const testUserEmail = 'test@test.com'

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined()
  // return expect(generateTokenPromise(testUserEmail)).resolves.toBe(2) // purpose fail. token should be string.
})

it('async / await, should generate a token value', async () => {
  const testUserEmail = 'test@test.com'

  const token = await generateTokenPromise(testUserEmail)

  expect(token).toBeDefined()
  // expect(token).toBe(123) // purpose fail. token should be string.
})
