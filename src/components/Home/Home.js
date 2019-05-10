import React from "react";
import Hero from "../Layout/Hero";
import Banner from "../Layout/Banner";
import Services from "./Services";
import FeaturedRooms from '../Rooms/FeaturedRooms';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Hero hero="defaultHero">
        <Banner title="luxurious roums" subtitle="delux rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
};

export default Home;
