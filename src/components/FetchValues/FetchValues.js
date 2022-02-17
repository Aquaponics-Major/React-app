import React from "react";
import {
  Ultrasonic,
  Temperature,
  Humidity,
  Ph,
  Turbidity,
} from "../Values/index";
export default function FetchValues() {
  return (
    <div className="title">
      <div className="home-content">
        <div className="overview-boxes">
          <Temperature />
          <Humidity />
          <Ph />
          <Turbidity />
          <Ultrasonic />
        </div>
      </div>
    </div>
  );
}
