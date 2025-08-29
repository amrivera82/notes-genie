import { filesReducer } from '@/app/(app)/views/files/DocumentsSlice';
import { myNotesReducer } from '@/app/(app)/views/genie-notes/MyNotesSlice';
import { insightsReducer } from '@/app/(app)/views/insights-center/InsightsCenterSlice';
import { messengerReducer } from '@/app/(app)/views/messenger/MessengerSlice';
import { settingsReducer } from '@/app/(app)/views/settings/SettingsSlice';
import { toolsReducer } from '@/app/(app)/views/tools/ToolsSlice';
import { userReducer } from '@/app/(app)/views/user/UserSlice';
import { voiceNotesCaptureReducer } from '@/app/(app)/views/voice-note-capture/VoiceNotesCaptureSlice';
import { sessionReducer } from '@/app/session/SessionSlice';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { editorReducer } from '../app/(app)/views/editor/EditorSlice';

const store = configureStore({
  reducer: {
    editor: editorReducer,
    files: filesReducer,
    myNotes: myNotesReducer,
    insights: insightsReducer,
    messenger: messengerReducer,
    session: sessionReducer,
    settings: settingsReducer,
    tools: toolsReducer,
    user: userReducer,
    voiceNotesCapture: voiceNotesCaptureReducer
  }
});

// Infer the type of `store`
export type AppStore = typeof store
export type RootState = ReturnType<AppStore["getState"]>
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"]
// Define a reusable type describing thunk functions
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>

export default store;