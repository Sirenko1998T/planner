export default function ConfirmationDialog({ nameEvent, confirm, cancel }) {
   return (
      <div className="popup-delete">
         <p>Are you sure you want to delete {nameEvent}  event ?</p>
         <button onClick={cancel}>No</button>
         <button onClick={confirm}>Yes</button>
      </div>
   )
}