"use dom";

/**
 * @see https://github.com/betomoedano/rich-text-example, 
 * @see https://lexical.dev/docs/intro
 */
import React, { useState } from 'react';
import { GenieEditor } from './GenieEditor';

// Drawer-based saved note access, left of composition/editing panel
export default function DOMComponent({ name }: { name: string }) {
    const [editorState, setEditorState] = useState<string | null>(null);
  const [richText, setRichText] = useState("");

  return (
    <>
      <GenieEditor setRichText={setRichText} setEditorState={setEditorState} />
    </>
  );
};