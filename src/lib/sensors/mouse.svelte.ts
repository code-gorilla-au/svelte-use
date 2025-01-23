import { browser } from "$app/environment";
import { onDestroy, onMount } from "svelte";
import type { MouseCoordinates } from "./types.ts";

export class UseMouse {
	private state = $state<MouseCoordinates>({
		x: 0,
		y: 0,
		sourceType: undefined,
	});

	x = $derived(this.state.x);
	y = $derived(this.state.y);
	sourceType = $derived(this.state.sourceType);

	constructor() {
		if (browser) {
			onMount(() => {
				document.addEventListener("mousemove", this.handleMouseMove);
			});

			onDestroy(() => {
				document.removeEventListener("mousemove", this.handleMouseMove);
			});
		}
	}

	handleMouseMove = (event: MouseEvent) => {
		this.state.x = event.clientX;
		this.state.y = event.clientY;
		this.state.sourceType = "mouse";
	};
}
