let participants = [{ name: 'Dmitriy' }, { name: 'Andriy' }, { name: 'Lisa' }, { name: 'Oleg' }];
export { participants }
export default function Participants({ onChange }) {
   return (
      <div>

         <select className="select-name" name='participants' onChange={onChange}>
            {participants.map((i) => (
               <option className=" option-name" value={i.name} key={i.name} >{i.name}</option>
            ))}
         </select>
      </div>
   )
}