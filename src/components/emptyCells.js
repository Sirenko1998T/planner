let emptyCells = Array.from({ length: 45 })

export default function EmptyCells() {

   return (
      <div className="empty-cells">
         {emptyCells.map((_, index) => (
            <div key={index} className="empty-cells__empty-cell" ></div>
         ))}


      </div>
   )
}