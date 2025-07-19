let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
export default function SelectDays({ onChange }) {
   return (
      <div>

         <select name='days' onChange={onChange} >
            {days.map((i) => (
               <option value={i} key={i} >{i}</option>
            ))}
         </select>
      </div>
   )
}