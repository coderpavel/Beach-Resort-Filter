import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context";
import Title from "../Layout/Title";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = ({rooms}) => {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique values for options
  let types = getUnique(rooms, "type");
  // options for select
  types = ["all", ...types];
  // map to jsx
  types = types.map((type, index) => {
    return (
      <option value={type} key={index}>
        {type}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
      </form>
    </section>
  );
};

export default RoomFilter;
