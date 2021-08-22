import React from "react";

function Container(props) {
  return (
    <div style={{ width: "1400px", margin: "0 auto" }}>{props.children}</div>
  );
}

export default Container;
