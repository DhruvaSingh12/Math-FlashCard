import { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TIPS = [
    "Did you know? 9×9 = 81",
    "Tip: Multiplying by 10 just adds a zero",
    "Fun fact: 7×8 = 56",
    "Trick: 6×6 = 36 — easy square",
    "MathFlash: Practice makes mastery"
];

const LoadingScreen = ({ navigation }) => {
    const [tipIndex, setTipIndex] = useState(0);
    const spinValue = useRef(new Animated.Value(0)).current;
    const logoOpacity = useRef(new Animated.Value(0)).current;
    const logoScale = useRef(new Animated.Value(0.5)).current;
    const tipOpacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        // Rotation animation
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();

        // Logo animation
        Animated.parallel([
            Animated.timing(logoOpacity, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            }),
            Animated.timing(logoScale, {
                toValue: 1,
                duration: 1200,
                easing: Easing.out(Easing.back(1.5)),
                useNativeDriver: true,
            })
        ]).start();

        // Tips rotation
        const tipInterval = setInterval(() => {
            Animated.sequence([
                Animated.timing(tipOpacity, { toValue: 0, duration: 400, useNativeDriver: true }),
                Animated.delay(100),
            ]).start(() => {
                setTipIndex((prev) => (prev + 1) % TIPS.length);
                Animated.timing(tipOpacity, { toValue: 1, duration: 400, useNativeDriver: true }).start();
            });
        }, 2500);

        // Navigate to Start after 5 seconds
        const timeout = setTimeout(() => {
            navigation.replace('Start');
        }, 5000);

        return () => {
            clearInterval(tipInterval);
            clearTimeout(timeout);
        };
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <LinearGradient colors={['#1a3c70', '#0a1d37']} style={styles.container}>
            <Animated.Image
                source={require('../assets/images/logo.png')}
                style={[styles.logo, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}
            />

            <View style={styles.spinnerContainer}>
                <Text style={styles.loadingText}>LOADING...</Text>
            </View>

            <Animated.Text style={[styles.tipText, { opacity: tipOpacity }]}>
                {TIPS[tipIndex]}
            </Animated.Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 250,
        height: 250,
        marginBottom: 50,
        resizeMode: 'contain',
    },
    spinnerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinner: {
        width: 100,
        height: 100,
        marginBottom: 20,
        tintColor: '#ffffff',
    },
    loadingText: {
        fontSize: 32,
        color: '#ffffff',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    tipText: {
        position: 'absolute',
        bottom: 80,
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
        opacity: 0.8,
    },
});

export default LoadingScreen;
