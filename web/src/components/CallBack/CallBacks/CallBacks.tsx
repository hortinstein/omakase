import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/CallBack/CallBacksCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteCallBackMutationVariables, FindCallBacks } from 'types/graphql'

const DELETE_CALL_BACK_MUTATION = gql`
  mutation DeleteCallBackMutation($id: Int!) {
    deleteCallBack(id: $id) {
      id
    }
  }
`

const CallBacksList = ({ callBacks }: FindCallBacks) => {
  const [deleteCallBack] = useMutation(DELETE_CALL_BACK_MUTATION, {
    onCompleted: () => {
      toast.success('CallBack deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteCallBackMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete callBack ' + id + '?')) {
      deleteCallBack({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Buildid</th>
            <th>Deploymentid</th>
            <th>Machine id</th>
            <th>Public ip</th>
            <th>Private ip</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {callBacks.map((callBack) => (
            <tr key={callBack.id}>
              <td>{truncate(callBack.id)}</td>
              <td>{truncate(callBack.buildid)}</td>
              <td>{truncate(callBack.deploymentid)}</td>
              <td>{truncate(callBack.machineID)}</td>
              <td>{truncate(callBack.publicIP)}</td>
              <td>{truncate(callBack.privateIP)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.callBack({ id: callBack.id })}
                    title={'Show callBack ' + callBack.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCallBack({ id: callBack.id })}
                    title={'Edit callBack ' + callBack.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete callBack ' + callBack.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(callBack.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CallBacksList
