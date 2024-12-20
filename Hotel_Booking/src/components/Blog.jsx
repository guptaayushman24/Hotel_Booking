import React, { useState } from 'react'
import './Blog.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Blog() {
  const navigate = useNavigate();
  const [writtername,setwritternmae] = useState('');
  const [title, setitle] = useState('');
  const [blog, setblog] = useState('');
  async function postblog() {
    try {
      const response = await axios.post('https://hotel-booking-1lqf.onrender.com/blogpost', {
        WritterName:writtername,
        Title: title,
        Blog: blog
      })
      if (response.status == 203) {
        
        return alert('Writter Name,Title and Author is required');
      }
      if (response.status==204){
        return alert('Writter Name is required');
      }
      if (response.status == 201) {

        return alert('Title is required');
      }
      if (response.status == 202) {
        return alert('Blog is required');
      }
      navigate('/seeallblog');
    }
    catch (err) {
      console.log(err.message);
    }

  }

  return (
    <div>
      <div className='heading'>
        <span className='spanadd'>Add</span> <span className='spanblog'>Blog</span>
      </div>
      <div className='parenttitle'>
      <div className='title'>
          Writter Name
        </div>
        <div className='titlecontent'>
          <input type='text' className='titleinput' placeholder='My Blog' id='myblog' onChange={(e) => setwritternmae(e.target.value)}></input>
        </div>
        <div className='title'>
          Title
        </div>
        <div className='titlecontent'>
          <input type='text' className='titleinput' placeholder='My Blog' id='myblog' onChange={(e) => setitle(e.target.value)}></input>
        </div>

      </div>
      <div className='parenttitle'>
        <div className='title'>
          Description
        </div>
        <div className='titlecontent'>
          <textarea placeholder='Write Blog' cols="40" rows="5" id='textarea' onChange={(e) => setblog(e.target.value)}></textarea>
        </div>

      </div>

      <div className='postblog'>
        <button className='postblogbutton' onClick={postblog}>Post Blog</button>
      </div>
    </div>

  )
}

export default Blog
