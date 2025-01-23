<script lang="ts">
import { UseMouse } from "$lib/sensors/index.ts";

let coords = new UseMouse();
</script>

<h1>Welcome to your library project</h1>
<p>
  mouse x: {coords.x}
  mouse y: {coords.y}
</p>
<p>
  Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
  documentation
</p>
