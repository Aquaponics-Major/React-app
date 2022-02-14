import React, { useState, useEffect } from "react";
import firebase from "../util/firebase";


export default function TodoList() {
  const [ultrasonicValue, getUSV] = useState();
  const [phValue, getPHV] = useState();
  const [tdsValue, getTDSV] = useState();
  const [dhtValue, getDHTV] = useState();
 
  

  useEffect(() => {
    const valueRef = firebase.database().ref();
  

    valueRef.on("value", (snapshot) => {
      const dht_Value = snapshot.val().DHT_value;
      const ph_Value = snapshot.val().ph_value;
      const tds_Value = snapshot.val().TDS_value;
      const ultrasonic_Value = snapshot.val().ultrasonic_value;
      
      // console.log(ultrasonicValue);
      

      const dhtValue = dht_Value;
      const phValue = ph_Value;
      const tdsValue = tds_Value;
      const ultrasonicValue = ultrasonic_Value;
     
        
  
     
      getDHTV(dhtValue);
      getTDSV(tdsValue);
      getPHV(phValue);
      getUSV(ultrasonicValue);
      console.log("DHT->", dhtValue);
      console.log("ultrasonic->", ultrasonicValue);
      console.log("PH->", phValue);
      console.log("TDS->", tdsValue);
    });
  }, []);

  return (
    <div className="title">
      <h1>Sensor List</h1>
      <p>ultrasonic: <span>{ultrasonicValue}</span></p>
      <p>PH: <span>{phValue}</span></p>
      <p>TDS value: <span>{tdsValue}</span></p>
      <p>DHT: <span>{dhtValue}</span></p>
    </div>
  );
}
