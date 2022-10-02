<script>
  import "./app.css";
  import Notifications from "./components/Notifications.svelte";

  import { config } from "./stores.mjs";
</script>

<header></header>

<main id="main"></main>

<div class="modal" class:sr-only={!configIsOpen}>
  <div class="modal__bg" on:click|self={() => (configIsOpen = false)}>
    <div class="modal__content">
      <h2 class="mx-1 my-2 text-xl font-bold">Config</h2>

      <div class="columns-2">
        {#each $paletteConfig as p}
          <label class="block px-2 py-1 hover:bg-blue-100 cursor-pointer">
            <input data-check-src={p.src} type="checkbox" checked={p.enabled} />
            {p.name}
          </label>
        {/each}
      </div>

      <button class="btn--submit" on:click={updateConfig}>Save</button>
    </div>
  </div>
</div>

<Notifications />

<footer>
  Built with 💜 by <a href="https://crhallberg.com">Chris Hallberg</a>. Powered
  by
  <a href="https://gka.github.io/chroma.js/">chroma-js</a>. Built with
  <a href="https://svelte.dev/">Svelte</a>
  + <a href="https://vitejs.dev/">Vite</a>.
  <a href="https://choosealicense.com/licenses/mit/">MIT Licensed.</a>
</footer>
