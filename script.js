const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// // For each quantity input
// document.querySelectorAll('.qty-input').forEach((input, idx) => {
//   input.addEventListener('change', function() {
//     const price = parseFloat(document.querySelectorAll('td:nth-child(4)')[idx].textContent.replace('$',''));
//     const quantity = parseInt(this.value);
//     const subtotal = price * quantity;
//     document.querySelectorAll('.item-subtotal')[idx].textContent = '$' + subtotal.toFixed(2);

//     // Recalculate total
//     let total = 0;
//     document.querySelectorAll('.item-subtotal').forEach(cell => {
//       total += parseFloat(cell.textContent.replace('$',''));
//     });
//     document.getElementById('cart-subtotal').textContent = '$' + total.toFixed(2);
//     document.getElementById('cart-total').innerHTML = '<strong>$' + total.toFixed(2) + '</strong>';
//   });
// });
