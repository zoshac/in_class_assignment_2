// Task 1 
let products = {
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Phone", price: 600, category: "Electronics"},

};

function getProductsByCategory(products, category) {
    return products.filter{product => {
        return product.category === categgory
    }}

}:

console.log(getProductsByCategory(products, "Electronics")); 

// Task 2 




function applyDiscount(products, discountRate) {
    return products.map(products => ({
        ...products,
        price: product.price - (product.price * discountRate)
    }))
}

console.log(applyDiscount(products, .1)); 

function sum3(x,y,z) {
    return x+y+z
}

console.log(sum3); 

// Task 3 Using reduce 

let sales = [250, 400, 150, 900, 1200];
function calculateTotalRevenue(sales){
    return sales.reduce((total, item)=> total + sales, 0)
}

// Task 4 Update Salary 

let employee = {
    name: "John",
    salary: 60000,
    position: "Manager"
}: 

function updateSalary(employee, percentageIncrease) {
    employee.salary = employee.salaray + (employee.salaray * percentageIncrease)
}; 