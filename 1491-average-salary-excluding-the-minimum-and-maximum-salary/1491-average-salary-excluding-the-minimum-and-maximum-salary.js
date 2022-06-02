/**
 * @param {number[]} salary
 * @return {number}
 */



const average = (salary) => {
    let last = salary.length - 1;
    let min = salary[last];
    let max = salary[0];
    let total = 0;
    salary.forEach(salarynum => {
        if (salarynum > max ) {
            max = salarynum;
        }
        if (salarynum < min ) {
            min = salarynum;
        }
         total = total + salarynum;
    });
    let avg = ((total -(max+min))/(salary.length-2));
    console.log(avg);
    return avg;
} 
