<script>
    export let icon = null, text = null;
</script>

{#if $$slots.text || $$slots.pre}
  <span class="inline-icon">
    <slot name="pre" />
    <svg class="icon"><use xlink:href="/assets/remixicon.symbol.svg#{icon}"></use></svg>
    <slot name="text" />
  </span>
{:else if text}
  <span class="inline-icon">
    <svg class="icon"><use xlink:href="/assets/remixicon.symbol.svg#{icon}"></use></svg>
    {text}
  </span>
{:else if icon}
  <svg class="icon"><use xlink:href="/assets/remixicon.symbol.svg#{icon}"></use></svg>
{/if}

<style>
  .icon {
    display: inline;
    flex: none;
    width: 1em;
    height: 1em;
    fill: currentColor;
  }
</style>
