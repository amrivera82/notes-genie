startRecording = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status !== 'granted')
        return;
    this.setState({ isRecording: true }); // some of these are not applicable, but are required
    await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playThroughEarpieceAndroid: true
    });
    const rec = new Audio.Recording();
    try {
        await recording.prepareToRecordAsync(recordingOptions);
        await recording.startAsync();
    } catch (error) {
        console.log(error);
        this.stopRecording();
    }
    this.recording = rec;
}


const recordingOptions = {
    // android not currently in use, but parameters are required
    android: {
        extension: '.m4a',
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        sampleRate: 44100, numberOfChannels: 2, bitRate: 128000,
    },
    ios: {
        extension: '.wav',
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
        sampleRate: 44100,
        numberOfChannels: 1, bitRate: 128000, linearPCMBitDepth: 16, linearPCMIsBigEndian: false, linearPCMIsFloat: false,
    },
};

// Okay now we have the audio file. We'll POST it as form data to the Google Cloud function:

getTranscription = async () => {
    this.setState({ isFetching: true });
    try {
        const info = await FileSystem.getInfoAsync(this.recording.getURI());
        console.log(`FILE INFO: ${JSON.stringify(info)}`);
        const uri = info.uri;
        const formData = new FormData();
        formData.append('file', {
            uri, type: 'audio/x-wav',
            name: 'speech2text'
        });
        const response = await fetch(config.CLOUD_FUNCTION_URL, {
            method: 'POST', body: formData
        });
        const data = await response.json();
        this.setState({ query: data.transcript });
    } catch (error) {
        console.log('There was an error', error); this.stopRecording(); this.resetRecording();
    } this.setState({ isFetching: false });
}

// const ENCODING = 'LINEAR16';
// const SAMPLE_RATE_HERTZ = 41000;
// const LANGUAGE = 'en-US';

