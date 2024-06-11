"use client"
import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor=({
  onChange,
  initialContent,
  editable,
}:EditorProps)=>{
  const {resolvedTheme}=useTheme();
  // Stores the document JSON.

  const { edgestore } = useEdgeStore();

  const handleUpload = async (file: File) => {
    const res = await edgestore.publicFiles.upload({
      file,
    });

    return res.url;
  };
  const [blocks, setBlocks] = useState<Block[]>([]);

  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? JSON.parse(initialContent)
      : [{ type: "paragraph", content: "" }],
    
    uploadFile: handleUpload,
  });

  // Use useEffect to handle the change in editor's content
  useEffect(() => {
    const handleEditorChange = () => {
      const updatedContent = editor.document;
      setBlocks(updatedContent);
      onChange(JSON.stringify(updatedContent, null, 2));
    };

    // Assuming editor has an event listener for content change
    editor.onEditorContentChange(handleEditorChange);
  }, [editor, onChange]);

  // Renders the editor instance and its document JSON.
  return (
    <div className={"wrapper"}>
      <div className={"item"}>
        <BlockNoteView
          editor={editor}
          theme={resolvedTheme==="dark"?"dark":"light"}
          editable={editable}
        />
      </div>
    </div>
  );
}
export default Editor;