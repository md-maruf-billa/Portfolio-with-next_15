"use client";
import { useEffect, useState } from "react";
import { ContentState, convertFromHTML, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = ({ setTextData, defaultValue }: { setTextData: any, defaultValue?: string }) => {
      const [editorState, setEditorState] = useState(EditorState.createEmpty());

      useEffect(() => {
            const blocksFromHtml = convertFromHTML(defaultValue || "");
            const contentState = ContentState.createFromBlockArray(blocksFromHtml.contentBlocks, blocksFromHtml.entityMap);
            const initialEditorState = EditorState.createWithContent(contentState);
            setEditorState(initialEditorState);
      }, [defaultValue]);

      // Handle editor changes and convert to HTML
      const handleEditorChange = (state: EditorState) => {
            setEditorState(state);
            const currentContent = state.getCurrentContent();
            const html = stateToHTML(currentContent);
            setTextData(html);
      };

      return (
            <div className="border-2 p-4 ">
                  <Editor
                        editorState={editorState}
                        onEditorStateChange={handleEditorChange}
                        toolbarClassName="toolbarClassName bg-transparent"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName min-h-60 max-h-80 overflow-y-auto"
                  />
            </div>
      );
};

export default TextEditor;
