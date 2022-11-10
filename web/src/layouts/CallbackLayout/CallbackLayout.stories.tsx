import type { ComponentMeta, ComponentStory } from '@storybook/react'

import CallbackLayout from './CallbackLayout'

export const generated: ComponentStory<typeof CallbackLayout> = (args) => {
  return <CallbackLayout {...args} />
}

export default {
  title: 'Layouts/CallbackLayout',
  component: CallbackLayout,
} as ComponentMeta<typeof CallbackLayout>
