import React from "react";
import Hero from "../Layout/Hero";
import Banner from "../Layout/Banner";
import RoomsContainer from "./RoomsContainer";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
