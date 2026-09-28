# Images

Only concepts that are easier to see than to read get an image. Diagrams that must be exact (compiler pipeline, stack vs heap) are drawn in code on the page instead.

## Shared style (paste before every prompt)

> Notion-style hand-drawn doodle illustration. Loose, confident black ink line art (#1a1a1a) with slightly uneven, pen-like strokes of varying weight, like a quick marker sketch. Flat fills only: everything is white except a single spot color, warm orange (#f29a38), used only on the key element of the concept. Solid black fills allowed for small details. No gradients, no shading, no textures, no 3D. Playful, friendly, slightly exaggerated proportions. Draw whatever best explains the idea (objects, hands, a small scene); include people only if the concept needs them, with minimal faces. Small motion lines or sparkle marks for movement and emphasis. Generous whitespace, subject centered, no frame or border. Any labels are short, lowercase, hand-lettered. Solid warm off-white background (#fafaf9), not transparent. 16:9, 1600x900 px.

## How to use

1. Open ChatGPT (image generation), paste the shared style, then the prompt for one image.
2. Download as PNG (keep the off-white background: black ink would vanish on a transparent image in dark mode).
3. Save it with the exact file name into `public/images/`.
4. Reload the lesson. The placeholder is replaced by your image (after `pnpm build` in production).

## 1. `class-blueprint.png`

Used in: lesson 05, Classes.

> A big blueprint sheet of a simple house on the left, corners slightly curled and pinned down, hand-labeled "class person". Three curvy doodle arrows swoop from the blueprint to three small finished houses on the right, each slightly different (one has a round window, one a potted plant, one a striped door), each labeled "object". The blueprint paper is the orange accent; the houses are white with black ink. Small sparkle marks around the houses. Conveys: one class, many objects built from it.

## 2. `value-vs-reference.png`

Used in: lesson 07, Value vs Reference.

> Two side-by-side scenes separated by a thin hand-drawn vertical line, hand-labeled "value type" and "reference type". Left: a sheet that says "42" next to its photocopy (a curved arrow between them); a hand with a pen scribbles wildly on the copy with motion lines, while the original stays clean. Right: two small cards with the same house address; dotted lines from both cards lead to one single house; a paintbrush paints its door orange, with little exclamation marks next to both cards. Conveys: copying a value makes an independent copy, copying a reference shares the same object.
