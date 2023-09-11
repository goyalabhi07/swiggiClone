import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      {cartItems.map((e) => {
        return <div>{e.id}</div>;
      })}
    </>
  );
};

export default Cart;
