import type { ComponentMeta } from '@storybook/react'

import CallbackPage from './CallbackPage'

export const generated = () => {
  return <CallbackPage />
}

export default {
  title: 'Pages/CallbackPage',
  component: CallbackPage,
} as ComponentMeta<typeof CallbackPage>
