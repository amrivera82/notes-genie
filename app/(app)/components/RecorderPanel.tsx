import {
    AudioModule,
    AudioRecorder, RecorderState, RecordingOptions,
    setAudioModeAsync, useAudioRecorder, useAudioRecorderState
} from 'expo-audio';
import { PropsWithChildren, useEffect } from "react";
import { Alert, Button, StyleSheet, View } from 'react-native';

interface RecordingAttributes {
    filename: string
}

const recordingOptions: RecordingOptions = {
    android: {
        extension: '.m4a',
        outputFormat: AudioModule.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: AudioModule.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        maxFileSize: 65536
    },
    ios: {
        extension: '.m4a',
        outputFormat: AudioModule.RECORDING_OPTION_IOS_OUTPUT_FORMAT_MPEG4AAC,
        audioQuality: AudioModule.RECORDING_OPTION_IOS_AUDIO_QUALITY_MIN,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false
    },
    extension: '.m4a',
    sampleRate: 44100,
    numberOfChannels: 2,
    bitRate: 128000
};

export const RecorderPanel = ({ children }: { children: PropsWithChildren<RecordingAttributes> }) => {

    const audioRecorder: AudioRecorder = useAudioRecorder(recordingOptions);
    const recorderState: RecorderState = useAudioRecorderState(audioRecorder);

    const record = async () => {
        await audioRecorder.prepareToRecordAsync();
        audioRecorder.record();
    };

    const stopRecording = async () => {
        await audioRecorder.stop();
    };

    useEffect(() => {
        (() => {
            AudioModule.requestRecordingPermissionsAsync()
                .then(status => {
                    if (!status.granted) {
                        Alert.alert('Permission to access microphone was denied');
                    }

                    setAudioModeAsync({
                        playsInSilentMode: true,
                        allowsRecording: true
                    });
                }).catch(err => console.log(err));
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Button
                title={recorderState.isRecording ? 'Stop Recording' : 'Start Recording'}
                onPress={recorderState.isRecording ? () => stopRecording : () => record()}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {

    }
});