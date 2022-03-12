import { useState, useEffect } from "react";
import firebase from "../../util/firebase";

const  FishFeeder = () => {
  const [ServoStatus, setFeeder] = useState(); //Humidity


  const OFF=() =>{
      const feederRef = firebase.database().ref();;
      feederRef.update({
          
        servoStatus: false,

      });
  };
  const ON = () => {
    const feederRef = firebase.database().ref();;

    feederRef.update({
        servoStatus: true,
    });
  };


  useEffect(() => {
    

    const valueRef = firebase.database().ref("servoStatus");

    
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
            <button className="ON" onClick={ServoStatus===true? OFF: ON}>
            {ServoStatus===true? "ON": "OFF"}
            </button>
            
            
           
      </span>
      </div>
    </div>
    <i className="bx bxs-cart-download cart four"></i>
  </div>

   
  
  
  );
};

export default FishFeeder;
