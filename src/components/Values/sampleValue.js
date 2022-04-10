import { useState, useEffect } from "react";
import firebase from "../../util/firebase";

const HumidityEx = () => {
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

  return dhtValueH;
};

export default HumidityEx;
