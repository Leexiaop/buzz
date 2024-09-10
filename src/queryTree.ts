/**
 * 从一棵树中查找value对应的label
 * @group 工具函数
 * @param {需要查找的目标树} tree 
 * @param {需要查找的value值} value 
 * @param {value字段名} valueName 
 * @param {label字段名} labelName 
 * @param {children字段名} childrenName 
 * @returns 
 */
export const queryTree = (tree: [], value,valueName:string='value',labelName='label',childrenName='children') => {
    let stark = [];
    stark = stark.concat(tree);
    while (stark.length) {
        const temp = stark.shift();
        if (temp[childrenName]) {
            stark = stark.concat(temp[childrenName]);
        }
        if (temp[valueName]===value) {
            return temp[labelName];
        }
    }
    return '';
}
