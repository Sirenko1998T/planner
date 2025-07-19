import NameEvent from "../input/eventName"
import Participants from "../select/participants"
import SelectDays from "../select/day"
import SelectTimes from "../select/time"

export default function EventPage() {
   return (
      <div>
         <NameEvent />
         <Participants />
         <SelectDays />
         <SelectTimes />
      </div>
   )
}