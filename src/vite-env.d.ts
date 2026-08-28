/// <reference types="vite/client" />

declare module 'react-zdog' {
  import type { ComponentType, CSSProperties, ReactNode } from 'react'

  export interface IllustrationProps {
    element?: 'canvas' | 'svg'
    dragRotate?: boolean
    rotate?: { x?: number; y?: number; z?: number }
    translate?: { x?: number; y?: number; z?: number }
    scale?: { x?: number; y?: number; z?: number }
    zoom?: number
    resize?: 'fullscreen' | false
    style?: CSSProperties
    children?: ReactNode
  }

  export interface ShapeProps {
    path?: unknown
    stroke?: number | false
    color?: string
    fill?: boolean
    closed?: boolean
    backface?: boolean | 'visible'
    visible?: boolean
    translate?: { x?: number; y?: number; z?: number }
    children?: ReactNode
  }

  export interface GroupProps {
    translate?: { x?: number; y?: number; z?: number }
    rotate?: { x?: number; y?: number; z?: number }
    children?: ReactNode
  }

  export const Illustration: ComponentType<IllustrationProps>
  export const Shape: ComponentType<ShapeProps>
  export const Group: ComponentType<GroupProps>
}
