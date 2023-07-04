const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return this.tax * salary;
}
  
console.log(getMyTaxes.call(ukraine, 2000));

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

console.log(getMiddleTaxes.call(ukraine));

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log(getTotalTaxes.call(ukraine));

function getMySalary(country) {
    const minSalary = 1500;
    const maxSalary = 2000;
    const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    const taxes = getMyTaxes.call(country, salary);
    const profit = salary - taxes;
    console.log({ salary, taxes, profit });
}

setInterval(() => {
    getMySalary(ukraine);
}, 10000);