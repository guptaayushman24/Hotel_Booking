import React from 'react'
import { useEffect,useState } from 'react'
import './Order_History.css'
function Order_History() {
  return (
    <div class="box">
   
    <div class="heading">Booking Detail</div>

   
    <div class="details">
    <div class="detail-item">Hotel Name
    <div class="detail-content">Grand Palace Hotel</div>
    </div>
    <div class="detail-item">Price
    <div class="detail-content">Rs10005454</div></div>
        
    <div class="detail-item">Name
    <div class="detail-content">Alice</div>
    </div>
    <div class="detail-item">ChecinDate
    <div class="detail-content">Thu 26Feb 2024</div>
    </div>
    <div class="detail-item">ChecoutDate
    <div class="detail-content">Thu 28May 2024</div>
    </div>
    </div>
</div>
  )
}

export default Order_History
