import { COMMANDs } from "./command";
import type { Command } from "./types";

export function getFilteredCommands(query:string):Command[]{
    if(query.length===0) return COMMANDs;
    return COMMANDs.filter((cmd)=>cmd.name.toLowerCase().startsWith(query.toLowerCase())
)
}