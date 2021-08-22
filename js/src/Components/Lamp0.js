import { React, useEffect, useState } from "react";
import Axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
function Lamp0() {
  const [lamp0info, setlamp0info] = useState({});
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    async function getLamp0Info() {
      const { data } = await Axios.get("/lamps/lamp/6121565cb3981420bc939ed0");
      setlamp0info(data.m2mae);
    }

    getLamp0Info();

    if (lamp0info) {
      setFetched(true);
    }
  }, [lamp0info, setFetched]);
  if (fetched) {
    console.log(lamp0info);
  }

  return (
    <div class="px-2">
      <Link to="/">
        <button class="btn btn-primary" style={{ margin: "20px" }}>
          Back
        </button>
      </Link>
      <Link to="/lamp0/descriptor">
        <li>Click to see Lamp0 Descriptor</li>
        <br />
      </Link>
      <h3>Lamp 0 Info</h3>
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

export default Lamp0;
