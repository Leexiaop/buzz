/**
 * 比较俩个用英文{.}分割的版本号的大小
 * @group 工具函数
 * @param {string} version1 比较的版本号
 * @param {string} version2 比较的版本号
 * @returns {number} 返回一个数字，-1代表version1大，1表示version2大，0表示version1和version2相等
 * @example
 * ```ts
 * onVersionCompare("1.0.1", "1.2.4")   //  1
 * onVersionCompare("2.0.1", "1.2.4")   //  -1
 * onVersionCompare("1.2.4", "1.2.4")   //  0
 * ```
 */
export const onVersionCompare = (version1: string, version2: string): number => {
    const v1 = version1.split(".");
    const v2 = version2.split(".");
   
    const len = Math.max(v1.length, v2.length);
   
    while (v1.length < len) {
        v1.push("0");
    }
   
    while (v2.length < len) {
        v2.push("0");
    }
   
    for (let i = 0; i < len; i++) {
        const num1 = parseInt(v1[i]);
        const num2 = parseInt(v2[i]);
    
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
};
