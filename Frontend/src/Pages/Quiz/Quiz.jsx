import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import GaugeComponent from 'react-gauge-component'

const Quiz = () => {
    const location = useLocation();
    const { qsns, isLoading } = location.state || {};
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });
    const [answered, setAnswered] = useState(false);

    if (!qsns || !qsns.mcqQuestions) {
        return <>
            <div className="loader absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 bg-slate-900 flex-col gap-2">
              <img src="/images/loader.gif" alt="" />
              <span className="text-white text-lg">Processing... Just a moment</span>
            </div>
            </>
    }

    const { mcqQuestions } = qsns;

    const onClickNext = () => {
        if (activeQuestion !== mcqQuestions.length - 1) {
            setActiveQuestion(prev => prev + 1);
            setSelectedAnswer('');
            setSelectedAnswerIndex(null);
            setAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    const onAnswerSelected = (answer, index) => {
        if (!answered) {
            setSelectedAnswerIndex(index);
            setSelectedAnswer(answer);
            const isCorrect = answer === mcqQuestions[activeQuestion].correctAnswer;
            setResult(prev => ({
                ...prev,
                score: isCorrect ? prev.score + 1 : prev.score,
                correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
                wrongAnswers: isCorrect ? prev.wrongAnswers : prev.wrongAnswers + 1,
            }));
            setAnswered(true);
        }
    };

    const addLeadingZero = number => (number > 9 ? number : `0${number}`);

    return (
        <section className="w-full min-h-screen bg-black flex justify-center items-center">
            {isLoading && (
                <div className="loader absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 bg-slate-900 flex-col gap-2">
                    <img src="/images/loader.gif" alt="" />
                    <span className="text-white text-lg">Processing... Just a moment</span>
                </div>
            )}
            <div className=' flex justify-center items-center'>
                <div className="w-96 md:w-2/3 bg-gray-900 rounded-lg mt-20 px-6 py-12">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-white text-4xl font-semibold">
                            {addLeadingZero(activeQuestion + 1)}
                        </span>
                        <span className="text-gray-500 text-lg">/{addLeadingZero(mcqQuestions.length)}</span>
                    </div>
                    <h2 className="text-2xl text-slate-50 font-semibold mb-4">
                        {mcqQuestions[activeQuestion].question}
                    </h2>
                    <ul className="mb-8">
                        {mcqQuestions[activeQuestion].choices.map((choice, index) => (
                            <li key={choice} onClick={() => onAnswerSelected(choice, index)}
                                className="border border-gray-300 rounded-lg py-3 px-4 text-white font-bold cursor-pointer mb-4">
                                {choice}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end">
                        <button onClick={onClickNext} disabled={!answered}
                            className="py-3 px-8 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 font-medium rounded-lg text-center">
                            {activeQuestion === mcqQuestions.length - 1 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Quiz;
