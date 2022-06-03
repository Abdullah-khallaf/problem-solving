/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
    let txt = n.toString(2);
    let ones = 0;
    for(let char of txt){
        if(char == 1){
            ones++;
        }
    }
    return ones;
};
hammingWeight(00000000000000000000000000001011);