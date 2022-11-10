import type { FindCallBacks } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CallBacks from 'src/components/CallBack/CallBacks'

export const QUERY = gql`
  query FindCallBacks {
    callBacks {
      id
      buildid
      deploymentid
      machineID
      publicIP
      privateIP
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No callBacks yet. '}
      <Link
        to={routes.newCallBack()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ callBacks }: CellSuccessProps<FindCallBacks>) => {
  return <CallBacks callBacks={callBacks} />
}
