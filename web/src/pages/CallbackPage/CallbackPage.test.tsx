import { render } from '@redwoodjs/testing/web'

import CallbackPage from './CallbackPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CallbackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CallbackPage />)
    }).not.toThrow()
  })
})
