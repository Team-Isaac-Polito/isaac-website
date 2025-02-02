/// <reference types="vite-plugin-svgr/client" />

declare module "*.png" {
  const value: string
  export = value
}

declare module "*.mp4" {
  const src: string
  export default src
}
