import { useState, useCallback, useEffect } from 'react';

const useGameLogic = (difficulty) => {
    const [score, setScore] = useState(0);
    const [hearts, setHearts] = useState(3);
    const [streak, setStreak] = useState(0);
    const [problem, setProblem] = useState({ a: 0, b: 0, correctAnswer: 0, answers: [] });

    const generateProblem = useCallback(() => {
        let a, b;
        if (difficulty === 'easy') {
            a = Math.floor(Math.random() * 20) + 1;
            b = Math.floor(Math.random() * 25) + 1;
        } else if (difficulty === 'medium') {
            a = Math.floor(Math.random() * 30) + 1;
            b = Math.floor(Math.random() * 40) + 11;
        } else {
            a = Math.floor(Math.random() * 90) + 10;
            b = Math.floor(Math.random() * 90) + 10;
        }

        const correctAnswer = a * b;
        const answersSet = new Set([correctAnswer]);

        while (answersSet.size < 4) {
            const offset = Math.floor(Math.random() * 21) - 10; // -10 to 10
            const wrong = correctAnswer + offset;
            if (wrong > 0 && wrong !== correctAnswer) {
                answersSet.add(wrong);
            }
        }

        const answers = Array.from(answersSet).sort(() => Math.random() - 0.5);
        setProblem({ a, b, correctAnswer, answers });
    }, [difficulty]);

    useEffect(() => {
        generateProblem();
    }, [generateProblem]);

    const checkAnswer = (answer) => {
        if (answer === problem.correctAnswer) {
            setScore(s => s + 1);
            setStreak(s => s + 1);
            generateProblem();
            return true;
        } else {
            setHearts(h => h - 1);
            setStreak(0);
            if (hearts > 1) {
                generateProblem();
            }
            return false;
        }
    };

    const resetGame = () => {
        setScore(0);
        setHearts(3);
        setStreak(0);
        generateProblem();
    };

    return {
        score,
        hearts,
        streak,
        problem,
        checkAnswer,
        resetGame
    };
};

export default useGameLogic;
