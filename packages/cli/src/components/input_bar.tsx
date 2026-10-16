import type { KeyBinding } from "@opentui/core";
import StatusBar from "./status-bar";

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
