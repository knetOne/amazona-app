import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
        name: 'Basir',
        email: 'admin@example.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true
        },
        {
            name: 'John',
            email: 'true@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        },
    ],
    products: [
        {
            name:'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4,
            numReviews: 10,
            desciption: 'high quality product'
        },
        {
            name:'Adidas Slim Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 142,
            countInStock: 20,
            brand: 'Addidas',
            rating: 4.5,
            numReviews: 15,
            desciption: 'high quality product'
        },
        {
            name:'Lacoste free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            desciption: 'high quality product'
        },
        {
            name:'Nike Slim Pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 50,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            desciption: 'high quality product'
        },
        {
            name:'Puma Slim Pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            desciption: 'high quality product'
        },
        {
            name:'Adidas Fit Pant',
            category: 'Shirts',
            image: '/images/p6.jpg',
            price: 139,
            countInStock: 12,
            brand: 'Addidas',
            rating: 4.5,
            numReviews: 15,
            desciption: 'high quality product'
        }
    ]
}

export default data;