/**
 * 计算俩个正整数相乘
 * @group 数学
 * @param {string} a 
 * @param {string} b 
 * @returns {string} 返回相乘后的积字符串
 * @example
 * ```ts
 * console.log(multiplication('2', '3'))    //  '6'
 * ```
 * @remark 当前方法不支持负数的相乘
 */
export const multiplication = (a: string, b: string): string => {
    const reg = /^[0-9]+$/;
    if (!reg.test(a) || !reg.test(b)) {
        throw new Error("参数错啦！")
    }
	if (!a || !b || a === '0' || b === '0') return '0';
    const result = [];
    const str1 = a.split("").reverse(); 
    const str2 = b.split("").reverse();
    for(let i = 0;i < str1.length;i++)
        for(let j = 0;j < str2.length;j++)
            result[i + j] = 0;
    for(let i = 0;i < str1.length;i++)
        for(let j = 0;j < str2.length;j++)
            result[i + j] += parseInt(str1[i]) * parseInt(str2[j]);
    const n = result.length;
    for(let k = 0;k < n-1;k++)
    {
        const temp = Number(result[k]);
        if(temp >= 10)
        {
            result[k] = temp % 10;
            result[k + 1] +=  temp / 10;
        }
    }
    return result.reverse().join("")
}
