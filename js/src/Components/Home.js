import { React, useEffect, useState } from "react";
import Axios from "axios";
import { Table } from "react-bootstrap";
import "./Home.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Home() {
  const getStatusOfLamp = async (id) => {
    const { data } = await Axios.get(`/lamps/${id}`);
    console.log(data);
    return data;
  };

  const [lamp0State, setlamp0Status] = useState();
  const [lamp1State, setlamp1Status] = useState();
  const [lampAllState, setlampAllStatus] = useState(false);

  useEffect(async () => {
    let initial1 = await getStatusOfLamp("6121565cb3981420bc939ed8");
    let initial2 = await getStatusOfLamp("6121565cb3981420bc939eda");

    setlamp0Status(initial1);
    setlamp1Status(initial2);

    // console.log("initial1", initial1);
  }, []);
  /* const clickhandler = async () => {
    const data = await Axios.get(
      "http://localhost:8282/~/mn-cse/CAE610333489?rcn=5&lvl=1",
      {
        headers: {
          "x-m2m-origin": "admin:admin",
        },
      }
    );
    // lampinfo = data.m2mae;

u
    // console.log(data);
    // setDataFetched(true);
  };*/

  // let initialState = async () => {
  //   let lamp0Status = await getStatusOfLamp("6121565cb3981420bc939ed8");
  //   console.log("initialSate", lamp0Status);
  //   setlamp0Status(lamp0Status === "1" ? true : false);
  //   let lamp1Status = await getStatusOfLamp("6121565cb3981420bc939eda");
  //   setlamp1Status(lamp1Status === "1" ? true : false);
  // };
  // useEffect(() => {
  //   initialState();
  // }, [lamp0State, lamp1State]);

  const changeStatusOfLamp = async (id) => {
    if (id === "6121565cb3981420bc939ed8") {
      const { data } = await Axios.put(
        `/lamps/${id}?status=${!lamp0State ? 1 : 0}`
      );
      setlamp0Status(data.m2mcnt.st === "1" ? true : false);
      console.log(data);
      console.log(data.m2mcnt.st);
    } else if (id === "6121565cb3981420bc939eda") {
      const { data } = await Axios.put(
        `/lamps/${id}?status=${!lamp1State ? 1 : 0}`
      );
      setlamp1Status(data.m2mcnt.st === "1" ? true : false);
      console.log(data);
      console.log(data.m2mcnt.st);
    } else {
      const { data } = await Axios.put(
        `/lamps?status=${
          lamp0State === true && lamp1State === true ? 0 : !lampAllState ? 1 : 0
        }`
      );
      setlampAllStatus(data === 1 ? true : false);
      setlamp0Status(data === 1 ? true : false);
      setlamp1Status(data === 1 ? true : false);

      console.log(data);
    }
  };

  return (
    <div class="home">
      <h1>Dashboard</h1>
      <br />
      <h5>Click on a lamp below</h5>
      <h1>Lamp 0: {lamp0State ? "on" : "off"}</h1>
      <button
        class={lamp0State ? "on" : ""}
        onClick={() => changeStatusOfLamp("6121565cb3981420bc939ed8")}
      >
        <i class="fas fa-lightbulb fa-5x" id={lamp0State ? "on" : ""}></i>
        <br />
        <li>Lamp 0</li>
      </button>
      <br />
      <br />
      <h1>Lamp 1: {lamp1State ? "on" : "off"}</h1>
      <button
        class={lamp1State ? "on" : ""}
        onClick={() => changeStatusOfLamp("6121565cb3981420bc939eda")}
      >
        <i class="fas fa-lightbulb fa-5x" id={lamp1State ? "on" : ""}></i>
        <br />
        <li>Lamp 1</li>
      </button>
      <br />
      <br /> <br />
      <button onClick={() => changeStatusOfLamp("")}>
        <i class="fas fa-lightbulb fa-5x"></i>
        <br />
        <li>Switch All</li>
      </button>
      <ul>
        <Link to="/lamp0">
          <li> Lamp 0</li>
        </Link>
        <Link to="/lamp1">
          <li>Lamp 1</li>
        </Link>
      </ul>
    </div>
  );
}

export default Home;
