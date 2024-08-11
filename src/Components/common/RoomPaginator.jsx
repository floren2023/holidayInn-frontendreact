import React from 'react'

const RoomPaginator = ({currentPage,totalPages,onPageChange}) => {
    const pageNumbers=Array.from({length:totalPages}, ( __,i)=>i+1)
  return (
    <div>
      <nav>
        <ul className="pagination justify-content-center">
    {pageNumbers.map((pageNumber)=>{
        <li key={pageNumber}
         className={ `page-item ${currentPage===pageNumber? "active":""}`}
         >
          <button className="page-link" onClick={()=>onPageChange(pageNumber)}>{pageNumber} </button>
         </li>
    })}
        </ul>
      </nav>
    </div>
  )
}

export default RoomPaginator
