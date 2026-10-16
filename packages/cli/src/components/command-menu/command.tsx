import type { Command } from "./types";

export const COMMANDs:Command[]=[
    {
        name:'new',
        description:"start a new conversation",
        value:"/new"
    },
    {
        name:'exit',
        description:"Quit the app",
        value:"/exit",
        action:(ctx)=>{
            ctx.exit();
        }
    }
]