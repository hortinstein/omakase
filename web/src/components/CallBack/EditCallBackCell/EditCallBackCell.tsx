import type { EditCallBackById, UpdateCallBackInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CallBackForm from 'src/components/CallBack/CallBackForm'

export const QUERY = gql`
  query EditCallBackById($id: Int!) {
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
const UPDATE_CALL_BACK_MUTATION = gql`
  mutation UpdateCallBackMutation($id: Int!, $input: UpdateCallBackInput!) {
    updateCallBack(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ callBack }: CellSuccessProps<EditCallBackById>) => {
  const [updateCallBack, { loading, error }] = useMutation(
    UPDATE_CALL_BACK_MUTATION,
    {
      onCompleted: () => {
        toast.success('CallBack updated')
        navigate(routes.callBacks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCallBackInput,
    id: EditCallBackById['callBack']['id']
  ) => {
    updateCallBack({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit CallBack {callBack?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CallBackForm callBack={callBack} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
