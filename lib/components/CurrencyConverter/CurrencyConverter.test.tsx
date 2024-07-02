import { expect, test } from 'vitest'
import { calculateReceiveAmount } from './index'


test('check calculateRecieveAmount()', () => {
    expect( calculateReceiveAmount(10,2) ).toStrictEqual(20);
    expect( calculateReceiveAmount(10.33333,2) ).toStrictEqual(20.67);
})
