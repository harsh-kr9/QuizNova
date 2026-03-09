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
        return <div className="loader absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 bg-slate-900 flex-col gap-2">
              <img src="/images/loader.gif" alt="" />
              <span className="text-white text-lg">Processing... Just a moment</span>
            </div>
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
        }
    };

    return (
        <section className="w-full min-h-screen bg-black flex justify-center items-center">
            <div>Quiz placeholder</div>
        </section>
    );
};

export default Quiz;
