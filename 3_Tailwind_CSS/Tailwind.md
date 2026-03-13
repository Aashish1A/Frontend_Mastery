1. What is Tailwind CSS?

Answer:
Tailwind CSS is a utility-first CSS framework used to style elements using predefined classes.

Example:

<div class="bg-blue-500 text-white p-4 rounded">
2. Advantages of Tailwind CSS

Faster development

No custom CSS needed

Highly customizable

Small production CSS

3. What is utility-first CSS?

Instead of writing CSS rules, you use small utility classes.

Example:

text-center
mt-4
p-2
bg-red-500
4. How does Tailwind make CSS smaller?

Answer:
Tailwind uses PurgeCSS to remove unused styles in production.

5. What is Tailwind configuration file?
tailwind.config.js

Used for:

Custom colors

Fonts

Breakpoints

6. How to center a div in Tailwind?
flex justify-center items-center
7. What is responsive design in Tailwind?

Example:

sm:
md:
lg:
xl:

Example:

text-sm md:text-lg lg:text-xl
8. How to add hover effects?
hover:bg-blue-600

Example:

<button class="bg-blue-500 hover:bg-blue-700">
9. Difference between container and max-w
container	max-w
Responsive container	Custom width
10. How to create grid layout in Tailwind?
grid grid-cols-3 gap-4