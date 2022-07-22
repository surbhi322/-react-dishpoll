import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [firstRank, setfirstRank] = useState([]);
  const [secondRank, setsecondRank] = useState([]);
  const [thirdRank, setthirdRank] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(
          "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
        )
        .then((res) => {
          setData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const rank1 = data.filter(
      (item) => item.id === JSON.parse(localStorage.getItem("rank1"))
    );

    const rank2 = data.filter(
      (item) => item.id === JSON.parse(localStorage.getItem("rank2"))
    );

    const rank3 = data.filter(
      (item) => item.id === JSON.parse(localStorage.getItem("rank3"))
    );

    setfirstRank(rank1);
    setsecondRank(rank2);
    setthirdRank(rank3);
  }, [data]);

  const others = data.filter(
    (item) =>
      item.id !== JSON.parse(localStorage.getItem("rank3")) &&
      item.id !== JSON.parse(localStorage.getItem("rank2")) &&
      item.id !== JSON.parse(localStorage.getItem("rank1"))
  );

  const handler = () => {
    navigate("/home");
  };

  return (
    <div>
      <button
        className="btn btn-dark "
        onClick={() => {
          handler();
        }}
      >
        Back Home
      </button>
      <p className="fs-2 text-center mt-3"> Results </p>

      <p className="fs-5 text-center mt-4"> Top Three </p>
      {firstRank.length > 0 ? (
        <div>
          <label className="me-4">{firstRank[0].dishName}</label>
          <progress value="30" max="100" className="me-4"></progress>
          30 Points
        </div>
      ) : null}
      {secondRank.length > 0 ? (
        <div>
          <label className="me-4">{secondRank[0].dishName}</label>
          <progress value="20" max="100" className="me-4"></progress>
          20 Points
        </div>
      ) : null}
      {thirdRank.length > 0 ? (
        <div>
          <label className="me-4">{thirdRank[0].dishName}</label>
          <progress value="10" max="100" className="me-4"></progress>
          10 Points
        </div>
      ) : null}

      <p className="fs-5 text-center mt-4"> Others </p>
      {others.length > 0
        ? others.map((item, index) => (
            <div key={index}>
              <label className="me-2">{item.dishName}</label>
              <progress value={0} max="100" className="me-4"></progress>0 Points
            </div>
          ))
        : null}
    </div>
  );
}

export default Results;
