import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    images: "/images/shoes-1.jpg",
    title: "Nike Shoes",
    price: "$120",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          corporis deleniti non sit amet hic, natus ratione in sint placeat ad
          illo sunt molestiae officiis soluta aut? Fugit, facere voluptatibus.`,
  },
  {
    id: 2,
    images: "/images/shoes-1.jpg",
    title: "Adidas Shoes",
    price: "$100",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          corporis deleniti non sit amet hic, natus ratione in sint placeat ad
          illo sunt molestiae officiis soluta aut? Fugit, facere voluptatibus.`,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
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
        {products.map((product) => {
          return (
            <CardProduct key={product.id}>
              <CardProduct.Header images={product.images} />
              <CardProduct.Body title={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          );
        })}
      </div>
    </>
  );
};

export default ProductPage;
