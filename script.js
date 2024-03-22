class Product {
    constructor(name, price, quantity, date) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.date = date;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');

        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name:</strong>${product.name}
                    <strong>Product Quantity:</strong>${product.quantity}
                    <strong>Product Price:</strong>${product.price}
                    <strong>Product Date:</strong>${product.date}
                    <a type="submit" href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }
    deleteProduct(product){
        if(product.name === "delete"){
            product.parentElement.parentElement.remove();
            this.showMessage('Product delete', 'info');
        }
    }

    showMessage(message, cssClass) {
        const element = document.createElement('div');
        element.className =` alert alert-${cssClass} mt-2`;
        element.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const app = document.querySelector('#app');
        container.insertBefore(element, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById('product-form').addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const quantity = document.getElementById('price').value;
    const price = document.getElementById('quantity').value;
    const date = document.getElementById('year').value;

    const ui = new UI();
    const product = new Product(name, quantity, price, date);
    ui.addProduct(product);
    ui.showMessage('Product added successfully', 'success');
});
document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);

});



