import React, { useState } from 'react'
import { data } from './data'
import './quizstyle.css'

export default function Quizapp() {
  const [index, setIndex] = useState(0);
  const [selected, setOption] = useState('');
  const [finished, setFinish] = useState(false);
  const [score, setScore] = useState(0);
  const correctAnswers = ['Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1','Option1']

  const handleNext = () => {
    if(index < data.length-1){
        if(selected === correctAnswers[index]){
            setScore(score + 1);
        }
        setIndex(index+1);
        setOption('');
    }
    else {
        if(selected === correctAnswers[index]){
            setScore(score + 1);
        }
        setFinish(true);
    }
  }
  const handleSelect = (opt) => {
    setOption(opt);
  }

  if(finished) {
    return (
        <div className='scorePage'>
            <h1>Quiz Finished!</h1>
            <p> Your score is: {score} out of {data.length}</p>
        </div>
    )
  }
  return (
    <div className='quiz'>
        <h1>{data[0].Question}</h1>
        <ul>
            <li className={ selected === 'Option1' ? 'selected' : ''}
            onClick={() => handleSelect('Option1')}>{data[index].Option1}</li>

            <li className={ selected === 'Option2' ? 'selected' : ''}
            onClick={() => handleSelect('Option2')}>{data[index].Option2}</li>

            <li className={ selected === 'Option3' ? 'selected' : ''}
            onClick={() => handleSelect('Option3')}>{data[index].Option3}</li>

            <li className={ selected === 'Option4' ? 'selected' : ''}
            onClick={() => handleSelect('Option4')}>{data[index].Option4}</li>

        </ul>
        <button onClick={handleNext} disabled={!selected.length > 0}>Next</button>
        <h5>Question {index+1} of {data.length}</h5>
    </div>
  )
}
