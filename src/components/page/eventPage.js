import NameEvent from "../input/eventName"
import Participants from "../select/participants"
import SelectDays from "../select/selectDay"
import SelectTimes from "../select/selectTime"
import Cancel from "../button/cancel"
import Create from "../button/create"

export default function EventPage() {

   return (
      <div className='event-page'>
         <NameEvent />
         <Participants />
         <SelectDays />
         <SelectTimes />
         <Cancel />
         <Create />
      </div>
   )
}