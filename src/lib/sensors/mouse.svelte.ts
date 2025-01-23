import { browser } from "$app/environment";
import { onDestroy, onMount } from "svelte";
import type { MouseCoordinates } from "./types.ts";

export function useMouse(): MouseCoordinates {
	if (!browser) {
		return {
			x: 0,
			y: 0,
		};
	}

	const state = $state<MouseCoordinates>({
		x: 0,
		y: 0,
		sourceType: undefined,
	});

	function handleMouseMove(event: MouseEvent) {
		console.log(event.clientX);
		state.x = event.clientX;
		state.y = event.clientY;
		state.sourceType = "mouse";
	}

	onMount(() => {
		document.addEventListener("mousemove", handleMouseMove);
	});

	onDestroy(() => {
		document.removeEventListener("mousemove", handleMouseMove);
	});

	return {
		x: state.x,
		y: state.y,
		sourceType: state.sourceType,
	};
}

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
				window.addEventListener("mousemove", this.handleMouseMove);
			});

			onDestroy(() => {
				window.removeEventListener("mousemove", this.handleMouseMove);
			});
		}
	}

	handleMouseMove = (event: MouseEvent) => {
		this.state.x = event.clientX;
		this.state.y = event.clientY;
		this.state.sourceType = "mouse";
	};
}
