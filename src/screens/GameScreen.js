import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, LayoutAnimation } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeft } from 'lucide-react-native';
import GlossyButton from '../components/GlossyButton';
import useGameLogic from '../hooks/useGameLogic';

const GameScreen = ({ route, navigation }) => {
    const { difficulty } = route.params;
    const { score, hearts, streak, problem, checkAnswer } = useGameLogic(difficulty);

    useEffect(() => {
        if (hearts <= 0) {
            navigation.replace('Start');
        }
    }, [hearts, navigation]);

    const handleAnswer = (answer) => {
        const isCorrect = checkAnswer(answer);
        if (isCorrect) {
            LayoutAnimation.spring();
        }
    };

    const renderHearts = () => {
        const heartIcons = [];
        for (let i = 0; i < hearts; i++) {
            heartIcons.push(
                <Image
                    key={i}
                    source={require('../assets/images/heart.png')}
                    style={styles.heartIcon}
                />
            );
        }
        return heartIcons;
    };

    return (
        <LinearGradient colors={['#3399ff', '#1a3c70']} style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                {/* Top Bar */}
                <View style={styles.topBar}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.navigate('Difficulty')}
                    >
                        <View style={styles.backButtonContent}>
                            <ChevronLeft size={20} color="#ffffff" />
                            <Text style={styles.backText}>Back</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.heartContainer}>
                        {renderHearts()}
                    </View>
                </View>

                {/* Score & Streak */}
                <View style={styles.statsContainer}>
                    <Text style={styles.scoreText}>Score: {score}</Text>
                    {streak >= 3 && (
                        <Text style={styles.streakText}>🔥 ×{streak}</Text>
                    )}
                </View>

                {/* Problem Display */}
                <View style={styles.problemContainer}>
                    <Text style={styles.problemText}>
                        {problem.a} × {problem.b} = ?
                    </Text>
                </View>

                {/* Answers */}
                <View style={styles.answersContainer}>
                    {problem.answers.map((answer, index) => (
                        <GlossyButton
                            key={`${problem.a}-${problem.b}-${answer}-${index}`}
                            text={answer.toString()}
                            onPress={() => handleAnswer(answer)}
                            style={styles.answerButton}
                            textStyle={styles.answerButtonText}
                        />
                    ))}
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingHorizontal: 20,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    backButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 15,
    },
    backText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 4,
    },
    heartContainer: {
        flexDirection: 'row',
        gap: 5,
    },
    heartIcon: {
        width: 30,
        height: 30,
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        marginVertical: 10,
    },
    scoreText: {
        fontSize: 32,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    streakText: {
        fontSize: 32,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    problemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    problemText: {
        fontSize: 64,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    answersContainer: {
        paddingBottom: 40,
        gap: 15,
    },
    answerButton: {
        width: '100%',
        height: 70,
    },
    answerButtonText: {
        fontSize: 32,
    },
});

export default GameScreen;
