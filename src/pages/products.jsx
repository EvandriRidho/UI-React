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
];

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header images={product.images} />
          <CardProduct.Body title={product.title}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductPage;
