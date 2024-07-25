# Policygen

Policygen helps you setup and publish Privacy Policies and Terms of Service policies to your site with ease.
Simply set your config in the initializer and we'll do the hard work for you.

## Installation

```bash
npm install 'policygen'
```

#### If using Tailwind as your css framework

Add the following to `tailwind.config.js`

```js
module.exports = {
  content: [
    './public/*.html',
    ...,
    getPolicygenViewPath()
  ]
}

function getPolicygenViewPath() {
  return `./node_modules/policygen/**/*.{ts}`;
}
```

## Usage

```javascript
async function generatePrivacyPolicy() {
  const policygen = new Policygen({ config });
  return await policygen.privacyPolicy();
}

async function generateTermsOfService() {
  const policygen = new Policygen({ config });
  return await policygen.termsOfService();
}
```

### Styling your policies

#### Custom CSS

```css
/* The outmost container class */
.policygen-container {
}
/* The h1 header class */
.policygen-h1 {
}
/* The h2 header class */
.policygen-h2 {
}
/* The h3 header class */
.policygen-h3 {
}
/* The section class, break/margin between each section of the policy */
.policygen-section {
}
/* Body text, the paragraph text within each section */
.policygen-body-text {
}
/* Unordered lists */
.policygen-ul {
}
/* Ordered list */
.policygen-ol {
}
/* Bold paragraph class */
.policygen-bold {
}
/* Link class, remember to have a hover on this class */
.policygen-link {
}
```

#### Tailwindcss

You can change the colors used

```javascript
config.tailwindConfig = {
  headingColor: "text-gray-900",
  bodyColor: "text-gray-800",
  linkColor: "text-blue-500 hover:text-blue-700",
};
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/imothee/policygen. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [code of conduct](https://github.com/imothee/policygen/blob/main/CODE_OF_CONDUCT.md).

## License

The npm library is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Policygen project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/imothee/policygen/blob/main/CODE_OF_CONDUCT.md).
