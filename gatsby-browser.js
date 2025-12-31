const React = require('react')

export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment

  return <Layout {...props}>{element}</Layout>
}

export function onRouteUpdate({ location }) {
  if (typeof document !== 'undefined') {
    document.documentElement.style.overflow = ''
    document.documentElement.style.overflowY = ''
    document.body.style.overflow = ''
    document.body.style.overflowY = ''
    document.body.style.position = ''
  }

  if (!location?.hash) return

  const id = decodeURIComponent(location.hash.replace('#', ''))

  const scrollToHash = (attempt = 0) => {
    const el = document.getElementById(id)
    if (el) {
      const top =
        el.getBoundingClientRect().top +
        window.scrollY -
        (parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--navbar-height'
          )
        ) || 0)

      window.scrollTo({ top, behavior: attempt === 0 ? 'auto' : 'smooth' })
      return
    }

    if (attempt < 10) {
      window.setTimeout(() => scrollToHash(attempt + 1), 50)
    }
  }

  scrollToHash()
}
