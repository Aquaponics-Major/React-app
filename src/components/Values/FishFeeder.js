import { useState, useEffect } from "react";
import firebase from "../../util/firebase";

const  FishFeeder = () => {
  const [servoStatus, setFeeder] = useState(); //Humidity


  const OFF=() =>{
      const feederRef = firebase.database().ref();;
      feederRef.update({
          
        ServoStatus: false,

      });
  };
  const ON = () => {
    const feederRef = firebase.database().ref();;

    feederRef.update({
        ServoStatus: true,
    });
  };


  useEffect(() => {
    // var checkbox = document.querySelector('input[type="checkbox"]');

    const valueRef = firebase.database().ref("ServoStatus");

    
    valueRef.on("value", (snapshot) => {
    
      const ServoStatus = snapshot.val();

      const servoStatus = ServoStatus;
      setFeeder(ServoStatus);

      console.log("Feeder->", ServoStatus);
    });

   
  }, []);

  return (

    <div className="box-3 box">
    <div className="right-side">
      <div className="box-topic">Servo Toggle</div>
      <div className="number">
        {" "}
        <span>
            <button className="ON" onClick={servoStatus===true? OFF: ON}>
            {servoStatus===true? "OFF": "ON"}
            </button>
            
            
           
      </span>
      </div>
    </div>
    <i className="bx bxs-cart-download cart four"></i>
  </div>

   
  
  
  );
};

export default FishFeeder;