import React, { useState, useEffect } from "react";
import firebase from "../util/firebase";


export default function TodoList() {
  const [ultrasonicValue, getUSV] = useState();
  const [phValue, getPHV] = useState();
  const [tdsValue, getTDSV] = useState();
  const [dhtValueH, getDHTVH] = useState();    //Humidity
  const [dhtValueT, getDHTVT] = useState();     //Temperature
 
  

  useEffect(() => {
    const valueRef = firebase.database().ref();
  

    valueRef.on("value", (snapshot) => {
      const dht_Value_Temperature = snapshot.val().DHT_value_Temperature;
      const dht_Value__Humidity = snapshot.val().DHT_value_Humidity;
      const ph_Value = snapshot.val().ph_value;
      const tds_Value = snapshot.val().TDS_value;
      const ultrasonic_Value = snapshot.val().ultrasonic_value;
      
      
      

      const dhtValueT = dht_Value_Temperature;
      const dhtValueH = dht_Value__Humidity;
      const phValue = ph_Value;
      const tdsValue = tds_Value;
      const ultrasonicValue = ultrasonic_Value;
     
        
  
     
      getDHTVT(dhtValueT);
      getDHTVH(dhtValueH);
      getTDSV(tdsValue);
      getPHV(phValue);
      getUSV(ultrasonicValue);
      console.log("DHT->", dhtValueT);
      console.log("ultrasonic->", ultrasonicValue);
      console.log("PH->", phValue);
      console.log("TDS->", tdsValue);
    });
  }, []);

  return (
    <div className="title">


      <div className="home-content">
        <div className="overview-boxes">
          <div className="box-1 box">
            <div className="right-side">
              <div className="box-topic">Turbidity</div>
              <div className="number">
                <span>{tdsValue}</span>
              </div>
            </div>
            <i className="bx bx-cart-alt cart"></i>
          </div>
          <div className="box-2 box">
            <div className="right-side">
              <div className="box-topic">pH </div>
              <div className="number">
                <span>{phValue}</span>
              </div>
            </div>
            <i className="bx bxs-cart-add cart two "></i>
          </div>
          <div className="box-3 box">
            <div className="right-side">
              <div className="box-topic">Ultrasonic</div>
              <div className="number">
                {" "}
                <span>{ultrasonicValue}</span>
              </div>
            </div>
            <i className="bx bx-cart cart three"></i>
          </div>
          <div className="box-3 box">
            <div className="right-side">
              <div className="box-topic">Temperature</div>
              <div className="number">
                {" "}
                <span>{dhtValueT}</span>
              </div>
            </div>
            <i className="bx bx-cart cart four"></i>
          </div>
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
         
        </div>
      </div>
    </div>
  );
}





