import React from 'react'
import Navbar from '../../Components/Navbar'
import '../../App.css'
import Sidebar from '../../Components/Sidebar'
import Navbar2 from '../../Components/Navbar2'
import NotesHero from './NotesHero'


const Notes = () => {
  return (
    <>
    <div className = "h-[calc(100vh - 80px)] relative ">
    <Sidebar/>
    </div>
  <div className = "notesContainer z-10">

 
    <Navbar2/>
    <NotesHero/>
    
    </div>

    </>
  )
}

export default Notes