console.log("=".repeat(20));
console.log("BIR TAX CALCULATOR");
console.log("=".repeat(20));

class EmployeeInfo{
    constructor(EmployeeName, id, position, salary){
          this.EmployeeName = EmployeeName;
          this.id = id;
          this.position  = position;
          this.salary = salary;
    }

    info() {

        console.log("Employee Information:\n");

        console.log(`Name: ${this.EmployeeName}
ID: ${this.id}
Position: ${this.position}
Salary: ${this.salary}`)
    }
}

let person = new EmployeeInfo ("Jimbryce", "2024-439-1", "Intern", 15000.000);
person.info();


// Annual Gross Income
let AnnualIncome = person.salary * 12;
console.log("\nAnnual Gross Income:", AnnualIncome);

//Deductions
class Deductions{
    constructor(GSIS, philhealth, pagibig, otherDeductions){
        this.GSIS = GSIS;
        this.philhealth = philhealth;
        this.pagibig = pagibig;
        this.otherDeductions = otherDeductions
    }

    TotalDeduction(){
        console.log("=".repeat(20));
        console.log("DEDUCTIONS:");
        console.log("=".repeat(20));

        console.log(`\nGSIS: ${this.GSIS}
phihealth: ${this.philhealth}
pagibig: ${this.pagibig}
otherDeductions: ${this.otherDeductions}`);

    let amount = this.GSIS + this.philhealth + this.pagibig + this.otherDeductions;
    console.log("\nTotal Amount:", amount);
    return amount;
    }
}

// BIR TAX COMPUTATION



let Deduct = new Deductions(300, 300, 400, 200);
Deduct.TotalDeduction();

//Tax Income
let TotalDeduction = Deduct.TotalDeduction();
let TaxIncome = TotalDeduction - AnnualIncome;

console.log("\n" + "=".repeat(20));
console.log("TAX COMPUTATION");
console.log("=".repeat(20));

console.log("Annual Income:", AnnualIncome);
console.log("Total Deductions:", TotalDeduction);
console.log("Taxable Income:", TaxIncome);



// BIR TAX COMPUTATION
let TaxDue = 0;

if (TaxIncome <= 250000) {

    TaxDue = 0;

} else if (TaxIncome <= 400000) {

    TaxDue = (TaxIncome - 250000) * 0.15;

} else if (TaxIncome <= 800000) {

    TaxDue = 22500 + (TaxIncome - 400000) * 0.20;

} else if (TaxIncome <= 2000000) {

    TaxDue = 102500 + (TaxIncome - 800000) * 0.25;

} else if (TaxIncome <= 8000000) {

    TaxDue = 402500 + (TaxIncome - 2000000) * 0.30;

} else {

    TaxDue = 2202500 + (TaxIncome - 8000000) * 0.35;

}

console.log("Income Tax Due:", TaxDue);

