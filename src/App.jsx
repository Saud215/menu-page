import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import CategoriesButtons from "./CategoriesButtons";

// const categories = data.map((item) => {
//   return item.category;
// });
// const setOfCategories = new Set(categories);
// const allUniqueCategories = ["all", ...setOfCategories];

// console.log(categories);
// console.log(setOfCategories);

const allUniqueCategories = [
  "all",
  ...new Set(
    data.map((item) => {
      return item.category;
    })
  ),
];
// console.log(allUniqueCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allUniqueCategories);

  const filterMenuItems = (category) => {
    // console.log(category);
    if (category === "all") {
      setMenuItems(data);
      return;
    }

    const newData = data.filter((item) => item.category === category);
    setMenuItems(newData);
  };

  return (
    <main>
      <section className="menu">
        <Title text={"our menu"} />
        <CategoriesButtons
          categories={categories}
          filterMenuItems={filterMenuItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
