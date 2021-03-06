import { Link } from "react-router-dom";
import styled from "styled-components";
import { categories } from "../../data";
import { mobile, responsivecategories } from "../../responsive";
import CategoryItem from "./CategoriesItem";

// Categories

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container id="#categories">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
