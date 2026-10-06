/// <reference types="vite-plugin-svgr/client" />
import React from "react"

declare global {
  namespace JSX {
    type Element = React.JSX.Element
  }
}

declare module "*.png" {
  const value: string
  export = value
}

declare module "*.mp4" {
  const src: string
  export default src
}
