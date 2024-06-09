import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useState } from "react";
import { useTheme } from "next-themes";


export const Editor=()=>{
  const {resolvedTheme}=useTheme();
  // Stores the document JSON.
  const [blocks, setBlocks] = useState<Block[]>([]);

  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "",
      },
      
    ],

  });

  // Renders the editor instance and its document JSON.
  return (
    <div className={"wrapper"}>
      <div className={"item"}>
        <BlockNoteView
          editor={editor}
          onChange={() => {
            // Saves the document JSON to state.
            setBlocks(editor.document);
          }}
          theme={resolvedTheme=== "dark"? "dark" : "light"}
        />
      </div>
      
    </div>
  );
}