let emptyCells = Array.from({ length: 45 })
import { workDays } from "./days"
import { timeSlots } from "./timeSlots"
export default function EmptyCells({ appointments }) {
   let numberCoolumns = 5;

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
                  {appointment ? appointment.nameEvent : ''}

               </div>
            )
         })}


      </div>
   )
}