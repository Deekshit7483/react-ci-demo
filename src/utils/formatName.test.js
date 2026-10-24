import { describe, it, expect } from 'vitest'
import { formatName } from './formatName'

describe('formatName', () => {
  it('returns the trimmed name', () => {
    expect(formatName({ name: ' Leanne Graham ' })).toBe('Leanne Graham')
  })

  it('handles a missing user', () => {
    expect(formatName(null)).toBe('Unknown user')
  })
})
