# L Shark Tech — Brand Kit

## Files

| File | Type | Description |
|------|------|-------------|
| `icon.svg` | Vector | Símbolo base da marca (L + barbatana + tecnologia) |
| `logo-symbol.svg` | Vector | Mesmo que icon.svg — versão isolada do símbolo |
| `logo-horizontal.svg` | Vector | Símbolo + nome "L SHARK TECH" lado a lado |
| `logo-vertical.svg` | Vector | Símbolo centralizado com nome abaixo em duas linhas |
| `logo-dark.svg` | Vector | Logo para fundos escuros (símbolo ciano, texto branco) |
| `logo-light.svg` | Vector | Logo para fundos claros (símbolo e texto cinza escuro) |
| `logo-dark.png` | Raster 800×800 | Versão raster do logo-dark |
| `logo-light.png` | Raster 800×800 | Versão raster do logo-light |

## Favicon & App Icons

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | multi | Browser tab (derivado do símbolo) |
| `favicon.svg` | — | Favicon vetorial moderno |
| `favicon-96x96.png` | 96×96 | Dispositivos Android (antigo) |
| `apple-touch-icon.png` | 180×180 | iOS home screen |
| `android-chrome-192x192.png` | 192×192 | Android PWA |
| `android-chrome-512x512.png` | 512×512 | Android splash screen |

Cópias de `favicon.ico`, `favicon.svg` e `apple-touch-icon.png` estão também em `public/` (raiz) para descoberta automática por navegadores, e em `src/app/favicon.ico` para o App Router do Next.js.

## Símbolo

O símbolo é construído com paths vetoriais描 que formam:
- A letra **L**
- Uma **barbatana dorsal** estilizada
- Conexões/linhas de **dados e tecnologia**
- Um formato que também evoca um **circuito** ou **engenharia**

Paleta de cores aplicada:
- Traços principais: `#45C7F4` (ciano) na versão dark
- Traços versão light: `#3A3A3A` (cinza escuro)

## Uso recomendado

| Contexto | Arquivo |
|----------|---------|
| Header do site (fundo claro) | `logo-light.svg` ou `logo-light.png` |
| Header do site (fundo escuro) | `logo-dark.svg` ou `logo-dark.png` |
| Apenas ícone (favicon, avatar) | `icon.svg` |
| Apresentações / documentos | `logo-horizontal.svg` |
| Perfil quadrado / badge | `logo-vertical.svg` |

## Boas práticas

- Sempre usar SVG quando possível (escala sem perda)
- PNGs fornecidos para ambientes que não suportam SVG
- Não distorcer, esticar ou rotacionar o logotipo
- Manter espaço de respiro ao redor do símbolo
- Favicon deve sempre usar apenas o símbolo, nunca o logotipo completo
- Preferir `icon.svg` para favicon em navegadores modernos
