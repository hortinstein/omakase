import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CallbackPage = () => {
  return (
    <>
      <MetaTags title="Callback" description="Callback page" />

      <h1>CallbackPage</h1>
      <p>
        Find me in <code>./web/src/pages/CallbackPage/CallbackPage.tsx</code>
      </p>
      <p>
        My default route is named <code>callback</code>, link to me with `
        <Link to={routes.callback()}>Callback</Link>`
      </p>
    </>
  )
}

export default CallbackPage
