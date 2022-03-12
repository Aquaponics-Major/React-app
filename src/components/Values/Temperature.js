import { useState, useEffect } from "react";
import firebase from "../../util/firebase";

const Temperature = () => {
  const [dhtValueT, getDHTVT] = useState(); //Temperature
  useEffect(() => {
    const valueRef = firebase.database().ref();
    valueRef.on("value", (snapshot) => {
      const dht_Value_Temperature = snapshot.val().DHT_value_Temperature;
      const dhtValueT = dht_Value_Temperature;
      getDHTVT(dhtValueT);
      console.log("DHT->", dhtValueT);
    });
  }, []);

  return (
    <div className="box">
      <div className="right-side">
        <div className="box-topic">Temperature</div>
        <div className="number">
          {" "}
          <span>{dhtValueT}</span>
        </div>
      </div>
      <i className="bx bx-cart cart four"></i>
    </div>
  );
};

export default Temperature;
