// animations.js
export function addAnimation(element, animationType) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationType)
        }
      })
    },
    { threshold: 0.15 }
  )
  
  const section = document.querySelector(`.${element}`)
  if (section) {
    observer.observe(section)
  }
}