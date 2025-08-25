const products = [
  { id: "1", name: "Laptop Dell XPS 13", price: 1200, category: ["Electronics", "Computers"] },
  { id: "2", name: "iPhone 14", price: 999, category: ["Electronics", "Smartphones"] },
  { id: "3", name: "Auriculares Sony WH-1000XM5", price: 350, category: ["Electronics", "Audio"] },
  { id: "4", name: "Cafetera Nespresso", price: 180, category: ["Home Appliances", "Kitchen"] },
  { id: "5", name: "Silla Gamer Razer", price: 250, category: ["Furniture", "Gaming"] },
  { id: "6", name: "Libro: Clean Code", price: 40, category: ["Books", "Programming"] },
  { id: "7", name: "Camiseta Nike Dri-FIT", price: 30, category: ["Clothing", "Sportswear"] },
  { id: "8", name: "Mochila North Face", price: 90, category: ["Accessories", "Travel"] },
  { id: "9", name: "Monitor LG UltraWide 34\"", price: 500, category: ["Electronics", "Monitors"] },
  { id: "10", name: "Teclado Mecánico Logitech G Pro", price: 120, category: ["Electronics", "Gaming"] }
];

export const getAllProducts = (req, res) => {
    const {category} = req.query;

    let productsFiltered = products;

    if (category) {
        productsFiltered = products.filter(item => item.category.includes(category));
    }

    res.json(productsFiltered);
}

export const searchProducts = (req, res) => {
    const {name} = req.query;

    if (!name) {
        res.status(400).json({error: 'El nombre es requerido'});
        return;
    }

    const productsFiltered = products.filter(item => 
        item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );

    if (!productsFiltered){
        return res.status(404).json({error: 'No se encontraron productos'});
    }

    res.json(productsFiltered);
}

export const getProductById = (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find( item => item.id == id );

    if (!product) {
        res.status(404).json({error: "No existe el producto"});
    }

    res.json(product);
}
