<script context="module">
  import { writable } from "svelte/store";

  let notes = writable([]);

  let clearNotifications;
  export function notify(msg, hex) {
    notes.update((draft) => {
      console.log(msg);
      draft.push({ msg, bg: hex, text: blackOrWhite(hex) });
      return draft;
    });

    clearTimeout(clearNotifications);
    clearNotifications = setTimeout(() => {
      notes.update((draft) => {
        return [];
      });
    }, 3000);
  }
</script>

<script>
  import { fly } from "svelte/transition";
</script>

<div class="notification-container">
  {#each $notes as { msg }}
    <div
      class="notification"
      transition:fly={{ x: 100 }}
    >
      {msg}
    </div>
  {/each}
</div>

<style>
  .notification-container {
    @apply fixed z-20 bottom-0 right-4;
  }

  .notification {
    @apply table mx-auto my-4 px-6 py-2 rounded shadow;
  }
</style>
