import { StyleSheet, View } from "react-native";
import { AudioFileListItem } from "./AudioFileListItem";

interface RecordingDetails {
    filename: string,
    uri: string,
    length: number
}

export const AudioFileList:React.FC<RecordingDetails[]> = (items: RecordingDetails[]) => {
    console.log(items);
    if (!items.length) {
        return (<></>);
    }
    return (
        <View style={styles.container}>
            {items.map(item => (
                <AudioFileListItem {...item} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 10
    }
});