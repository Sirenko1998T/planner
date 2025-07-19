import Days from "./days"
import TimeSlots from "./timeSlots"
import EmptyCells from "./emptyCells"
import NewEvent from "./button/newEvent"
export default function CalendarLayout() {
   return (
      <div className="calendar">
         <NewEvent />
         <div className="calendar-layout">
            <Days />
            <div className="wrapper-slot">

               <TimeSlots />
               <EmptyCells />
            </div>

         </div>
      </div>
   )
}