
import Days from "./days"
import TimeSlots from "./timeSlots"
import EmptyCells from "./emptyCells"
import NewEvent from "./button/newEvent"
import { useEffect, useState } from "react"
export default function CalendarLayout() {
   let [data, setData] = useState([]);

   useEffect(() => {
      let submitData = localStorage.getItem('submitData');
      if (submitData) {
         let parsed = JSON.parse(submitData);
         setData(Array.isArray(parsed) ? parsed : [parsed]);
      }


   }, [])
   let updateStorage = (newData) => {
      localStorage.setItem("submitData", JSON.stringify(newData));
      setData(newData)
   }
   return (
      <div className="calendar">
         <NewEvent />
         <div className="calendar-layout">
            <Days />
            <div className="wrapper-slot">

               <TimeSlots />
               <EmptyCells appointments={data} updateStorage={updateStorage} />

            </div>

         </div>

      </div>
   )
}