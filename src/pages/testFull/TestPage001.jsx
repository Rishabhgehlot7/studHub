import React, { useState } from 'react';
import { C_Sarp, Java, Git, C, Cpp, Python, Figma, Web, ML, cybersecurity } from '../../api/Test.wise';
import { Link } from 'react-router-dom';
const TestPage = () => {
    // Sample question data in array format
    const questions = Java;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        // Check if the selected option is correct
        if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }

        // Move to the next question
        setSelectedOption('');
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // End of the test
            // alert(`Test ended. Your score: ${score}/${questions.length}`);
            // You can reset the test here if needed
        }
    };

    return (
        <div className=' w-screen p-12'>
            <h1 className=' font-medium text-6xl'>Optional Question Test</h1>
            <div>
                <p className=' text-2xl px-3 pt-3'>Question {currentQuestionIndex + 1}:</p>
                <p className=' text-3xl px-3 pb-3 pt-1'>{questions[currentQuestionIndex].question}</p>
                <ul>
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <li key={index}>
                            <label className=' text-xl p-3'>
                                <input className='mr-2'
                                    type="radio"
                                    name="option"
                                    value={option}
                                    checked={selectedOption === option}
                                    onChange={() => handleOptionSelect(option)}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
                <button className=' p-3 bg-yellow-200 text-black rounded-lg m-3' onClick={handleNextQuestion}>Next Question</button>
                <div className=' text-2xl text-green-500'>
                    {
                        currentQuestionIndex === 10 ? `Test ended. Your score:${score}/10` : ``
                    }
                </div>
                {
                    currentQuestionIndex === 10 ? <Link onClick={'/'}>Home</Link> : <div></div>
                }
            </div>
        </div>
    );
};

export default TestPage;
