import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    images: "/images/shoes-1.jpg",
    title: "Nike Shoes",
    price: 120,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          corporis deleniti non sit amet hic, natus ratione in sint placeat ad
          illo sunt molestiae officiis soluta aut? Fugit, facere voluptatibus.`,
  },
  {
    id: 2,
    images: "/images/shoes-1.jpg",
    title: "Adidas Shoes",
    price: 100,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          corporis deleniti non sit amet hic, natus ratione in sint placeat ad
          illo sunt molestiae officiis soluta aut? Fugit, facere voluptatibus.`,
  },
  {
    id: 3,
    images: "/images/shoes-1.jpg",
    title: "Puma Shoes",
    price: 110,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          corporis deleniti non sit amet hic, natus ratione in sint placeat ad
          illo sunt molestiae officiis soluta aut? Fugit, facere voluptatibus.`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
      id: "1",
      qty: 1,
    },
  ]);
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    setCart([
      ...cart,
      {
        id: id,
        qty: 1,
      },
    ]);
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="bg-black ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.map((product) => {
            return (
              <CardProduct key={product.id}>
                <CardProduct.Header images={product.images} />
                <CardProduct.Body title={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            );
          })}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <ul>
            {cart.map((item) => {
              return <li key={item}>{item.id}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
