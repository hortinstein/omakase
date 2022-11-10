import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CallBackForm from 'src/components/CallBack/CallBackForm'

import type { CreateCallBackInput } from 'types/graphql'

const CREATE_CALL_BACK_MUTATION = gql`
  mutation CreateCallBackMutation($input: CreateCallBackInput!) {
    createCallBack(input: $input) {
      id
    }
  }
`

const NewCallBack = () => {
  const [createCallBack, { loading, error }] = useMutation(
    CREATE_CALL_BACK_MUTATION,
    {
      onCompleted: () => {
        toast.success('CallBack created')
        navigate(routes.callBacks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateCallBackInput) => {
    createCallBack({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CallBack</h2>
      </header>
      <div className="rw-segment-main">
        <CallBackForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCallBack
