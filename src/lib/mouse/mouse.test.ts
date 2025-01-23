import {describe, it, expect} from "vitest"
import { useMouse } from "./mouse.ts";


describe("useMouse", () => {
    it("should return x and y coordinates", () => {
        const { x,y, sourceType } = useMouse();
        expect(x).toBe(0);
        expect(y).toBe(0);
        expect(sourceType).toBe("mouse");
    })
})
