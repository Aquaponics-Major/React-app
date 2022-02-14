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
      {/* <h1>Sensor List xyz</h1>
      <p>
        ultrasonic: <span>{ultrasonicValue}</span>
      </p>
      <p>
        PH: <span>{phValue}</span>
      </p>
      <p>
        TDS value: <span>{tdsValue}</span>
      </p>
      <p>
        DHT: <span>{dhtValue}</span>
      </p> */}

      <div class="home-content">
        <div class="overview-boxes">
          <div class="box">
            <div class="right-side">
              <div class="box-topic">TDS sensor</div>
              <div class="number">
                <span>{tdsValue}</span>
              </div>
            </div>
            <i class="bx bx-cart-alt cart"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">ph reading</div>
              <div class="number">
                <span>{phValue}</span>
              </div>
            </div>
            <i class="bx bxs-cart-add cart two"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">ultrasonic</div>
              <div class="number">
                {" "}
                <span>{ultrasonicValue}</span>
              </div>
            </div>
            <i class="bx bx-cart cart three"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">DHT</div>
              <div class="number">
                <span>{dhtValue}</span>
              </div>
            </div>
            <i class="bx bxs-cart-download cart four"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
