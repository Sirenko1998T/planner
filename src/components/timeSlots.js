let timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',]
export { timeSlots }
export default function TimeSlots() {

   return (
      <div className="time-slots">
         {timeSlots.map((i) => (
            <div className="time-slots__timeslot" key={i}>{i}</div>
         ))}
      </div>
   )
}