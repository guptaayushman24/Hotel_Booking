import React from 'react'
import './Blog.css'
function Blog() {
  return (
    <div>
      <div className='heading'>
        <span className='spanadd'>Add</span> <span className='spanblog'>Blog</span>
      </div>
      <div className='parenttitle'>
      <div className='title'>
        Title
      </div>
      <div className='titlecontent'>
        <input type='text' className='titleinput' placeholder='My Blog' id='myblog'></input>
      </div>
   
      </div>
      <div className='parenttitle'>
      <div className='title'>
        Description
      </div> 
      <div className='titlecontent'>
        <textarea placeholder='Write Blog' cols="40" rows="5" id='textarea'></textarea>
      </div>
   
      </div>

      <div className='postblog'>
        <button className='postblogbutton'>Post Blog</button>
      </div>
        </div>
    
  )
}

export default Blog
