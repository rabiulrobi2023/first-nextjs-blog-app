import { IProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ProductsCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="shadow-xl rounded-[5px] p-4 w-[300px]">
      <div>
        <Image
          className="h-[200px] flex mx-auto"
          src={product.image}
          width={300}
          height={200}
          alt="product-image"
        />
      </div>
      <div>
        <div>
          <div className="flex justify-between mt-2">
            <h1>{product.name}</h1>
            <p className="text-blue-900 px-2 bg-blue-100 rounded-sm">
              {product.category}
            </p>
          </div>
          <p>Brand: {product.brand}</p>
        </div>
        <p className="mt-3 font-bold text-blue-600">BDT {product.price}</p>
        <div className="mt-3 flex justify-between">
          <button className="bg-red-600 text-white font-bold px-4 py-1 rounded-sm">
            Buy Now
          </button>
          <Link href={"#"} className="text-green-600">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
