import React from 'react';

const products = [
  {
    id: 1,
    name: 'Samsung S21 FE',
    image: '/product1.png',
    price: 150000,
  },
  {
    id: 2,
    name: 'Samsung S21 FE',
    image: '/product1.png',
    price: 150000,
  },
  {
    id: 3,
    name: 'Samsung S21 FE',
    image: '/product1.png',
    price: 150000,
  },
  {
    id: 4,
    name: 'Samsung S21 FE',
    image: '/product1.png',
    price: 150000,
  },
  {
    id: 5,
    name: 'Samsung S21 FE',
    image: '/product1.png',
    price: 150000,
  },
  {
    id: 6,
    name: 'Samsung S21 FE',
    image: '/product1.png',
    price: 150000,
  },
  {
    id: 7,
    name: 'Samsung S21 FE',
    image: '/product1.png',
    price: 150000,
  },
  {
    id: 8,
    name: 'Samsung S21 FE',
    image: '/product1.png',
    price: 150000,
  },
  // محصولات دیگر
];

const myStyle = {
  fontFamily: 'Nazanin , sans-serif',
};

const Home = () => {

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 bg-blue-100 rounded-md text-center ">Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-neutral-200 p-4 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover mb-4"
            />
            <h2 className="text-lg font-semibold bg-blue-200 rounded-t-md text-center mx-auto">{product.name}</h2>
            <p className="text-gray-700 from-inherit bg-cyan-300 rounded-b-md text-center mx-auto">Price: {product.price} $</p>
            <div className="text-center mt-3">
              <button className="bg-pink-500 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
