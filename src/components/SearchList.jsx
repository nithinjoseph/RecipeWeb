import React from "react";
import Card from "./Card";

const SearchList = ({ data }) => {
  console.log(data);
  return (
    <div className="card-wrapper">
      {data.map((item) => {
        return <Card key={item.idMeal} item={item} />;
      })}
    </div>
  );
};

export default SearchList;
