// import { Link } from "react-router-dom";
// import { useCart } from "./CartContext";

// const CartPage = () => {
//   const { cart, removeFromCart } = useCart();

//   // Calculate Total Price
//   const totalPrice = cart.reduce((total, item) => total + item.price, 0);

//   return (
//     <div className="mt-32 px-16">
//       <h1 className="text-3xl font-semibold mb-10">Your <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">Cart</span></h1>

//       {cart.length > 0 ? (
//         <>
//           <div className="flex flex-wrap gap-10 justify-center">
//             {cart.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-5 border rounded-lg shadow-lg flex flex-col items-center"
//               >
//                 <div className="text-lg font-semibold">{item.name}</div>
//                 <div className="text-sm text-mine-shaft-300">{item.description}</div>
//                 <div className="text-sm font-semibold text-green-600">₹{item.price}</div>
//                 <button
//                   className="mt-3 text-sm bg-red-500 px-3 py-1 text-white font-semibold rounded-lg hover:bg-red-700"
//                   onClick={() => removeFromCart(item.name)}
//                 >
//                   Remove
//                 </button>
//                 <Link to={"/trace"}
//                   className="mt-3 text-sm bg-green-500 px-3 py-1 text-white font-semibold rounded-lg hover:bg-green-700"
                 
//                 >
//                   Trace
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* Total Price */}
//           <div className="mt-10 text-xl font-bold text-right">
//             Total Price: ₹{totalPrice}
//           </div>
//         </>
//       ) : (
//         <div className="text-center">Your cart is empty!</div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
// import { Link } from "react-router-dom";
// import { useCart } from "./CartContext";

// const CartPage = () => {
//   const { cart, removeFromCart } = useCart();
  
//   // Calculate Subtotal
//   const subtotal = cart.reduce((total, item) => total + item.price, 0);
  
//   // Calculate Tax (assuming 18% GST)
//   const tax = subtotal * 0.18;
  
//   // Calculate Total Price
//   const totalPrice = subtotal + tax;
  
//   return (
//     <div className="mt-32 px-16">
//       <h1 className="text-3xl font-semibold mb-10">
//         Your <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">Cart</span>
//       </h1>
      
//       {cart.length > 0 ? (
//         <>
//           <div className="flex flex-wrap gap-10 justify-center">
//             {cart.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-5 border rounded-lg shadow-lg flex flex-col items-center"
//               >
//                 <div className="text-lg font-semibold">{item.name}</div>
//                 <div className="text-sm text-mine-shaft-300">{item.description}</div>
//                 <div className="text-sm font-semibold text-green-600">₹{item.price}</div>
//                 <button
//                   className="mt-3 text-sm bg-red-500 px-3 py-1 text-white font-semibold rounded-lg hover:bg-red-700"
//                   onClick={() => removeFromCart(item.name)}
//                 >
//                   Remove
//                 </button>
//                 <Link 
//                   to="/trace"
//                   className="mt-3 text-sm bg-blue-500 px-3 py-1 text-white font-semibold rounded-lg hover:bg-blue-700"
//                 >
//                   Trace QR
//                 </Link>
//               </div>
//             ))}
//           </div>
          
//           {/* Price Summary */}
//           <div className="mt-10 border rounded-lg p-5 max-w-md ml-auto">
//             <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//             <div className="flex justify-between mb-2">
//               <span>Subtotal:</span>
//               <span>₹{subtotal.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between mb-2">
//               <span>Tax (18% GST):</span>
//               <span>₹{tax.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
//               <span>Total:</span>
//               <span>₹{totalPrice.toFixed(2)}</span>
//             </div>
//             <button className="mt-4 w-full bg-green-500 py-2 text-white font-semibold rounded-lg hover:bg-green-700">
//               Buy Now
//             </button>
//           </div>
//         </>
//       ) : (
//         <div className="text-center py-10">
//           <div className="text-xl mb-4">Your cart is empty!</div>
//           <Link 
//             to="/order-plants" 
//             className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700"
//           >
//             Continue Shopping
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  // Calculate Subtotal
  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  
  // Calculate Tax (assuming 18% GST)
  const tax = subtotal * 0.18;
  
  // Calculate Total Price
  const totalPrice = subtotal + tax;
  
  // Handle Buy Now button click
  const handleBuyNow = () => {
    // Navigate to trace page after purchase
    navigate("/trace");
  };
  
  return (
    <div className="mt-32 px-16">
      <h1 className="text-3xl font-semibold mb-10">
        Your <span className="bg-gradient-to-r from-website-color-200 to-website-color-700 bg-clip-text text-transparent">Cart</span>
      </h1>
      
      {cart.length > 0 ? (
        <>
          <div className="flex flex-wrap gap-10 justify-center">
            {cart.map((item, index) => (
              <div
                key={index}
                className="p-5 border rounded-lg shadow-lg flex flex-col items-center"
              >
                <div className="text-lg font-semibold">{item.name}</div>
                <div className="text-sm text-mine-shaft-300">{item.description}</div>
                <div className="text-sm font-semibold text-green-600">₹{item.price}</div>
                <button
                  className="mt-3 text-sm bg-red-500 px-3 py-1 text-white font-semibold rounded-lg hover:bg-red-700"
                  onClick={() => removeFromCart(item.name)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          {/* Price Summary */}
          <div className="mt-10 border rounded-lg p-5 max-w-md ml-auto">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax (18% GST):</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
              <span>Total:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <button 
              className="mt-4 w-full bg-green-500 py-2 text-white font-semibold rounded-lg hover:bg-green-700"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-10">
          <div className="text-xl mb-4">Your cart is empty!</div>
          <Link 
            to="/order-plants" 
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;