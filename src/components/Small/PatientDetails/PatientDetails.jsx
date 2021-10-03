import React from 'react'
import './PatientDetails.css'
function PatientDetails({obj,idx,isTop,isInvoice}) {
    // console.log(idx,obj)
    return (
        <div className={`${isInvoice? 'list_item_body_bw':'list__item__body'} ${isTop&&!isInvoice ?"top":''}`} >
            <div className="idx">
                {idx==0?'Index':idx}
            </div>
            
            <div className="name">
                {obj.name}
            </div>
            
            <div className="timeslot">
                {obj.age}
            </div>
            
            <div className="phone">
                {obj.phone}
            </div>
        </div>
    )
}

export default PatientDetails
