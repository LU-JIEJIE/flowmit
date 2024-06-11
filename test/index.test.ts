import process from 'node:process'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import jiti from 'jiti'
import { findUp } from 'find-up'
import { findUpInGitRootDir, tryRequire } from '../src/utils'

describe.skip('test', () => {
  it('should work', () => {
    function tryRequire(id: string) {
      const _require = jiti(process.cwd(), { interopDefault: true, esmResolve: true })
      try {
        return _require(id)
      }
      catch (error) {
        return {}
      }
    }

    const config = tryRequire('./.flowmitrc')
    expect(config).toMatchInlineSnapshot(`{}`)
  })
})

describe('find up flowmit.config.ts', () => {
  it('should work', async () => {
    const configPath = await findUpInGitRootDir(['flowmit.config.ts', 'flowmit.config.js'])
    expect(configPath).toMatchInlineSnapshot(``)
  })
})
