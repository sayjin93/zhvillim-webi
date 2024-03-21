/* define your functions here */
function calculateTotal(quantity, price) {
    return quantity * price;
}

function outputCartRow(item, total) {
    document.write('<tr>');
    document.write(`<td><img src="images/${item.product.filename}" /></td>`);
    document.write(`<td>${item.product.title}</td>`);
    document.write(`<td>${item.quantity}</td>`);
    document.write(`<td>$${item.product.price.toFixed(2)}</td>`);
    document.write(`<td>$${total.toFixed(2)}</td>`);
    document.write('</tr>');
}

function calculateSubtotal(cart) {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
        subtotal += calculateTotal(cart[i].quantity, cart[i].product.price);
    }
    return subtotal;
}

function calculateTax(subtotal, taxRate) {
    return subtotal * taxRate;
}
function calculateShipping(cart, subtotal) {
    const shippingCostPerItem = 5.0;
    if (subtotal >= 500) {
        return 0; // Free shipping for subtotal $500 or more
    } else {
        return cart.length * shippingCostPerItem;
    }
}

function calculateGrandTotal(subtotal, tax, shipping) {
    return subtotal + tax + shipping;
}
