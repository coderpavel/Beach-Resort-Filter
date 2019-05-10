import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
    loading: true
  };

  componentDidMount() {
    const rooms = this.formatData(items);
    const featuredRooms = rooms.filter(room => room.featured === true);

    const maxPrice = Math.max(
      ...rooms.map(room => {
        return room.price;
      })
    );

    const maxSize = Math.max(
      ...rooms.map(room => {
        return room.size;
      })
    );

    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      price: maxPrice,
      maxPrice,
      maxSize,
      loading: false
    });
  }

  formatData = items => {
    const tempItems = items.map(item => {
      const id = item.sys.id;
      const images = item.fields.images.map(image => image.fields.file.url);

      const room = { ...item.fields, id, images };
      return room;
    });
    return tempItems;
  };

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = event => {
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    const { name } = event.target;

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {};

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export const withRoomConsumer = Component => {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
};

export { RoomProvider, RoomConsumer, RoomContext };
