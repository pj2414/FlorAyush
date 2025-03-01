import { useCart } from "./CartContext";

const CartCard = ({ name, description, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name, description, price });
  };

  return (
    <div className="mx-5 flex flex-col gap-4 border border-website-color-700 items-center w-64 p-5 rounded-lg cursor-pointer hover:shadow-lg my-5 ">
      {/* Image Container */}
      <div className="p-2 bg-azure-radiance-700 rounded-full">
        <img
          className="h-24 w-24 rounded-full object-cover"
          src={`/assets/images/${name.toLowerCase()}.jpeg`}
          alt={name}
        />
      </div>

      {/* Title */}
      <div className="text-lg font-semibold text-center">{name}</div>

      {/* Description */}
      <div className="text-sm text-center text-mine-shaft-300 min-h-[48px]">
        {description}
      </div>

      {/* Price */}
      <div className="text-sm font-semibold text-green-600">₹{price}</div>

      {/* Add to Cart Button */}
      <div>
        <button
          className="text-sm bg-gradient-to-r from-website-color-200 to-website-color-700 px-3 py-1 text-black font-semibold rounded-lg hover:bg-gradient-to-r hover:from-website-color-400 hover:to-website-color-900"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default CartCard;
