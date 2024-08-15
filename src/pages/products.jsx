import { useEffect, useState } from "react";
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
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // didmount
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []); // JSON => Js
  }, []);
  // didupdate
  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart)); //  js => JSON
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
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
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );

                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>$ {product.price}</td>
                    <td>{item.qty}</td>
                    <td>$ {product.price * item.qty}</td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>$ {totalPrice}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
