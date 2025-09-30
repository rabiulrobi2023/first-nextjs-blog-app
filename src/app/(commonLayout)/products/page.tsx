import ProductsCard from "@/components/Products/ProductsCard";
import { IProduct } from "@/types";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 ">Products</h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {products.map((porduct: IProduct) => (
          <ProductsCard key={porduct.id} product={porduct}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
