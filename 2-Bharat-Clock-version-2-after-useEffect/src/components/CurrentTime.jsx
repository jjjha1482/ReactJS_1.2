import React from "react";
import { useState, useEffect } from "react";


function CurrentTime() {

      const [time, setTime] = useState(new Date());

      useEffect(() => {
            const intervalid = setInterval(() => {
                  setTime(new Date());
            }, 1000);

            return () => {
                  clearInterval(intervalid);
                  // console.log("cancelled interval for cleanup")
            }
      }, []);

      return (
            <p>this is current time : {time.toLocaleDateString()} , {time.toLocaleTimeString()}</p>
      )
}


export default CurrentTime;