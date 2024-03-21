import React from "react";

function Location() {
  return (
    <div className="main__location">
      <div className="grid grid-flow-row grid-cols-12 map__col">
        <div className="col-span-6 map__left">
          <h4>Our Location</h4>
        </div>
        <div className="col-span-6 map__right"></div>
      </div>
    </div>
  );
}

export default Location;
