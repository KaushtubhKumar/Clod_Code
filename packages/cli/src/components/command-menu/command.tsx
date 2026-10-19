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
    },
    {
        name:'login',
        description:"Sign in with browser",
        value:"/login"
    },
    {
        name:'logout',
        description:"Sign out from  your account",
        value:"/logout"
    },
    {
        name:'models',
        description:"Select AI model for reasoning",
        value:"/models"
    },
    {
        name:'sessions',
        description:"Browse your past sessions",
        value:"/sessions"
    },
    {
        name:'themes',
        description:"Change color theme",
        value:"/theme"
    },
    {
        name:'agents',
        description:"Spawn or switch multiple agents",
        value:"/agents"
    },
    
]