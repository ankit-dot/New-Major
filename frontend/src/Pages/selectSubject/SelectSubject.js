import React from 'react'

import Sidebar from '../../Components/Sidebar'
import Navbar2 from '../../Components/Navbar2'

import SubjectHero from './SubjectHero'
import { computerScienceSubjects } from "../../Data";

const SelectSubject = () => {
  return (
    <>
    <div className = "h-[calc(100vh - 80px)] relative ">
    <Sidebar/>
    </div>
  <div className = "notesContainer z-10">

 
    <Navbar2/>
    <SubjectHero computerScienceSubjects = {computerScienceSubjects} heading = "Subject"
    />
    
    </div>

    </>
  )
}

export default SelectSubject