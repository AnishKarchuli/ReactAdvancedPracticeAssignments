import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

export const foodItemsData = [
  { id: 1, name: "Apple", calories: 52, category: "Fruit" },
  { id: 2, name: "Banana", calories: 89, category: "Fruit" },
  { id: 3, name: "Chicken Breast", calories: 165, category: "Protein" },
  { id: 4, name: "Salad", calories: 100, category: "Vegetable" },
  { id: 5, name: "Yogurt", calories: 120, category: "Dairy" },
];

const FoodItems = () => {
  const [itemCheckbox, setItemCheckbox] = useState(["All"])

  const checkboxHandler = (event) => {
    const { value, checked } = event.target;

    if(value === "All"){
      if(checked){
        setItemCheckbox(["All"])
      }
    } else {
      let updatedCheckboxes;
      if(checked){
        updatedCheckboxes = itemCheckbox.filter((item) => item !== "All").concat(value)
      } else {
        updatedCheckboxes = itemCheckbox.filter((item) => item !== value)
      }
      
      if(updatedCheckboxes.length === 0){
        updatedCheckboxes = ["All"];
      }

      setItemCheckbox(updatedCheckboxes)
    }
  }

  const filterItemCheckbox = itemCheckbox.includes("All") || itemCheckbox.length === 0 ? foodItemsData : foodItemsData.filter((item) => itemCheckbox.includes(item.category))
  
  return (
    <>
      <Header />
      <main className="container">
        <div className="my-4">
          <h1 className="fw-semibold">List of Food Items</h1>
          <label>Category: </label>
          <input type="checkbox" value="All" className="ms-3" checked={itemCheckbox.includes("All")} onChange={checkboxHandler} /> All
          <input type="checkbox" value="Fruit" className="ms-3" checked={itemCheckbox.includes("Fruit")} onChange={checkboxHandler} /> Fruit
          <input type="checkbox" value="Protein" className="ms-3" checked={itemCheckbox.includes("Protein")} onChange={checkboxHandler} /> Protein
          <input type="checkbox" value="Vegetable" className="ms-3" checked={itemCheckbox.includes("Vegetable")} onChange={checkboxHandler} /> Vegetable
          <input type="checkbox" value="Dairy" className="ms-3" checked={itemCheckbox.includes("Dairy")} onChange={checkboxHandler} /> Dairy
        </div>
        <div>
          <ul className="list-group">
            {filterItemCheckbox.map((item) => (
              <li key={item.id} className="list-group-item">
                <h5 className="fw-semibold">{item.name}</h5>
                <p>Calories: {item.calories}</p>
                <p>Category: {item.category}</p>
                <Link
                  to={`/foodItems/${item.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FoodItems;
