export class ProductManager {
    constructor() {
        this.products = [];
    }

    generatedId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    getProducts() {
        return this.products;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            throw new Error("Codigo en Uso.");
        }

        const id = this.generatedId();

        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
        return newProduct;
    }

    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);
        if (!product) {
            throw new Error("Product Not Find.");
        }
        return product;
    }
}
