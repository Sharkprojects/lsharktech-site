# L Shark Tech — Brand Kit

## Logo Versions

| File | Usage |
|------|-------|
| `logo.svg` | Full logo with symbol, name and slogan. Use for websites, documents and presentations. |
| `logo-horizontal.svg` | Symbol + name side by side. Use for headers, navigation and social media. |
| `logo-vertical.svg` | Symbol centered above name. Use for profile pictures, badges and square formats. |
| `logo-symbol.svg` | Icon only. Use for favicons, app icons and avatar thumbnails. |
| `icon.svg` | Same as logo-symbol. Base icon for all derivatives. |

## Color Variants

| File | When to use |
|------|-------------|
| `logo-dark.svg` | On light/white backgrounds (default). Symbol in #45C7F4, text in #111111. |
| `logo-light.svg` | On dark backgrounds (#111111). Symbol in #45C7F4, text in white. |
| `logo-monochrome-black.svg` | When only black is allowed (e.g., black-and-white print). |
| `logo-monochrome-white.svg` | When only white is allowed (e.g., dark backgrounds with no color). |

## Favicon & App Icons

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 32×32 | Browser tab icon |
| `favicon.svg` | — | Modern SVG favicon |
| `favicon-16.png` | 16×16 | Legacy browsers |
| `favicon-32.png` | 32×32 | Desktop shortcuts |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `android-chrome-192.png` | 192×192 | Android PWA |
| `android-chrome-512.png` | 512×512 | Android splash screen |

Copies of `favicon.ico`, `favicon.svg` and `apple-touch-icon.png` are also placed at `public/` root for automatic discovery by browsers.

## Color Palette

| Token | Hex |
|-------|-----|
| Primary | `#45C7F4` |
| Background | `#111111` |
| Dark | `#1A1A1A` |
| Border | `#2B2B2B` |
| White | `#FFFFFF` |

## Typography

| Usage | Font |
|-------|------|
| Logo | Geist / Inter, 700 weight, uppercase, wide letter-spacing |
| Slogan | Geist / Inter, 400 weight, uppercase, wide letter-spacing |

## Best Practices

- Always use the vector SVGs when possible. PNGs are provided for environments that do not support SVG.
- Do not stretch, distort, or rotate the logo.
- Maintain clear space around the logo equal to at least the height of the symbol.
- The symbol (icon) should never be used without the accent dot.
- Favicon must always be the symbol — never the full logo.
- For dark mode, use the light variant. For light mode, use the dark variant.
