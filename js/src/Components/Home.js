import { React, useEffect, useState } from "react";
import Axios from "axios";
import { Table } from "react-bootstrap";
import "./Home.css";
import "./Sidebar.css";
import prepareList from "../Functions/ColExpand.js";
import { Link } from "react-router-dom";

function Home() {
  const [lamp0info, setlamp0info] = useState({});

  console.log(lamp0info);
  const clickhandler = async () => {
    const data = await Axios.get(
      "http://localhost:8282/~/mn-cse/CAE610333489?rcn=5&lvl=1",
      {
        headers: {
          "x-m2m-origin": "admin:admin",
        },
      }
    );
    // lampinfo = data.m2mae;
    // console.log(data);
    // setDataFetched(true);
  };
  return (
    <div class="home">
      <h1>Dashboard</h1>
      <br />
      <h5>Click on a lamp below</h5>
      <ul>
        <Link to="/lamp0">
          <li>Lamp 0</li>
        </Link>
        <Link to="/lamp1">
          <li>Lamp 1</li>
        </Link>

        <Link to="/lampAll">
          <li>Lamp All</li>
        </Link>
      </ul>
    </div>
  );
}

export default Home;
