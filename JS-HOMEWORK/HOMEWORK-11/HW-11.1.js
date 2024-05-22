

fetch('https://dummyjson.com/docs/carts')
    .then(response => response.json())
    .then(data => {
        const carts = data.carts;

        carts.forEach(cart => {
            const cartInfo = `
                        <li>
                            <h2>ID: ${cart.id}</h2>
                            <p><strong>Name:</strong> ${cart.name}</p>
                            <p><strong>Owner:</strong> ${cart.owner}</p>
                            <p><strong>Items:</strong></p>
                            <ul>
                                ${cart.items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                            <p><strong>Total Price:</strong> ${cart.totalPrice}</p>
                        </li>
                    `;

            document.getElementById('cartList').innerHTML += cartInfo;
        });
    })
    .catch(error => console.error('Error:', error));