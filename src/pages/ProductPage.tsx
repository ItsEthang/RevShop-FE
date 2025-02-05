const ProductPage = () => {
  return (
    <div className="grid grid-flow-col grid-rows-3 gap-4 h-full">
      {" "}
      <div className="row-span-3 bg-red-200">Menu</div>{" "}
      <div className="col-span-2 bg-blue-200">Navbar</div>{" "}
      <div className="col-span-2 row-span-2 bg-black">Content</div>
    </div>
  );
};

export default ProductPage;
