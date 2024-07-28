export const subtraction = (num1, num2) => {
    if(num1 === num2) return '0'
    function lt(num1, num2) {
        if (num1.length < num2.length) {
            return true
        } else if (num1.length === num2.length) {
            return num1 < num2
        } else {
            return false
        }
    }
    let isMinus = false
    if (lt(num1, num2)) {
        [num1, num2] = [num2, num1]
        isMinus = true
    }

    let len = Math.max(num1.length, num2.length)
    num1 = num1.padStart(len, 0)
    num2 = num2.padStart(len, 0)

    let flag = 0,
        result = '',
        temp
    for (let i = len - 1; i >= 0; i--) {
        temp = parseInt(num1[i]) - flag - parseInt(num2[i])
        if (temp < 0) {
            result = (10 + temp) + result
            flag = 1
        } else {
            result = temp + result
            flag = 0
        }
    }
    result = (isMinus ? '-' : '') + result.replace(/^0+/, '')
    return result
};
