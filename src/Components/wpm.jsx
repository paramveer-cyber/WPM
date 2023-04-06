import React from 'react'
import { Link } from 'react-router-dom'

export default function WPM(){
  let url = window.location.href
  let new_arr = url.split("+")
  return (
    <>
      <div className='circles'>
        <div className='circle1'></div>
        <div className='circle2'></div>
        <div className='circle3'></div>
      </div>
      <div className="line">
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
        <div className='line4'></div>
        <div className='line5'></div>
        <div className='line6'></div>
      </div>
      <div className="text">
        <p className='crect'>{new_arr[1].split("=")[1]}</p>
        <p className='crect_char'>Correct Words</p>
        <p className='wron'>{new_arr[2].split("=")[1]}</p>
        <p className='wron_char'>Incorrect Words</p>
        <p className='wpm_'>{new_arr[3].split("=")[1]}</p>
        <p className='wpm_char'>WPM</p>
      </div>
      <Link to={"/"}><button className="btn btn-light btnn" id="btn" type='button'>Retest?</button></Link>
    </>
  )
}
