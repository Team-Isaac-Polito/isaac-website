interface SlideElement {
  src: string
  alt: string
  translationPath: string
}

export default interface SlidesProps {
  slideEl: SlideElement[]
}
