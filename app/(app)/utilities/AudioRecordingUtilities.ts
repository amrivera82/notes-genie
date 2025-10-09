import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabaseSync("temp_recording");

export const saveOrUpdateRecording = async (recDetails: { url: string | null, length: number, uid: string }) => {
    return new Promise((resolve, reject) => {
        db.withTransactionAsync(async () => {
            if (recDetails.url) {
                debugger;
            }
            console.log(recDetails);
            db.runAsync(
                "CREATE TABLE IF NOT EXISTS temp_recording (uid TEXT PRIMARY KEY, url TEXT, length INTEGER);"
            ),
            db.runAsync(
                "INSERT OR REPLACE INTO temp_recording (uid, url, length) " +
                "VALUES (?, ?, ?)", [recDetails.uid, recDetails.url, recDetails.length]
            ).then((rowsAffected: SQLite.SQLiteRunResult) => {
                if (rowsAffected.changes > 0) {
                    resolve(true);
                } else {
                    reject(false);
                }
            }).catch((reason: any) => {
                reject(reason);
                return false;
            });
        });
    });
};

export const getRecording: ((uid: string) => Promise<unknown>) = async (uid: string) => {
    return new Promise((resolve, reject) => {
        db.withTransactionAsync(async () => {
            debugger;
            const result: any = await db.getFirstAsync("SELECT * FROM temp_recording WHERE uid = ?;", [uid]);
            if (result.length) {
                resolve(result.rows[0]);
            } else {
                reject(false);
            }
        });
    });
};

export const getAllRecordings: (() => Promise<unknown>) = async () => {
    return new Promise((resolve, reject) => {
        db.withTransactionAsync(async () => {
            debugger;
            if (await db.getFirstSync("SELECT name FROM sqlite_master WHERE type=table AND name='temp_recording';")) {
                const recs: any = await db.getFirstAsync("SELECT * FROM temp_recording;");
                resolve(recs.length ? recs._array : []);
            }
            resolve([]);
        }).catch((reason) => reject(reason));
    });
};


// const [audioPlayer, setAudioPlayer] = useState<AudioPlayer>(new AudioPlayer('fds', -1));

// const playRecordedAudio: ((uri: string) => void) = async (uri: string) => {
//     try {
//         // Load the Recorded URI
//         setAudioPlayer(useAudioPlayer({ uri: uri || undefined }));

//         // Get Player Status
//         const playerStatus: AudioStatus = audioPlayer.currentStatus;

//         // Play if song is loaded successfully
//         if (playerStatus.isLoaded) {
//             if (playerStatus.playing === false) {
//                 audioPlayer.play();
//             }
//         }
//     } catch (error) { }
// };

// // Function to stop the playing audio
// const stopPlaying: (() => void) = async () => {
//     try {
//         //Get Player Status
//         const playerStatus = audioPlayer.currentStatus;

//         // If song is playing then stop it
//         if (playerStatus.playing === true) {
//             audioPlayer.pause();
//         }
//     } catch (error) { }
// };