
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {  } from 'src/lib/formatters'

import type { DeleteCallBackMutationVariables, FindCallBackById } from 'types/graphql'

const DELETE_CALL_BACK_MUTATION = gql`
  mutation DeleteCallBackMutation($id: Int!) {
    deleteCallBack(id: $id) {
      id
    }
  }
`

interface Props {
  callBack: NonNullable<FindCallBackById['callBack']>
}

const CallBack = ({ callBack }: Props) => {
  const [deleteCallBack] = useMutation(DELETE_CALL_BACK_MUTATION, {
    onCompleted: () => {
      toast.success('CallBack deleted')
      navigate(routes.callBacks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCallBackMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete callBack ' + id + '?')) {
      deleteCallBack({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            CallBack {callBack.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{callBack.id}</td>
            </tr><tr>
              <th>Buildid</th>
              <td>{callBack.buildid}</td>
            </tr><tr>
              <th>Deploymentid</th>
              <td>{callBack.deploymentid}</td>
            </tr><tr>
              <th>Machine id</th>
              <td>{callBack.machineID}</td>
            </tr><tr>
              <th>Public ip</th>
              <td>{callBack.publicIP}</td>
            </tr><tr>
              <th>Private ip</th>
              <td>{callBack.privateIP}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCallBack({ id: callBack.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(callBack.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default CallBack
