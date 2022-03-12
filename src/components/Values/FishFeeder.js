import { useState, useEffect } from "react";
import firebase from "../../util/firebase";

const FishFeeder = () => {
  const [ServoStatus, setFeeder] = useState(); //Humidity

  const OFF = () => {
    const feederRef = firebase.database().ref();
    feederRef.update({
      servoStatus: false,
    });
  };
  const ON = () => {
    const feederRef = firebase.database().ref();

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
    <button className="box" onClick={ServoStatus === true ? OFF : ON}>
      <div className="right-side">
        <div className="box-topic">Servo Toggle</div>
        <div className="number">
          {" "}
          <span>{ServoStatus === true ? "ON" : "OFF"}</span>
        </div>
      </div>
    </button>
  );
};

export default FishFeeder;
