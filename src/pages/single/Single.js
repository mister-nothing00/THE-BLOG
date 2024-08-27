import React from 'react'
import "./single.css"
import Sidebar from "../../componets/sidebar/Sidebar"
import SinglePost from '../../componets/singlePost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
       <SinglePost/>
       <Sidebar/>
    </div>
  )
}
