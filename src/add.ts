/**
 * @name 计算任意俩个数的和
 * @group 数学
 * @param num1 要求是一个number, 必传
 * @param num2 要求是一个number, 必传
 * @returns (number) 返回俩个数相加后的结果
 * @example
 * ```ts
 * console.log(add(3, 4)); // 7
 * ```
 */

export const add = (num1: number, num2: number): number => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('请正确传入参数')
    }

    return 0
};
