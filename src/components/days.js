let days = ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']

export default function Days() {

   return (
      <div className="days">
         {days.map((i, index) => (
            <div className="days__day" key={index}>{i}</div>
         ))}
      </div>
   )
} 