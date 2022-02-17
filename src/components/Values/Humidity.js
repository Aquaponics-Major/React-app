import { useState, useEffect } from "react";
import firebase from "../../util/firebase";

const Humidity = () => {
  const [dhtValueH, getDHTVH] = useState(); //Humidity

  useEffect(() => {
    const valueRef = firebase.database().ref();
    valueRef.on("value", (snapshot) => {
      const dht_Value__Humidity = snapshot.val().DHT_value_Humidity;

      const dhtValueH = dht_Value__Humidity;
      getDHTVH(dhtValueH);

      console.log("DHT->", dhtValueH);
    });
  }, []);

  return (
    <div className="box-3 box">
      <div className="right-side">
        <div className="box-topic">Humidity</div>
        <div className="number">
          {" "}
          <span>{dhtValueH}</span>
        </div>
      </div>
      <i className="bx bxs-cart-download cart four"></i>
    </div>
  );
};

export default Humidity;
