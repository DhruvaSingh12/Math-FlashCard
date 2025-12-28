import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeft, Volume2, Music } from 'lucide-react-native';
import Slider from '@react-native-community/slider';

const SettingsScreen = ({ navigation }) => {
    const [musicEnabled, setMusicEnabled] = useState(true);
    const [sfxEnabled, setSfxEnabled] = useState(true);
    const [musicVolume, setMusicVolume] = useState(0.5);
    const [sfxVolume, setSfxVolume] = useState(0.5);

    return (
        <LinearGradient colors={['#2673e6', '#143d7a']} style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <View style={styles.backButtonContent}>
                        <ChevronLeft size={20} color="#ffffff" />
                        <Text style={styles.backText}>Back</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.content}>
                    <View style={styles.glassPanel}>
                        <Text style={styles.title}>Sound Settings</Text>

                        <View style={styles.settingRow}>
                            <View style={styles.settingLabel}>
                                <Music size={24} color="#ffffff" />
                                <Text style={styles.label}>Music</Text>
                            </View>
                            <Switch
                                value={!!musicEnabled}
                                onValueChange={(val) => setMusicEnabled(val)}
                                trackColor={{ false: '#767577', true: '#00b3ff' }}
                                thumbColor={musicEnabled ? '#ffffff' : '#f4f3f4'}
                            />
                        </View>

                        <View style={styles.sliderContainer}>
                            <Text style={styles.subLabel}>Music Volume</Text>
                            <Slider
                                style={styles.slider}
                                minimumValue={0}
                                maximumValue={1}
                                value={musicVolume}
                                onValueChange={setMusicVolume}
                                minimumTrackTintColor="#ffffff"
                                maximumTrackTintColor="rgba(255, 255, 255, 0.3)"
                                thumbTintColor="#ffffff"
                            />
                        </View>

                        <View style={[styles.settingRow, { marginTop: 20 }]}>
                            <View style={styles.settingLabel}>
                                <Volume2 size={24} color="#ffffff" />
                                <Text style={styles.label}>SFX</Text>
                            </View>
                            <Switch
                                value={!!sfxEnabled}
                                onValueChange={(val) => setSfxEnabled(val)}
                                trackColor={{ false: '#767577', true: '#00ffff' }}
                                thumbColor={sfxEnabled ? '#ffffff' : '#f4f3f4'}
                            />
                        </View>

                        <View style={styles.sliderContainer}>
                            <Text style={styles.subLabel}>SFX Volume</Text>
                            <Slider
                                style={styles.slider}
                                minimumValue={0}
                                maximumValue={1}
                                value={sfxVolume}
                                onValueChange={setSfxVolume}
                                minimumTrackTintColor="#ffffff"
                                maximumTrackTintColor="rgba(255, 255, 255, 0.3)"
                                thumbTintColor="#ffffff"
                            />
                        </View>
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
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 4,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    glassPanel: {
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 35,
        padding: 30,
    },
    title: {
        fontSize: 36,
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    settingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    settingLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    label: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: '500',
    },
    sliderContainer: {
        width: '100%',
    },
    subLabel: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        marginBottom: 5,
    },
    slider: {
        width: '100%',
        height: 40,
    },
});

export default SettingsScreen;
