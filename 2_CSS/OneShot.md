# 🎨 CSS Interview Questions — Top 20

> Only the most asked questions with clear explanations for confident interview answers.

---

### Q1. What is CSS and how do you add it to HTML?

CSS stands for **Cascading Style Sheets**. It controls the **visual presentation** of HTML elements — colors, fonts, spacing, layout, animations, etc.

Three ways to add CSS:

```html
<!-- 1. Inline — directly on the element (highest priority, least maintainable) -->
<p style="color: red;">Hello</p>

<!-- 2. Internal — inside <style> tag in <head> -->
<style>
  p { color: red; }
</style>

<!-- 3. External — separate .css file linked in <head> (BEST PRACTICE) -->
<link rel="stylesheet" href="styles.css" />
```

External CSS is preferred because it keeps HTML clean, enables caching, and allows reuse across pages.

---

### Q2. What is CSS Specificity and how is it calculated?

Specificity determines **which CSS rule wins** when multiple rules target the same element. It is calculated as a 4-part score:

| Selector Type | Score | Example |
|---------------|-------|---------|
| Inline style | `1,0,0,0` | `style="color:red"` |
| ID | `0,1,0,0` | `#header` |
| Class / Attribute / Pseudo-class | `0,0,1,0` | `.nav`, `[type="text"]`, `:hover` |
| Element / Pseudo-element | `0,0,0,1` | `div`, `p`, `::before` |

**Example:**
```css
div p { }            /* 0,0,0,2 */
.card p { }          /* 0,0,1,1 — WINS over above */
#main .card p { }    /* 0,1,1,1 — WINS over above */
```

`!important` overrides everything but should be **avoided** — it makes debugging extremely difficult.

---

### Q3. What is the CSS Box Model?

Every HTML element is a rectangular box made up of 4 layers (inside→out):

```
┌──────────────── margin ────────────────┐
│  ┌──────────── border ──────────────┐  │
│  │  ┌──────── padding ────────────┐ │  │
│  │  │       content area          │ │  │
│  │  └─────────────────────────────┘ │  │
│  └──────────────────────────────────┘  │
└────────────────────────────────────────┘
```

- **Content** — the actual text / image
- **Padding** — space between content and border (inside the element)
- **Border** — the visible edge of the element
- **Margin** — space outside the border (between this element and neighbors)

By default `width` only sets the **content** width. With `box-sizing: border-box`, the `width` includes padding + border — much easier to work with.

```css
* { box-sizing: border-box; } /* Best practice — add to every project */
```

---

### Q4. What is the difference between `margin` and `padding`?

| Feature | `margin` | `padding` |
|---------|----------|-----------|
| Position | **Outside** the border | **Inside** the border |
| Background | Transparent — background does NOT apply | Background color/image applies |
| Collapse | Vertical margins collapse (overlap) | Paddings never collapse |
| Use Case | Space **between** elements | Space **inside** an element (content breathing room) |

**Margin collapse:** If two vertical margins meet, only the larger one is applied, not the sum.

---

### Q5. What is Flexbox and when do you use it?

Flexbox is a **one-dimensional** layout system for arranging items in a row or column with powerful alignment controls.

```css
.container {
  display: flex;
  justify-content: center;  /* horizontal alignment */
  align-items: center;       /* vertical alignment */
  gap: 20px;                 /* space between items */
}
```

| Property | What it does |
|----------|-------------|
| `flex-direction` | `row` (default) or `column` |
| `justify-content` | Main axis alignment: `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `align-items` | Cross axis alignment: `flex-start`, `center`, `flex-end`, `stretch`, `baseline` |
| `flex-wrap` | `nowrap` (default) or `wrap` to allow wrapping |
| `gap` | Spacing between flex items |

**Use Flexbox for:** navbars, centering content, card rows, any single-axis layout.

---

### Q6. What is CSS Grid and how is it different from Flexbox?

Grid is a **two-dimensional** layout system — it controls both rows AND columns at the same time.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;  /* 3 columns */
  grid-template-rows: auto 1fr auto;    /* 3 rows */
  gap: 20px;
}
```

| Feature | Flexbox | Grid |
|---------|---------|------|
| Dimensions | **1D** (row OR column) | **2D** (rows AND columns) |
| Best For | Components, navbars, alignment | Full page layouts, dashboards |
| Content vs Layout | Items determine size | Grid defines the structure |

