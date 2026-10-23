// ============================================================
// Classic Eleven: sample product data (prototype only)
// Prices and descriptions are sample data, not real store data.
// Every page reads products from this one file.
//
// IMAGES: right now each image is a placeholder .svg file.
// When you have real photos, save them in the same folder and
// change the ending of the path to .jpg (for example
// "assets/images/products/essential-hoodie.jpg").
// ============================================================

// A few colors we reuse, so we don't repeat ourselves
const COLOR_BLACK = { name: "Black", hex: "#111111" };
const COLOR_WHITE = { name: "White", hex: "#FFFFFF" };
const COLOR_CREAM = { name: "Cream", hex: "#F3EFE6" };
const COLOR_TAUPE = { name: "Taupe", hex: "#B8AA96" };
const COLOR_NAVY = { name: "Navy", hex: "#1E293B" };
const COLOR_OLIVE = { name: "Olive", hex: "#6B705C" };

// Sizes we offer (same for every product to keep things simple)
const STANDARD_SIZES = ["S", "M", "L", "XL"];

// The list of all products. Each { ... } is one product.
const products = [
    {
        id: 1,
        name: "Essential T-Shirt",
        category: "T-shirts",
        price: 12,
        description: "A soft everyday tee with a clean neckline. Easy to wear alone or layered.",
        image: "assets/images/products/essential-tshirt.svg",
        colors: [COLOR_BLACK, COLOR_WHITE, COLOR_CREAM],
        sizes: STANDARD_SIZES,
        stock: 40,
        featured: true,
        isNew: false
    },
    {
        id: 2,
        name: "Relaxed T-Shirt",
        category: "T-shirts",
        price: 15,
        description: "A roomier cut with dropped shoulders for a laid-back, comfortable fit.",
        image: "assets/images/products/relaxed-tshirt.svg",
        colors: [COLOR_CREAM, COLOR_TAUPE, COLOR_BLACK],
        sizes: STANDARD_SIZES,
        stock: 32,
        featured: false,
        isNew: true
    },
    {
        id: 3,
        name: "Classic Polo",
        category: "Polos",
        price: 19,
        description: "A simple polo with a neat collar, smart enough for class or a casual dinner.",
        image: "assets/images/products/classic-polo.svg",
        colors: [COLOR_NAVY, COLOR_WHITE, COLOR_BLACK],
        sizes: STANDARD_SIZES,
        stock: 25,
        featured: true,
        isNew: false
    },
    {
        id: 4,
        name: "Everyday Trousers",
        category: "Trousers",
        price: 25,
        description: "Straight, comfortable trousers that work from morning to evening.",
        image: "assets/images/products/everyday-trousers.svg",
        colors: [COLOR_BLACK, COLOR_TAUPE, COLOR_NAVY],
        sizes: STANDARD_SIZES,
        stock: 20,
        featured: true,
        isNew: false
    },
    {
        id: 5,
        name: "Premium Oxford Shirt",
        category: "Shirts",
        price: 22,
        description: "A crisp button-up shirt with a classic collar. Dress it up or wear it open over a tee.",
        image: "assets/images/products/oxford-shirt.svg",
        colors: [COLOR_WHITE, COLOR_CREAM, COLOR_NAVY],
        sizes: STANDARD_SIZES,
        stock: 18,
        featured: true,
        isNew: false
    },
    {
        id: 6,
        name: "Minimal Long-Sleeve Shirt",
        category: "Shirts",
        price: 18,
        description: "A clean, minimal long-sleeve with no extra details. Easy to layer.",
        image: "assets/images/products/long-sleeve-shirt.svg",
        colors: [COLOR_BLACK, COLOR_WHITE, COLOR_TAUPE],
        sizes: STANDARD_SIZES,
        stock: 22,
        featured: false,
        isNew: false
    },
    {
        id: 7,
        name: "Relaxed Cotton Shirt",
        category: "Shirts",
        price: 24,
        description: "A loose, airy shirt made for warm days.",
        image: "assets/images/products/relaxed-cotton-shirt.svg",
        colors: [COLOR_CREAM, COLOR_WHITE, COLOR_OLIVE],
        sizes: STANDARD_SIZES,
        stock: 15,
        featured: false,
        isNew: true
    },
    {
        id: 8,
        name: "Essential Hoodie",
        category: "Outerwear",
        price: 29,
        description: "A cozy hoodie in a simple shape, for cooler evenings.",
        image: "assets/images/products/essential-hoodie.svg",
        colors: [COLOR_BLACK, COLOR_TAUPE, COLOR_CREAM],
        sizes: STANDARD_SIZES,
        stock: 28,
        featured: false,
        isNew: true
    },
    {
        id: 9,
        name: "Lightweight Jacket",
        category: "Outerwear",
        price: 35,
        description: "A light layer for changing weather, easy to carry and easy to wear.",
        image: "assets/images/products/lightweight-jacket.svg",
        colors: [COLOR_BLACK, COLOR_OLIVE, COLOR_NAVY],
        sizes: STANDARD_SIZES,
        stock: 12,
        featured: false,
        isNew: true
    },
    {
        id: 10,
        name: "Straight-Leg Pants",
        category: "Trousers",
        price: 27,
        description: "Straight-leg pants with a relaxed, modern line.",
        image: "assets/images/products/straight-leg-pants.svg",
        colors: [COLOR_BLACK, COLOR_TAUPE, COLOR_OLIVE],
        sizes: STANDARD_SIZES,
        stock: 17,
        featured: true,
        isNew: false
    },
    {
        id: 11,
        name: "Everyday Shorts",
        category: "Trousers",
        price: 16,
        description: "Simple shorts for hot days, comfortable and easy to style.",
        image: "assets/images/products/everyday-shorts.svg",
        colors: [COLOR_BLACK, COLOR_TAUPE, COLOR_NAVY],
        sizes: STANDARD_SIZES,
        stock: 30,
        featured: false,
        isNew: false
    },
    {
        id: 12,
        name: "Classic Overshirt",
        category: "Outerwear",
        price: 28,
        description: "A shirt-jacket you can wear as a light jacket or an open layer.",
        image: "assets/images/products/classic-overshirt.svg",
        colors: [COLOR_TAUPE, COLOR_OLIVE, COLOR_BLACK],
        sizes: STANDARD_SIZES,
        stock: 14,
        featured: false,
        isNew: true
    }
];