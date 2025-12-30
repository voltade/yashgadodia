const React = require('react')

export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment

  return <Layout {...props}>{element}</Layout>
}

export function onRenderBody({ setPreBodyComponents }) {
  const code = `
(function () {
  try {
    var color = window.localStorage.getItem('color');
    if (color) document.documentElement.style.setProperty('--color-primary', color);
  } catch (e) {}
})();
  `.trim()

  setPreBodyComponents([
    React.createElement('script', {
      key: 'init-color-theme',
      dangerouslySetInnerHTML: { __html: code },
    }),
  ])
}
