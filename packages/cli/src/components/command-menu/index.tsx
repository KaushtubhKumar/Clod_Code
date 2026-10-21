import type { RefObject } from "react";
import { COMMANDs } from "./command";
import { TextAttributes, type ScrollBoxRenderable } from "@opentui/core";
import { getFilteredCommands } from "./filter-commands";

const MAX_VISIBLE_ITEMS=8;

const COL_WIDTH=Math.max(...COMMANDs.map((cmd)=>
    cmd.name.length
)) +4;

type CommandMenuProps={
    query:string
    selectedIndex:number
    scrollRef:RefObject<ScrollBoxRenderable | null>
    onSelect: (index:number)=>void
    onExecute:(index:number)=>void
}

export function CommandMenu({query,selectedIndex,scrollRef,onSelect,onExecute}:CommandMenuProps){
    const filtered=getFilteredCommands(query);
    const visibleHeight=Math.min(filtered.length,MAX_VISIBLE_ITEMS);

    if(filtered.length==0){
        return (
            <box padding={1}>
                <text attributes={TextAttributes.DIM}>
                    No matching commands
                </text>
            </box>
        )
    }
    return(
        <scrollbox ref={scrollRef} height={visibleHeight}>
           {filtered.map((cmd,i)=>{
                const isSelected=i===selectedIndex;
                return (
                    <box key={cmd.value}
                    flexDirection="row"
                    paddingX={1}
                    height={1}
                    overflow="hidden"
                    backgroundColor={isSelected? "#89b4f4a":undefined}
                    onMouseMove={()=>onSelect(i)}
                    onMouseDown={()=>onExecute(i)}
                    >
                    <box width={COL_WIDTH} flexShrink={0}>
                        <text selectable={false} fg={isSelected? "black":"white"}>
                            /{cmd.name}
                        </text>

                    </box>

                       <box width={COL_WIDTH} flexShrink={1} flexGrow={1} overflow="hidden">
                        <text selectable={false} fg={isSelected? "black":"gray"}>
                            /{cmd.description}
                        </text>
                    </box>
                    </box>
                )
           })}
        </scrollbox>
    )
}