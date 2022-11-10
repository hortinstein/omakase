import { render } from '@redwoodjs/testing/web'

import CallbackLayout from './CallbackLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CallbackLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CallbackLayout />)
    }).not.toThrow()
  })
})
