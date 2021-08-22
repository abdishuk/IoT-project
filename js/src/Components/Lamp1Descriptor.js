import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Lamp1Descriptor() {
  const [lamp0desc, setlamp0desc] = useState({});
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    async function getLampInfo() {
      const { data } = await axios.get(
        "/lamps/lamp/desc/6121565cb3981420bc939edc"
      );
      console.log(data);
      setlamp0desc(data.m2mcnt);
    }

    getLampInfo();

    if (lamp0desc) {
      setFetched(true);
      console.log(lamp0desc);
    }
  }, [lamp0desc, setFetched]);
  return (
    <div>
      <Link to="/lamp1">
        <button class="btn btn-primary" style={{ margin: "20px" }}>
          Back
        </button>
      </Link>{" "}
      <br />
      <Link to="/lamp1/descriptor/cin">
        <li>Click to see cin_862049947</li>
        <br />
      </Link>
      <h3>Lamp All Descriptor</h3>
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
              <td>{lamp0desc?.rn}</td>
            </tr>
            <tr>
              <td>ty</td>
              <td>{lamp0desc?.ty}</td>
            </tr>
            <tr>
              <td>ri</td>
              <td>{lamp0desc?.ri}</td>
            </tr>

            <tr>
              <td>pi</td>
              <td>{lamp0desc?.pi}</td>
            </tr>
            <tr>
              <td>ct</td>
              <td>{lamp0desc?.ct}</td>
            </tr>
            <tr>
              <td>lt</td>
              <td>{lamp0desc?.lt}</td>
            </tr>

            <tr>
              <td>et</td>
              <td>{lamp0desc.et}</td>
            </tr>

            <tr>
              <td>st</td>
              <td>{lamp0desc?.st}</td>
            </tr>
            <tr>
              <td>mni</td>
              <td>{lamp0desc?.mni}</td>
            </tr>
            <tr>
              <td>mbs</td>
              <td>{lamp0desc?.mni}</td>
            </tr>
            <tr>
              <td>mia</td>
              <td>{lamp0desc?.mia}</td>
            </tr>
            <tr>
              <td>cni</td>
              <td>{lamp0desc?.cni}</td>
            </tr>

            <tr>
              <td>ol</td>
              <td>{lamp0desc?.ol}</td>
            </tr>
            <tr>
              <td>la</td>
              <td>{lamp0desc?.la}</td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default Lamp1Descriptor;
