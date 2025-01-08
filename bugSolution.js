```javascript
//tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'theme-color-1': '#007bff',
        'theme-color-2': '#6610f2',
      },
    },
  },
  plugins: [],
}

//In your template file
<div class="bg-gradient-to-r from-theme-color-1 to-theme-color-2 p-4">
  <h1>Hello Tailwind!</h1>
</div>
```