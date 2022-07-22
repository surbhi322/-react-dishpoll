import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DishCard from "./DishCard";

function Pollpage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [third, setThird] = useState(null);

  useEffect(() => {
    try {
      axios
        .get(
          "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
        )
        .then((res) => {
          setData(res.data);
          // console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleRank1 = (e) => {
    if (e !== second && e !== third) {
      localStorage.setItem("rank1", e);
      setFirst(e);
    }
  };
  const handleRank2 = (e) => {
    if (e !== first && e !== third) {
      localStorage.setItem("rank2", e);
      setSecond(e);
    }
  };
  const handleRank3 = (e) => {
    if (e !== second && e !== first) {
      localStorage.setItem("rank3", e);
      setThird(e);
    }
  };

  const submitHandler = () => {
    navigate("/results");
  };

  return (
    <>
      <h1 className="text-center ">SELECT TOP 3 FAVOURITE DISHES</h1>
      {first !== null && second !== null && third !== null ? (
        <button className="btn btn-outline-dark mb-4" onClick={submitHandler}>
          Submit
        </button>
      ) : (
        <div />
      )}
      <DishCard
        data={data}
        first={first}
        second={second}
        third={third}
        handleRank1={handleRank1}
        handleRank2={handleRank2}
        handleRank3={handleRank3}
        
      />
    </>
  );
}

export default Pollpage;
