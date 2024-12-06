import React from "react";

export default function Cards() {
  return (
    <div>
      <div className="firstcar" style={{ marginLeft: "10px" }}>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxheight: "360px"}}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title">Tech title</h5>
            <p className="card-text">This is the first text</p>
            <div className="container w-100 ">
              <select className="container-list m-2 h-100 bg-info container-list-light rounded">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select className="container-list-2 m-2 h-100 bg-info container-list-2-light rounded">
                <option value="Half">Half</option>
                <option value="Full">Full</option>
              </select>
              <div className="d-inline h-100 fd-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
