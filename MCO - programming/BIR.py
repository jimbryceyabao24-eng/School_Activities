print("=" * 20)
print("BIR TAX CALCULATOR")
print("=" * 20)


# Employee Information
class EmployeeInfo:

    def __init__(self, EmployeeName, id, position, salary):
        self.EmployeeName = EmployeeName
        self.id = id
        self.position = position
        self.salary = salary

    def info(self):
        print("Employee Information:\n")

        print(f"""Name: {self.EmployeeName}
ID: {self.id}
Position: {self.position}
Salary: {self.salary}""")


# Create Employee
person = EmployeeInfo(
    "Jimbryce",
    "2024-439-1",
    "Intern",
    15000
)

person.info()


# Annual Gross Income
AnnualIncome = person.salary * 12

print("\nAnnual Gross Income:", AnnualIncome)


# Deductions
class Deductions:

    def __init__(self, GSIS, philhealth, pagibig, otherDeductions):
        self.GSIS = GSIS
        self.philhealth = philhealth
        self.pagibig = pagibig
        self.otherDeductions = otherDeductions

    def TotalDeduction(self):

        print("=" * 20)
        print("DEDUCTIONS:")
        print("=" * 20)

        print(f"""
GSIS: {self.GSIS}
PhilHealth: {self.philhealth}
Pag-IBIG: {self.pagibig}
Other Deductions: {self.otherDeductions}""")

        amount = (
            self.GSIS +
            self.philhealth +
            self.pagibig +
            self.otherDeductions
        )

        print("\nTotal Amount:", amount)

        return amount


# Create Deduction
Deduct = Deductions(
    300,
    300,
    400,
    200
)


# Get Total Deduction
TotalDeduction = Deduct.TotalDeduction()


# Taxable Income
TaxIncome = AnnualIncome - TotalDeduction


print("\n" + "=" * 20)
print("TAX COMPUTATION")
print("=" * 20)

print("Annual Income:", AnnualIncome)
print("Total Deductions:", TotalDeduction)
print("Taxable Income:", TaxIncome)


# BIR Tax Computation
TaxDue = 0


if TaxIncome <= 250000:

    TaxDue = 0

elif TaxIncome <= 400000:

    TaxDue = (TaxIncome - 250000) * 0.15

elif TaxIncome <= 800000:

    TaxDue = 22500 + (TaxIncome - 400000) * 0.20

elif TaxIncome <= 2000000:

    TaxDue = 102500 + (TaxIncome - 800000) * 0.25

elif TaxIncome <= 8000000:

    TaxDue = 402500 + (TaxIncome - 2000000) * 0.30

else:

    TaxDue = 2202500 + (TaxIncome - 8000000) * 0.35


print("Income Tax Due:", TaxDue)
