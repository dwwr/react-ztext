import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { Illustration } from 'react-zdog'
import Zdog from 'zdog'
import { notoSansFont } from '../content/font'
import { ZText, type ZTextProps } from './ZText'

type ZTextStoryArgs = Omit<ZTextProps, 'font'>

const WaitForFonts: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {
    Zdog.waitForFonts().then(() => setReady(true))
  }, [])

  if (!ready) return null
  return <>{children}</>
}

const ZTextCanvas: React.FC<ZTextStoryArgs> = (args) => (
  <WaitForFonts>
    <div
      style={{
        display: 'block',
        cursor: 'grab',
        height: '550px',
        width: '550px',
        backgroundColor: 'black',
      }}
    >
      <Illustration
        rotate={{ x: (Zdog.TAU * -35) / 360, y: (Zdog.TAU * 1) / 8 }}
        element="canvas"
        dragRotate={true}
      >
        <ZText {...args} font={notoSansFont} />
      </Illustration>
    </div>
  </WaitForFonts>
)

const meta = {
  title: 'Components/ZText',
  component: ZTextCanvas,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    textAlign: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    textBaseline: {
      control: { type: 'select' },
      options: ['top', 'middle', 'bottom'],
    },
  },
} satisfies Meta<typeof ZTextCanvas>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Hello \nWorld',
    fontSize: 40,
    color: '#f5e0a3',
    textAlign: 'center',
    textBaseline: 'middle',
  },
}

export const CubeFace: Story = {
  args: {
    text: 'In \nDepth \nExperience',
    fontSize: 40,
    color: '#f5e0a3',
    textAlign: 'center',
    textBaseline: 'middle',
  },
}
