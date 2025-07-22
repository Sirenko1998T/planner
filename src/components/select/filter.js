import { participants } from "./participants";
export default function Filter({ onChange }) {
   return (
      <select onChange={onChange}>
         <option value={'All members'} key={'All members'} >All members</option>
         {participants.map((i) => (
            <option key={i.name} value={i.name}>{i.name}</option>
         ))}
      </select>
   )
}