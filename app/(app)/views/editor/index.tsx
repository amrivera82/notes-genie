"use dom";

/**
 * @see https://github.com/betomoedano/rich-text-example, 
 * @see https://lexical.dev/docs/intro
 */
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { GenieEditor } from './GenieEditor';

// Drawer-based saved note access, left of composition/editing panel
export default function DOMComponent({ name }: { name: string }) {
  const [editorState, setEditorState] = useState<string | null>('placeholder');
  const [isEditorLoaded, setEditorLoaded] = useState<boolean>(false);
  const [richText, setRichText] = useState('');

  return (
    <>
      <ActivityIndicator
        animating={!isEditorLoaded}
        size='large'
        style={{
          alignContent: 'center',
          position: 'absolute',
          width: '90%',
          height: '120%',
          zIndex: !isEditorLoaded ? 999 : 0
        }}
        hidesWhenStopped
      />
      <GenieEditor
        setRichText={setRichText}
        setEditorState={setEditorState}
        setEditorLoaded={setEditorLoaded}
      />
    </>
  );
};