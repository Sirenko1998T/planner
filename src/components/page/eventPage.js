import NameEvent from "../input/eventName"
import Participants from "../select/participants"
import SelectDays from "../select/selectDay"
import SelectTimes from "../select/selectTime"
import Cancel from "../button/cancel"
import Create from "../button/create"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function EventPage() {
   let navigate = useNavigate();
   let [nameEvent, setNameEvent] = useState('');
   let [participants, setParticipants] = useState(null);
   let [selectDays, setselectDays] = useState(null);
   let [selectTimes, setselectTimes] = useState(null);
   let [create, setCreate] = useState(false)

   return (
      <div className='event-page'>
         <form className="new-event-form">
            <div className="form-name-event">
               <label> Name off the event:</label>
               <NameEvent value={nameEvent} onChange={(e) => setNameEvent(e.target.value)} />
            </div>
            <div className="form-participants"> <label>Participants:</label>
               <Participants onChange={(e) => setParticipants(e.target.value)} /></div>
            <div className="form-day"> <label>Day:</label>
               <SelectDays onChange={(e) => setselectDays(e.target.value)} /></div>
            <div className="form-time"> <label>Time:</label>
               <SelectTimes onChange={(e) => setselectTimes(e.target.value)} /></div>

         </form>


         <div className="event-page-action-btn"><Create onClick={() => {

            let submitData = {
               id: Date.now(),
               nameEvent: nameEvent,
               participants: participants,
               selectDays: selectDays,
               selectTimes: selectTimes,
            }
            let savedData = JSON.parse(localStorage.getItem('submitData'));
            if (!Array.isArray(savedData)) {
               savedData = [];
            }
            let error = savedData.some((event) => event.selectDays === selectDays && event.selectTimes === selectTimes);
            if (error) {
               alert('error')
            }
            savedData.push(submitData);
            localStorage.setItem('submitData', JSON.stringify(savedData))
            setCreate(!create);

            navigate('/')
         }} />

            <Cancel /></div>

      </div>
   )
}