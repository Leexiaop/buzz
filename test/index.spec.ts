import { expect, test } from 'vitest';
import { add } from '../src/add';

test('add, 输入number"1, 3" 返回number"4"', () => {
	expect(add(1, 3)).toBe(4);
});
