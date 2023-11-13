

class Product {

    /**
     * @param {void}
     * @returns {void}
     */
    saveProduct() {
        const form = document.querySelector('form');
        const product = []; // Initialize the product array before the loop
        let canSave = true;
        for (const $input of form) {
            if (this.checkInput($input)) {
                product.push({
                    name: $input.name,
                    value: $input.value
                });
            } else {
                canSave = false;
            }
        }

        if (canSave){
            debugger
            let products = [];
            if (this.allGetProduct() != null) {
                products = this.allGetProduct();
            }
            products.push(product);
            const productsJson = JSON.stringify(products);
            localStorage.setItem('products', productsJson);
            location.reload();
        }
    }
    
    allGetProduct() {
        return JSON.parse(localStorage.getItem('products'));
    }

    /**
     *
     * @param {NodeList} $input
     * @returns {Boolean}
     */
    checkInput($input) {
        if ($input.value === '') {
            $input.style.border = '1px solid red';
            return false;
        }
        $input.style.border = 'none';
        return true;
    }
}

const product = new Product;