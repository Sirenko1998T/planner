let days = ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
let workDays = days.slice(1)
export { workDays }
export default function Days() {

   return (
      <div className="days">
         {days.map((i) => (
            <div className="days__day" key={i}>{i}</div>
         ))}
      </div>
   )
} 