**Rule of thumb:** Use Flexbox for components, Grid for page-level layouts. They can be combined.

---

### Q7. Explain CSS `position` property values.

| Value | Behavior |
|-------|----------|
| `static` | Default. Normal document flow. `top`/`left` have no effect. |
| `relative` | Stays in normal flow but can be **offset** with `top`/`left`. Creates a positioning context for children. |
| `absolute` | Removed from flow. Positioned relative to **nearest positioned ancestor** (not `static`). |
| `fixed` | Removed from flow. Positioned relative to the **viewport**. Stays in place on scroll. |
| `sticky` | Acts as `relative` until a scroll threshold is reached, then becomes `fixed`. |

```css
.parent { position: relative; }
.child  { position: absolute; top: 10px; right: 10px; } /* positioned relative to .parent */
.navbar { position: sticky; top: 0; }                    /* sticks to top on scroll */
```

---

### Q8. What is the difference between `em`, `rem`, `px`, `%`, `vh`, and `vw`?

| Unit | Relative To | Example |
|------|-------------|---------|
| `px` | Absolute — fixed size | `font-size: 16px` |
| `em` | Parent element's font size | If parent is 16px → `2em = 32px` |
| `rem` | **Root** (`<html>`) font size | If root is 16px → `2rem = 32px` |
| `%` | Parent element's size | `width: 50%` = half of parent |
| `vh` | 1% of viewport **height** | `height: 100vh` = full screen height |
| `vw` | 1% of viewport **width** | `width: 50vw` = half screen width |

**Best practice:** Use `rem` for font sizes (consistent scaling), `%` or `fr` for widths, `px` only for borders/shadows.

---

### Q9. What are CSS Media Queries?

Media queries let you apply **different styles based on screen size**, making your site responsive.

```css
/* Mobile first — base styles for small screens */
.container { padding: 10px; }

/* Tablet and up */
@media (min-width: 768px) {
  .container { padding: 20px; max-width: 720px; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container { padding: 40px; max-width: 960px; }
}
```

**Common breakpoints:** 480px (mobile), 768px (tablet), 1024px (laptop), 1280px (desktop).

**Best practice:** Design **mobile-first** — write base styles for small screens, then add complexity with `min-width` queries.

---

### Q10. What is the difference between `display: none` and `visibility: hidden`?

| Property | Visibility | Takes Space | Accessible |
|----------|-----------|-------------|------------|
| `display: none` | Hidden | **No** — element is completely removed from layout | Screen readers skip it |
| `visibility: hidden` | Hidden | **Yes** — empty space remains | Screen readers may still read it |

```css
.hidden  { display: none; }       /* Element gone from layout */
.invisible { visibility: hidden; } /* Element invisible but space preserved */
```

Use `display: none` for toggling elements. Use `visibility: hidden` when you need to keep the layout intact.

---

### Q11. What are CSS Pseudo-classes and Pseudo-elements?

**Pseudo-classes** select elements in a particular **state**:
```css
a:hover { color: red; }         /* when mouse hovers */
input:focus { border: 2px solid blue; } /* when focused */
li:nth-child(2n) { background: #f0f0f0; } /* even items */
li:first-child { font-weight: bold; }
```

**Pseudo-elements** style a **specific part** of an element:
```css
p::first-line { font-weight: bold; }
p::first-letter { font-size: 2em; }
.card::before { content: "★"; }     /* inserts content before */
.card::after { content: ""; }       /* often used for decorative shapes */
```

Key difference: Pseudo-classes use **one colon** (`:`), pseudo-elements use **two colons** (`::`).

---

### Q12. What is the `z-index` and how does it work?

`z-index` controls the **stacking order** of overlapping elements. Higher value = element appears on top.

**Important rules:**
1. Only works on **positioned** elements (`relative`, `absolute`, `fixed`, `sticky`).
2. Creates a **stacking context** — children are stacked relative to their parent's context.
3. Without `z-index`, elements stack in document order (later = on top).

```css
.modal-overlay { position: fixed; z-index: 100; }
.modal { position: fixed; z-index: 101; }  /* appears above overlay */
.dropdown { position: absolute; z-index: 10; }
```

---

### Q13. What are CSS Transitions and Animations?

**Transitions** — smooth change between two states triggered by an event (hover, focus, class change):

