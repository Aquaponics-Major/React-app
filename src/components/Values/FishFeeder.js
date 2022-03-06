import { useState, useEffect } from "react";
import firebase from "../../util/firebase";

function FishFeeder(val) {
  const [servoStatus, setFeeder] = useState(); //Humidity


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

//   const handleChange = (e) => {
//     // const feederRef = firebase.database().ref("servoStatus");;

    
//   }
  useEffect(() => {
    // var checkbox = document.querySelector('input[type="checkbox"]');

    const valueRef = firebase.database().ref("servoStatus");

    
    valueRef.on("value", (snapshot) => {
    
      const servostatus = snapshot.val();

      const servoStatus = servostatus;
      setFeeder(servoStatus);

      console.log("Feeder->", servoStatus);
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

   
    // <div>
      

    //   <button className="ON" onClick={ON}>
    //     ON
    //   </button>
    //   <button className="OFF" onClick={OFF}>
    //       OFF
    //     </button>

     
    // </div>
  
  );
};

export default FishFeeder;
