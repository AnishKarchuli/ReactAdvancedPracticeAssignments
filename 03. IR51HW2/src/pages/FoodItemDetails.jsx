import Footer from "../components/Footer";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { foodItemsData } from "./FoodItems";

const FoodItemDetails = () => {
  const { itemId } = useParams();
  const foodItem = foodItemsData.find((item) => item.id === parseInt(itemId));
  
  return (
    <>
      <Header />
      <main className="container my-4">
        {foodItem ? (
      <>
        <h5 className="fw-semibold">{foodItem.name}</h5>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Name: </strong>{foodItem.name}
          </li>
          <li className="list-group-item">
            <strong>Calories: </strong>{foodItem.calories}
          </li>
        </ul>
      </>
        ) : (
      <p className="alert alert-danger">Food item not found.</p>
        )}
      </main>
      <Footer />
    </>
  )
}

export default FoodItemDetails;