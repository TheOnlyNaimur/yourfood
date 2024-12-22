import React from "react";

// export default function Cards() {
export default function Cards(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);

  return (
    <div>
      <div className="firstcar" style={{ marginLeft: "10px" }}>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxheight: "360px" }}
        >
          <img
            src={props.imgSrc}
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>{" "}
            {/*props.foodname made all the card title dynamic*/}
            <p className="card-text">This is the first text</p>
            <div className="container w-100 ">
              <select className="container-list m-2 h-100 bg-info container-list-light rounded">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select className="container-list-2 m-2 h-100 bg-info container-list-2-light rounded">
                {/* <option value="Half">Half</option>
                <option value="Full">Full</option> */}
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fd-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
