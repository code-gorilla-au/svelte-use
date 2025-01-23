import { describe, expect, it } from "vitest";
import { UseMouse } from "./mouse.svelte.ts";

describe("useMouse", () => {
	it("should return x and y coordinates", () => {
		const { x, y, sourceType } = new UseMouse();
		expect(x).toBe(0);
		expect(y).toBe(0);
		expect(sourceType).toBe("undefined");
	});
});
