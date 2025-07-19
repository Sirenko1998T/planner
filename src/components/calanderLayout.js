import Days from "./days"
import TimeSlots from "./timeSlots"
import EmptyCells from "./emptyCells"
export default function CalendarLayout() {
   return (
      <div className="calendar-layout">
         <Days />
         <div className="wrapper-slot">

            <TimeSlots />
            <EmptyCells />
         </div>

      </div>
   )
}