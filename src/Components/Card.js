import React from 'react'

function Card(props) {
  return (
    <div>
      <div class="ag-courses-item_bg"></div>
      <div className="ag-courses-item_title">
            {props.topic}
      </div>
  </div>
  )
}

export default Card