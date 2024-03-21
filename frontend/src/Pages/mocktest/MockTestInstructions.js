import React from 'react'
import './MockPage.css'
import Navbar2 from '../../Components/Navbar2'
import Sidebar from '../../Components/Sidebar'

const MockTestInstructions = () => {
  return (<>


    <Navbar2/>
    <Sidebar/>
    <div className='instruction_container'>
    <h1 className='title text-light'>Mock Test</h1>

    <ol>
        <li>1. You will be asked 10 questions one after another.</li>
        <li>2. 10 points is awarded for the correct answer.</li>
        <li>3. Each question has four options. You can choose only one options.</li>
        <li>4. You can review and change answers before the quiz finish.</li>
        <li>5. The result will be declared at the end of the quiz.</li>
    </ol>

    <form id="form">
        <input className="userid" type="text" placeholder='Username*' />
    </form>

    <div className='start'>
        <a className='btn' >Start Quiz</a>
    </div>

</div>
</>
  )
}

export default MockTestInstructions