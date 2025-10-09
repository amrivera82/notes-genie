import { AudioPlayer, useAudioPlayer } from 'expo-audio';
import { Button, StyleSheet, View } from 'react-native';

interface RecordingDetails {
    filename: string,
    uri: string,
    length: number
}

export const AudioFileListItem = (props: RecordingDetails) => {
    const player: AudioPlayer = useAudioPlayer(props.uri);

    return (
        <View style={styles.container}>
            <Button title="Play Sound" onPress={() => player.play()} />
            <Button
                title="Replay Sound"
                onPress={() => {
                    player.seekTo(0);
                    player.play();
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 10
    }
});