```css
.button {
  background: blue;
  transition: background 0.3s ease, transform 0.2s ease;
}
.button:hover {
  background: darkblue;
  transform: scale(1.05);
}
```

**Animations** — complex multi-step sequences that run automatically:

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card {
  animation: fadeIn 0.5s ease-out forwards;
}
```

**When to use:** Transitions for simple hover/state effects. Animations for complex, multi-step, or auto-playing effects.

---

### Q14. What is the difference between `inline`, `inline-block`, and `block`?

| Property | Width/Height | New Line | Margin/Padding |
|----------|-------------|----------|----------------|
| `inline` | Ignored | No | Only horizontal works |
| `inline-block` | Respected | No | All directions work |
| `block` | Respected | Yes | All directions work |

```css
span { display: inline; }        /* default for span — can't set width/height */
span { display: inline-block; }  /* stays in line BUT respects width/height */
div  { display: block; }         /* default for div — full width, new line */
```

Use `inline-block` when you want elements side-by-side but also need width/height control.

---

### Q15. What are CSS Variables (Custom Properties)?

CSS variables let you store reusable values and change them in one place:

```css
:root {
  --primary: #3b82f6;
  --spacing: 16px;
  --radius: 8px;
}

.button {
  background: var(--primary);
  padding: var(--spacing);
  border-radius: var(--radius);
}

/* Dark theme — just change variables */
.dark {
  --primary: #60a5fa;
}
```

**Advantages over preprocessor variables (Sass):**
- Can be changed at runtime with JavaScript
- Cascade and inherit like normal CSS properties
- Can be scoped to specific selectors

---

### Q16. What is the `clamp()` function?

`clamp()` sets a value that **scales fluidly** between a minimum and maximum:

```css
/* clamp(minimum, preferred, maximum) */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* At least 1.5rem, scales with viewport, max 3rem */
}

.container {
  width: clamp(300px, 80%, 1200px);
  /* At least 300px, prefers 80% of parent, max 1200px */
}
```

This eliminates the need for many media queries for responsive typography and layout.

---

### Q17. What is BEM naming convention?

BEM stands for **Block – Element – Modifier**. It's a CSS naming convention that makes classes predictable and maintainable:

```css
/* Block — standalone component */
.card { }

/* Element — part of the block (double underscore) */
.card__title { }
.card__image { }
.card__body { }

/* Modifier — variation/state (double hyphen) */
.card--featured { }
.card__title--large { }
```

```html
<div class="card card--featured">
  <img class="card__image" src="..." />
  <h2 class="card__title card__title--large">Title</h2>
  <p class="card__body">Description</p>
</div>
```

BEM prevents specificity wars and makes it clear which styles belong to which component.

---

### Q18. What is the difference between `transform` and `transition`?

| Feature | `transform` | `transition` |
|---------|------------|-------------|
| What it does | **Changes** an element (move, rotate, scale, skew) | **Animates** the change smoothly over time |
| On its own | Instant — no animation | Does nothing without a property change |

They are often used **together**:

```css
.card {
  transition: transform 0.3s ease;  /* animate the transform */
}
.card:hover {
  transform: translateY(-10px) scale(1.02);  /* the actual change */
}
```

Common transform functions: `translate()`, `rotate()`, `scale()`, `skew()`, `matrix()`.

---

### Q19. How does CSS Cascade and Inheritance work?

**Cascade** — when multiple rules match the same element, CSS resolves conflicts using this priority order:

1. `!important` declarations (avoid if possible)
2. Inline styles (`style="..."`)
3. ID selectors (`#header`)
4. Class selectors (`.nav`)
5. Element selectors (`div`)
6. Source order (later rule wins if specificity is equal)

**Inheritance** — some properties are automatically passed from parent to child:
- **Inherited:** `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`
- **Not inherited:** `margin`, `padding`, `border`, `width`, `height`, `display`, `background`

```css
body { color: #333; font-family: sans-serif; }
/* All text inside body inherits these unless overridden */
```

---

### Q20. How do you center a div both horizontally and vertically?

**Method 1 — Flexbox (most common):**
```css
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

**Method 2 — Grid (shortest):**
```css
.parent {
  display: grid;
  place-items: center;
  height: 100vh;
}
```

**Method 3 — Absolute positioning + transform:**
```css
.parent { position: relative; height: 100vh; }
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

Flexbox is the preferred method for most use cases.

---

_Made with ❤️ for Frontend Mastery_
