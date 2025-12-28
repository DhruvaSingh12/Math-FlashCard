import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeft } from 'lucide-react-native';
import GlossyButton from '../components/GlossyButton';

const DifficultyScreen = ({ navigation }) => {
    const selectDifficulty = (difficulty) => {
        navigation.navigate('Game', { difficulty });
    };

    return (
        <LinearGradient colors={['#3399ff', '#1a3c70']} style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <View style={styles.backButtonContent}>
                        <ChevronLeft size={24} color="#ffffff" />
                        <Text style={styles.backText}>Back</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.content}>
                    <Text style={styles.title}>Choose Difficulty</Text>

                    <View style={styles.buttonContainer}>
                        <GlossyButton
                            text="Easy"
                            onPress={() => selectDifficulty('easy')}
                            style={styles.difficultyButton}
                            textStyle={styles.buttonText}
                        />
                        <GlossyButton
                            text="Medium"
                            onPress={() => selectDifficulty('medium')}
                            style={styles.difficultyButton}
                            textStyle={styles.buttonText}
                        />
                        <GlossyButton
                            text="Hard"
                            onPress={() => selectDifficulty('hard')}
                            style={styles.difficultyButton}
                            textStyle={styles.buttonText}
                        />
                    </View>
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
    },
    backButton: {
        padding: 20,
    },
    backButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 15,
        alignSelf: 'flex-start',
    },
    backText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 5,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    title: {
        fontSize: 48,
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 50,
    },
    buttonContainer: {
        width: '100%',
        gap: 20,
    },
    difficultyButton: {
        width: '100%',
        height: 80,
    },
    buttonText: {
        fontSize: 32,
    }
});

export default DifficultyScreen;
