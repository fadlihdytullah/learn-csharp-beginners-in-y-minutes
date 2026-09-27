# Images

Only concepts that are easier to see than to read get an image. Diagrams that must be exact (compiler pipeline, stack vs heap) are drawn in code on the page instead.

## Shared style (paste before every prompt)

> Minimal flat vector illustration, thin uniform line art, mostly neutral gray strokes (#8f8f8f) with a single soft indigo accent (#7d8cff) used only on the key element. Transparent background, no gradients, no shadows, no 3D. Clean, calm, generous whitespace, like a modern developer-docs illustration. Any labels are short, lowercase, in a clean monospace font. 16:9, 1600x900 px.

## How to use

1. Open ChatGPT (image generation), paste the shared style, then the prompt for one image.
2. Download as PNG with a transparent background.
3. Save it with the exact file name into `public/images/`.
4. Reload the lesson. The placeholder is replaced by your image (after `pnpm build` in production).

## 1. `class-blueprint.png`

Used in: lesson 05, Classes.

> An architect's blueprint of a simple house on the left, labeled "class Person". Three arrows go from the blueprint to three small, finished houses on the right, each slightly different (different door color, different window plants), labeled "object", "object", "object". The blueprint is drawn in the indigo accent; the houses in gray. Conveys: one class, many objects built from it.

## 2. `value-vs-reference.png`

Used in: lesson 07, Value vs Reference.

> Two side-by-side panels. Left panel titled "value type": a person photocopies a sheet of paper that says "42"; the copy is then scribbled on, while the original stays clean. Right panel titled "reference type": two people each hold a small card with the same house address; both cards point with dotted lines to one single house; one person repaints the door indigo and both see the change. Conveys: copying a value makes an independent copy, copying a reference shares the same object.
