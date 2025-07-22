export default function ConfirmationDialog({ nameEvent, confirm, cancel }) {
   return (
      <div className="popup-delete">
         <p>Are you sure you want to delete {nameEvent}  event ?</p>
         <button className="popup-cancel" onClick={cancel}>No</button>
         <button className="popup-confirm" onClick={confirm}>Yes</button>
      </div>
   )
}