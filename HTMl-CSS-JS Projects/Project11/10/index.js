function filterCategory(products){
    return function(category){
        return products.filter(product => product.category===category)
    }
}

const products = [
    { name: 'Product 1', category: 'Electronics' },
    { name: 'Product 2', category: 'Clothing' },
    { name: 'Product 3', category: 'Electronics' },
    { name: 'Product 4', category: 'Home' },
    { name: 'Product 5', category: 'Clothing' }
]

let category1 = filterCategory(products)
console.log(category1('Clothing'));
console.log(category1('Electronics'));
