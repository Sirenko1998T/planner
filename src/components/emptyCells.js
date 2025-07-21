let emptyCells = Array.from({ length: 45 })
import { workDays } from "./days"
import { timeSlots } from "./timeSlots"
import Remove from "./button/remove";
import ConfirmationDialog from "./confirmationDialog";
import { useState } from "react";
export default function EmptyCells({ appointments, updateStorage }) {

   let numberCoolumns = 5;
   let [remove, setRemove] = useState(null);
   let handleClick = (appointment) => {
      setRemove(appointment);
   }
   let confirm = () => {
      let update = appointments.filter((i) => i !== remove);
      updateStorage(update);
      setRemove(null);
   }
   let cancel = () => {
      setRemove(null);
   }

   return (
      <div className="empty-cells">
         {emptyCells.map((_, index) => {
            let row = Math.floor(index / numberCoolumns);
            let col = index % numberCoolumns;
            let currentDay = workDays[col];
            let currentTime = timeSlots[row];
            let appointment = appointments.find((a) => a.selectDays === currentDay && a.selectTimes === currentTime);
            return (
               <div key={index} className="empty-cells__empty-cell">
                  {appointment ? (<>{appointment.nameEvent}  <Remove onClick={() => handleClick(appointment)} /></>) : ''}

               </div>
            )
         })}

         {remove && <ConfirmationDialog nameEvent={appointments.nameEvent} confirm={confirm} cancel={cancel} />}
      </div>

   )
}