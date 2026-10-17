import type { KeyBinding, TextareaRenderable } from "@opentui/core";
import StatusBar from "./status-bar";
import { useCallback, useEffect, useRef } from "react";
import { useRenderer } from "@opentui/react";
import { useCommandMenu } from "./command-menu/use-command-menu";
import type { Command } from "./command-menu/types";

type Props={
    onSubmit:(text:string)=>void;
    disabled?:boolean;
}

export const TEXTAREA_KEY_BINDINGS:KeyBinding[]=[
  {name:"return", action:"submit"},
  {name:"enter", action:"submit"},
  {name:"return",shift:true, action:"newline"},
  {name:"enter", shift:true,action:"newline"}
];
 
export default function InputBar({onSubmit,disabled=false}:Props) {
  const textareaRef=useRef<TextareaRenderable>(null);
  const onSubmitRef=useRef<()=>void>(()=>{})
  const renderer=useRenderer();  

    const{
        showCommandMenu,
        commandQuery,
        selectedIndex,
        scrollRef,
        handleContentChange,
        resolveCommand,
        setSelectedIndex
    }=useCommandMenu();


    const handleCommand=useCallback((command: Command | undefined)=>{

    })

  useEffect(()=>{
    const textarea=textareaRef.current;
    if(!textarea) return;

    textarea.onSubmit=()=>{
      onSubmitRef.current();
    }
  },[])

    onSubmitRef.current=()=>{
      if(disabled) return;

      if(showCommandMenu){
        const command=resolveCommand(selectedIndex);
        handleCommand(command);
        return;
      }

      handleSubmit();

    }
  
  return (
    <box
    width="100%"
    position="relative"
    justifyContent="center"
    paddingX={2}
    paddingY={1}
    backgroundColor="#1a1a24"
    gap={1}

    border={["left"]}
    borderColor="cyan"
    >

    <textarea focused={!disabled}
    keyBindings={TEXTAREA_KEY_BINDINGS}
    placeholder={'Ask anything... "Fix a bug in the database'}>
    </textarea>
    <StatusBar/>
    </box>
  )
}
