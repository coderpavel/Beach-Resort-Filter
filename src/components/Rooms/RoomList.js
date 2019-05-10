import React from 'react';
import Room from './Room'

const RoomList = ({rooms}) => {

    if(rooms.length === 0) {
        return (
            <div>
                <h3>Unfortunately no rooms matched your search parametrs</h3>
            </div>
        )
    }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {
            rooms.map(room => {
                return <Room key={room.id} room={room} />
            })
        }
      </div>
    </section>
  )
}

export default RoomList
