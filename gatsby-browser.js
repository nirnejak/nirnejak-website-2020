import ScrollReveal from 'scrollreveal'

export const onInitialClientRender = () => {
  ScrollReveal().reveal('.scroll-reveal-card', { delay: 300, interval: 100, reset: true });
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  ScrollReveal().reveal('.scroll-reveal-card', { delay: 300, interval: 100, reset: true });
}