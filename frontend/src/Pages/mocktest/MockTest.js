import React, { useEffect, useRef, useState } from 'react'
import { QuizData } from './MockData';
import MockTestResult from './MockTestResult';
import './MockPage.css'
import Navbar2 from '../../Components/Navbar2';
import Sidebar from '../../Components/Sidebar';

function MockTest() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    const [timeRemaning, setTimeRemaning] = useState(15);
    const [nextRound, setNextRound] = useState(0);
    const timeRef = useRef(null);
    



    useEffect(() => {

        timeRef.current = setInterval(() => {
            setTimeRemaning(prevTime => prevTime - 1);
        },1000)

        return () => clearInterval(timeRef.current);
    }, [nextRound])

    useEffect(() => {
        if(timeRemaning <= 0){
            submitTest();
            
        }
    },[timeRemaning])

    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
        setTimeRemaning(15);
        setNextRound(prev => prev + 1);
    }

    const submitTest = () =>{
        setShowResult(true);
        clearInterval(timeRef.current);
    }
  return (
    <>
    <Navbar2/>
        <Sidebar/>
        <div className={`absolute right-6 top-[90px] text-2xl sm:right-2 sm:text-4xl`}>Time Remaning:-<span className = {`${timeRemaning < 10 && timeRemaning%2 ===0 ? "text-red-400" :""}`}>{timeRemaning}</span></div>
    <div className = "mocktest_page_container">
    
        <p className="heading-txt">Quiz APP</p>
        <div className="mockTestContainer">
            {showResult ? (
                <MockTestResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
               
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
    </>
  )
}

export default MockTest