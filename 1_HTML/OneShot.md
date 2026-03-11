# 📚 HTML Interview Questions — Top 20

> Only the most asked questions with clear explanations for confident interview answers.

---

### Q1. What is HTML?

HTML stands for **HyperText Markup Language**. It is the standard language used to create the structure of web pages. HTML uses **tags** (like `<h1>`, `<p>`, `<div>`) to define elements — headings, paragraphs, images, links, forms, etc. It is **not a programming language**; it is a **markup language** that tells the browser how to display content.

---

### Q2. What is the basic structure of an HTML document?

Every HTML page follows this skeleton:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>
```

- `<!DOCTYPE html>` — tells the browser this is HTML5.
- `<html>` — root element wrapping everything.
- `<head>` — contains metadata (title, charset, stylesheets) — **not visible** on the page.
- `<body>` — contains all **visible content** (text, images, buttons, etc.).

---

### Q3. What is the difference between Block and Inline elements?

| Feature | Block Elements | Inline Elements |
|---------|---------------|-----------------|
| Width | Takes **full width** of parent | Takes only **as much width as needed** |
| New Line | Always starts on a **new line** | Stays on the **same line** |
| Examples | `<div>`, `<p>`, `<h1>`–`<h6>`, `<section>` | `<span>`, `<a>`, `<img>`, `<strong>`, `<em>` |

Two `<div>` tags appear on separate lines. Two `<span>` tags sit side by side.

---

### Q4. What is DOCTYPE and why is it important?

`<!DOCTYPE html>` is a declaration at the very top of an HTML document. It tells the browser to render in **standards mode** (HTML5). Without it the browser may switch to **quirks mode**, which mimics old rendering behaviour and can cause layout bugs and cross-browser inconsistencies.

---

### Q5. What is the difference between `<div>` and `<span>`?

- `<div>` is a **block-level** container — takes full width and starts on a new line. Used to group large sections.
- `<span>` is an **inline** container — wraps only the content it needs and stays in the same line. Used to style a small piece of text.

```html
<div>This takes full width</div>
<p>This is <span style="color:red;">red text</span> inside a paragraph.</p>
```

---

### Q6. What are void (self-closing) elements?

Void elements **cannot contain children** and do not need a closing tag.

Common examples: `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`, `<link>`, `<source>`

```html
<img src="photo.jpg" alt="My Photo" />
<br />
<input type="text" placeholder="Enter name" />
```

---

### Q7. What is the difference between `<strong>` / `<b>` and `<em>` / `<i>`?

| Tag | Visual Effect | Semantic Meaning |
|-----|--------------|------------------|
| `<strong>` | **Bold** | Important text — screen readers emphasise it |
| `<b>` | **Bold** | No special meaning — purely visual |
| `<em>` | *Italic* | Stressed emphasis — screen readers change tone |
| `<i>` | *Italic* | No special meaning — purely visual |

**In interviews say:** "I prefer `<strong>` and `<em>` because they are **semantic** — better for SEO and accessibility."

---

### Q8. What are HTML attributes?

Attributes provide **extra information** about an element. Written inside the opening tag as `name="value"` pairs.

```html
<a href="https://google.com" target="_blank">Google</a>
<img src="logo.png" alt="Company Logo" width="200" />
<input type="email" id="email" class="form-input" required />
```

Common attributes: `id`, `class`, `src`, `href`, `alt`, `title`, `style`, `placeholder`, `required`, `disabled`.

---

### Q9. What are the different input types in HTML5?

HTML5 added input types that give **built-in validation and native UI controls** without JavaScript:

| Type | Purpose |
|------|---------|
| `text` | Plain text |
| `email` | Validates `@` presence |
| `password` | Masks characters |
| `number` | Numeric + spinner buttons |
| `tel` | Phone number |
| `url` | URL validation |
| `date` / `time` | Date/time pickers |
| `range` | Slider |
| `color` | Color picker |
| `file` | File upload |
| `checkbox` | Multiple selections |
| `radio` | Single selection in a group |

---

### Q10. How do you make a form field required without JavaScript?

Add the `required` attribute. The browser **blocks submission** and shows a validation message if the field is empty.

```html
<form>
  <input type="text" required placeholder="Name" />
  <input type="email" required placeholder="Email" />
  <button type="submit">Submit</button>
