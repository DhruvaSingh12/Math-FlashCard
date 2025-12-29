import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Settings } from 'lucide-react-native';
import GlossyButton from '../components/GlossyButton';

const StartScreen = ({ navigation }) => {
    return (
        <LinearGradient colors={['#3399ff', '#1a3c70']} style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <TouchableOpacity
                    style={styles.settingsButton}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Settings size={32} color="#ffffff" />
                </TouchableOpacity>

                <View style={styles.content}>
                    <View style={styles.glassPanel}>
                        <Image
                            source={require('../assets/images/logo.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                        <Text style={styles.title}>MathFlash</Text>
                        <Text style={styles.subtitle}>Sharpen your mind</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <GlossyButton
                        text="Start"
                        onPress={() => navigation.navigate('Difficulty')}
                    />
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
    settingsButton: {
        position: 'absolute',
        top: 50,
        right: 20,
        zIndex: 10,
        padding: 10,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    glassPanel: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.22)',
        borderRadius: 35,
        padding: 40,
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 50,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 24,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 10,
    },
    footer: {
        height: 120,
        backgroundColor: 'rgba(255, 255, 255, 0.26)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default StartScreen;
