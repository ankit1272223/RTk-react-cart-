import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function MyCard({ product }) {
  const dispatch = useDispatch(); // Use dispatch inside the component

  const handleAddToCart = () => {
    dispatch(addToCart(product)); // Pass the product to the action
  };

  return (
    <div>
      <Card className="mx-auto w-80 max-w-[26rem] min-w-[20rem]">
        <CardHeader
          shadow={false}
          floated={false}
          className="h-96  overflow-hidden"
        >
          {/* ID={product.id} */}
          <img
            src={product.image}
            alt={product.title}
            className="object-cover transition-all hover:scale-105 duration-300"
          />
        </CardHeader>
        <CardBody className="h-[16rem] overflow-hidden">
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {product.title}
            </Typography>
          </div>
          <div className="flex items-center justify-between">
            {" "}
            <Typography color="blue-gray" className="text-xl font-semibold">
              ₹{product.price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal h-20 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          >
            {product.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={handleAddToCart} // Use the fixed function
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default MyCard;
