import "./styles.css";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";

import { $getRoot } from "lexical";
import { BasicTheme } from "./BasicTheme";
import { ToolbarPlugin } from "./plugins/ToolbarPlugin";

const placeholder = "...";

const editorConfig = {
    namespace: "ReactNative.js",
    nodes: [],
    // Handling of errors during update
    onError(error: Error) {
        throw error;
    },
    theme: BasicTheme,
};
export const GenieEditor = ({
    setRichText,
    setEditorState,
}: {
    setRichText: React.Dispatch<React.SetStateAction<string>>;
    setEditorState: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
    return (
        <>
            <LexicalComposer initialConfig={editorConfig}>
                <div className="editor-container">
                    <ToolbarPlugin />
                    <div className="editor-inner">
                        <RichTextPlugin
                            contentEditable={
                                <ContentEditable
                                    className="editor-input"
                                    aria-placeholder={placeholder}
                                    placeholder={
                                        <div className="editor-placeholder">{placeholder}</div>
                                    }
                                />
                            }
                            ErrorBoundary={LexicalErrorBoundary}
                        />
                        <OnChangePlugin
                            onChange={(editorState, editor, tags) => {
                                editorState.read(() => {
                                    const root = $getRoot();
                                    const textContent = root.getTextContent();
                                    setRichText(textContent);
                                });
                                setEditorState(JSON.stringify(editorState.toJSON()));
                            }}
                            ignoreHistoryMergeTagChange
                            ignoreSelectionChange
                        />
                        <HistoryPlugin />
                        <AutoFocusPlugin />
                    </div>
                </div>
            </LexicalComposer>
        </>
    );
}