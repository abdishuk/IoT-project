import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function LampAll_cin() {
  const [lamp0cin, setlamp0cin] = useState({});
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    async function getLamp0Info() {
      const { data } = await axios.get(
        "/lamps/lamp/desc/cin/6121565cb3981420bc939ee0"
      );
      console.log(data);
      setlamp0cin(data.m2mcin);
    }

    getLamp0Info();

    if (lamp0cin) {
      setFetched(true);
      // console.log(lamp0cin);
    }
  }, [lamp0cin, setFetched]);
  const SwitchOnHandler = async () => {
    const res = await axios.post(
      "http://localhost:8282/~/mn-cse/mn-name/LAMP_0?op=setOn&lampid=LAMP_0",
      {
        headers: {
          "x-m2m-origin": "admin:admin",
        },
      }
    );
    console.log(res);
  };
  return (
    <div>
      <Link to="/lamp_All/descriptor">
        <button class="btn btn-primary" style={{ margin: "20px" }}>
          Back
        </button>
      </Link>{" "}
      <br />
      <h3>Lamp All cin_862049947</h3>
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
              <td>{lamp0cin?.rn}</td>
            </tr>
            <tr>
              <td>ty</td>
              <td>{lamp0cin?.ty}</td>
            </tr>
            <tr>
              <td>ri</td>
              <td>{lamp0cin?.ri}</td>
            </tr>

            <tr>
              <td>pi</td>
              <td>{lamp0cin?.pi}</td>
            </tr>
            <tr>
              <td>ct</td>
              <td>{lamp0cin?.ct}</td>
            </tr>
            <tr>
              <td>lt</td>
              <td>{lamp0cin?.lt}</td>
            </tr>

            <tr>
              <td>st</td>
              <td>{lamp0cin?.st}</td>
            </tr>

            <tr>
              <td>cnf</td>
              <td>{lamp0cin?.cnf}</td>
            </tr>

            <tr>
              <td>cs</td>
              <td>{lamp0cin?.cs}</td>
            </tr>
            <tr>
              <td>con</td>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <button onClick={SwitchOnHandler}>Switch On</button>
                    </td>
                    <td>/mn-cse/mn-name/Lamp_All?op=setOn&lampid=Lamp_All</td>
                  </tr>
                  <tr>
                    <td>
                      <button onClick={SwitchOnHandler}>Switch Off</button>
                    </td>
                    <td>/mn-cse/mn-name/Lamp_All?op=setOff&lampid=Lamp_All</td>
                  </tr>
                  <tr>
                    <td>
                      <button onClick={SwitchOnHandler}>getState</button>
                    </td>
                    <td> /mn-cse/mn-name/Lamp_All/DATA/la</td>
                  </tr>
                  <tr>
                    <td>
                      <button onClick={SwitchOnHandler}>Toggle</button>
                    </td>
                    <td> /mn-cse/mn-name/LAMP_All?op=toggle&lampid=LAMP_All</td>
                  </tr>
                </tbody>
              </Table>
            </tr>
          </tbody>
        </Table>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default LampAll_cin;
