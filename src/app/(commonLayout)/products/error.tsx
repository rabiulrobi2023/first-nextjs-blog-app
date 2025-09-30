"use client";
const ProductErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className=" h-lvh  flex flex-col gap-3 justify-center items-center bg-transparent">
      <p className="text-3xl text-red-600">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-red-600 text-white font-bold px-4 py-1 rounded-sm"
      >
        Try Again
      </button>
    </div>
  );
};

export default ProductErrorPage;
