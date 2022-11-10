import type { FindCallBackById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CallBack from 'src/components/CallBack/CallBack'

export const QUERY = gql`
  query FindCallBackById($id: Int!) {
    callBack: callBack(id: $id) {
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

export const Empty = () => <div>CallBack not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ callBack }: CellSuccessProps<FindCallBackById>) => {
  return <CallBack callBack={callBack} />
}