</form>
```

Other validation attributes: `minlength`, `maxlength`, `min`, `max`, `pattern`.

---

### Q11. What is the difference between GET and POST methods?

| Feature | GET | POST |
|---------|-----|------|
| Data Location | URL query string | Request body (hidden) |
| Visible in URL | Yes | No |
| Data Limit | ~2 KB (URL length limit) | No practical limit |
| Security | Less secure | More secure |
| Use Case | Searching / fetching data | Submitting forms / sensitive data |
| Bookmarkable | Yes | No |

Google search uses GET (`?q=html`). Login forms use POST.

---

### Q12. What is Semantic HTML and why does it matter?

Semantic HTML means using tags that **describe the meaning** of content rather than just its appearance.

| Semantic ✅ | Non-Semantic ❌ |
|-------------|-----------------|
| `<header>` | `<div class="header">` |
| `<nav>` | `<div class="nav">` |
| `<main>` | `<div class="content">` |
| `<article>` | `<div class="post">` |
| `<footer>` | `<div class="footer">` |

**Why it matters:**

1. **SEO** — search engines understand page structure → higher rankings.
2. **Accessibility** — screen readers navigate sections for visually impaired users.
3. **Maintainability** — code is self-documenting and easier to read.

---

### Q13. What is the difference between `<section>`, `<article>`, and `<div>`?

- **`<section>`** — groups **related content** under a common theme (like a chapter). Example: "Features" section.
- **`<article>`** — **self-contained content** that makes sense on its own. Example: a blog post, a product card.
- **`<div>`** — **generic container** with no semantic meaning. Use only when no semantic tag fits.

**Rule of thumb:** If content could be syndicated independently (RSS), use `<article>`. Thematic grouping → `<section>`. Everything else → `<div>`.

---

### Q14. What is the purpose of the `alt` attribute in images?

The `alt` attribute provides **alternative text** for an image:

1. **Accessibility** — screen readers read it aloud for visually impaired users.
2. **SEO** — search engines use it to understand and index images.
3. **Fallback** — displayed when the image fails to load.

```html
<img src="team.jpg" alt="Our development team at the office" />
```

For purely decorative images use empty alt: `alt=""`.

---

### Q15. What are `<meta>` tags and why are they important?

Meta tags sit inside `<head>` and provide **metadata** for browsers, search engines, and social media.

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Learn HTML interview questions" />
<meta name="robots" content="index, follow" />
```

The **viewport** meta tag is critical — without it your page will not be responsive on mobile.

---

### Q16. What is the difference between `<script>`, `<script async>`, and `<script defer>`?

| Attribute | Download | Execution | Order Guaranteed |
|-----------|----------|-----------|-----------------|
| _(none)_ | Blocks HTML parsing | Immediately | Yes |
| `async` | Parallel with HTML | As soon as downloaded | No |
| `defer` | Parallel with HTML | After HTML fully parsed | Yes |

```html
<script src="blocking.js"></script>
<script async src="analytics.js"></script>
<script defer src="main.js"></script>
```

**Best practice:** `defer` for main scripts, `async` for independent scripts (analytics, ads).

---

### Q17. What is the difference between `<link>` and `<a>`?

- **`<link>`** — goes in `<head>`, connects external resources (CSS, fonts, favicon). Void element — not visible.
- **`<a>`** — goes in `<body>`, creates clickable hyperlinks for navigation.

```html
<link rel="stylesheet" href="styles.css" />
<a href="https://google.com" target="_blank">Visit Google</a>
```

---

### Q18. What is the difference between `<canvas>` and `<svg>`?

| Feature | `<canvas>` | `<svg>` |
|---------|-----------|---------|
| Type | Raster (pixel-based) | Vector (math-based) |
| Zoom Quality | Gets pixelated | Stays sharp at any size |
| Best For | Games, complex animations | Icons, logos, charts |
| DOM Access | No individual shapes in DOM | Each shape is a DOM element |
| Performance | Better with many objects | Slower with thousands of elements |

Use `<svg>` for icons/logos, `<canvas>` for games/complex graphics.

---

### Q19. What are ARIA roles and why do we need them?

ARIA (**Accessible Rich Internet Applications**) attributes help screen readers understand custom UI elements that native HTML can't describe.

```html
<!-- Without ARIA — screen reader doesn't know it's a button -->
<div onclick="handleClick()">Click Me</div>

<!-- With ARIA — screen reader announces "button" -->
<div role="button" tabindex="0" onclick="handleClick()">Click Me</div>
```

**Best practice:** Always prefer native elements (`<button>`, `<nav>`, `<dialog>`) first. Use ARIA only when native elements can't achieve the required behavior.

---

### Q20. What are the major features introduced in HTML5?

| Feature | Examples |
|---------|---------|
| **Semantic Elements** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |
| **New Input Types** | `email`, `url`, `number`, `date`, `range`, `color` |
| **Multimedia** | `<video>`, `<audio>` — native playback without plugins |
| **Graphics** | `<canvas>`, `<svg>` |
| **Form Validation** | `required`, `pattern`, `min`, `max` — no JS needed |
| **Storage APIs** | `localStorage` (persistent), `sessionStorage` (per-tab) |
| **Other APIs** | Geolocation, Drag & Drop, Web Workers, WebSockets |

HTML5 removed the need for Flash and made the web more semantic, accessible, and powerful.

---

_Made with ❤️ for Frontend Mastery_
