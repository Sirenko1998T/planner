let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
export default function SelectDays({ onChange }) {
   return (
      <div>

         <select name='days' onChange={onChange} className="select-days" >
            {days.map((i) => (
               <option className="option-days" value={i} key={i} >{i}</option>
            ))}
         </select>
      </div>
   )
}