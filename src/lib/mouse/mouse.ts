import { browser } from "$app/environment";
import type { MouseCoordinates } from "./types.ts";

export function useMouse(): MouseCoordinates {
    return {
        x: browser ? 0 : 1,
        y: browser ? 0 : 1
        
    }
}
