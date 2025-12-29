import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GlossyButton = ({ text, onPress, style, textStyle, color = '#ffffff' }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.button, style]}>
            <LinearGradient
                colors={['rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.1)']}
                style={styles.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <View style={styles.gloss} />
                <Text style={[styles.text, textStyle]}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        overflow: 'hidden',
        minWidth: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    gradient: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    gloss: {
        position: 'absolute',
        top: 0,
        left: '20%',
        width: '30%',
        height: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000000',
    },
});

export default GlossyButton;
