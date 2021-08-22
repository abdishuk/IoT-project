import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Lamp1() {
  const [lamp0info, setlamp0info] = useState({});
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    async function getLampInfo() {
      const { data } = await axios.get("/lamps/lamp/6121565cb3981420bc939ed3");
      setlamp0info(data.m2mae);
    }

    getLampInfo();

    if (lamp0info) {
      setFetched(true);
    }
  }, [lamp0info, setFetched]);
  if (fetched) {
    console.log(lamp0info);
  }

  return (
    <div>
      <Link to="/">
        <button class="btn btn-primary" style={{ margin: "20px" }}>
          Back
        </button>
      </Link>
      <Link to="/lamp1/descriptor">
        <li>Click to see Lamp1 Descriptor</li>
        <br />
      </Link>
      <h3>Lamp 1 Info</h3>
      {fetched ? (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>rn</td>
              <td>{lamp0info?.rn}</td>
            </tr>
            <tr>
              <td>ty</td>
              <td>{lamp0info?.ty}</td>
            </tr>
            <tr>
              <td>ri</td>
              <td>{lamp0info?.ri}</td>
            </tr>

            <tr>
              <td>pi</td>
              <td>{lamp0info?.pi}</td>
            </tr>
            <tr>
              <td>ct</td>
              <td>{lamp0info?.ct}</td>
            </tr>
            <tr>
              <td>lt</td>
              <td>{lamp0info?.lt}</td>
            </tr>

            <tr>
              <td>et</td>
              <td>{lamp0info.et}</td>
            </tr>
            <tr>
              <td>api</td>
              <td>{lamp0info?.api}</td>
            </tr>
            <tr>
              <td>aei</td>
              <td>{lamp0info?.aei}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Lamp1;
