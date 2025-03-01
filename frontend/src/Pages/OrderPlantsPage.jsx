
  import { marqueeData } from "../../public/assets/data/Data"
  import OrderPants from "../components/OrderPlants/OrderPlants"
  import CartCard from "../components/cart/CartCard"


  const OrderPlantsPage = () => {
    return (
      <div className="mt-32 px-16">
        <OrderPants/>
        <div>
        <div className="flex flex-wrap justify-center gap-10">
        {marqueeData.map((data, index) => (
          <CartCard key={index} {...data} />
        ))}
        </div>
        </div>
      </div>
    )
  }

  export default OrderPlantsPage