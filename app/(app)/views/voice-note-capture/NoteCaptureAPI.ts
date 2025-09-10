export const uploadAttachment = (amount = 1): Promise<{ data: number }> =>
  new Promise<{ data: number }>(resolve =>
    setTimeout(() => {
      resolve({ data: amount })
    }, 500)
  );


    // Okay now we have the audio file. We'll POST it as form data to the Google Cloud function:

// export const getTranscription = async () => {
//     this.setState({ isFetching: true });
//     try {
//         const info = await FileSystem.getInfoAsync(this.recording.getURI());
//         console.log(`FILE INFO: ${JSON.stringify(info)}`);
//         const uri = info.uri;
//         const formData = new FormData();
//         formData.append('file', {
//             uri, type: 'audio/x-wav',
//             name: 'speech2text'
//         });
//         const response = await fetch(config.CLOUD_FUNCTION_URL, {
//             method: 'POST', body: formData
//         });
//         const data = await response.json();
//         this.setState({ query: data.transcript });
//     } catch (error) {
//         console.log('There was an error', error); this.stopRecording(); this.resetRecording();
//     } this.setState({ isFetching: false });
// }