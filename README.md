# Boilerplate

## HTML

```bash
pnpx degit crhallberg/boilerplate/html .
```

Source: _[My current HTML boilerplate](https://www.matuzo.at/blog/html-boilerplate/)_ by [Manuel Matuzović](https://twitter.com/mmatuzo) (2021 April 9).

- [Favicons Guide](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) (2022 February 5)

### CSS

- [Modern Normalize](https://cdn.jsdelivr.net/npm/modern-normalize/modern-normalize.css)

### Colors

- [Download Colors from contrast app](https://crhallberg.com/colors)

### Fonts

Download into `assets/fonts`. Also consider [FontSource](https://fontsource.org/)

#### Sans Serif

- [Inter](https://github.com/rsms/inter/releases/latest) (legible sans)
- [Lexend](https://github.com/ThomasJockin/readexpro/tree/master/fonts) (reading sans)

#### Serif

- [Crimson](https://github.com/Fonthausen/CrimsonPro/tree/master/fonts) (old-fashioned serif)
- [Literata](https://www.type-together.com/literata-font) (legible serif, free download)
- [Zilla Slab](https://github.com/mozilla/zilla-slab/releases) (modern serif)

#### Display

- [Affogato](https://lobdell.me/affogato/) (friendly sans-serif)
- [Convergence](https://github.com/google/fonts/blob/main/ofl/convergence/Convergence-Regular.ttf) (tiny fun sans)
- [Iosevka](https://github.com/be5invis/Iosevka/releases) (monospace, Term SS07)
- [Luciole](https://www.luciole-vision.com/luciole-en.html#download) (dyslexia sans)

### Icons

- [Remix Icons](https://github.com/Remix-Design/RemixIcon/tree/master/fonts)

## Svelte

```bash
pnpx degit crhallberg/boilerplate/svelte .
```

Basic setup with TailwindCSS configured.

## Astro

"Just the basics" with cruft removed and TailwindCSS and MDX installed.

```bash
pnpx degit crhallberg/boilerplate/astro .
```

Recreate with:

```bash
pnpm create astro@latest
pnpm astro add tailwind mdx
```
