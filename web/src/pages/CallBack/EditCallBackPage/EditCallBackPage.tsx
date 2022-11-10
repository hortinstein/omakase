import EditCallBackCell from 'src/components/CallBack/EditCallBackCell'

type CallBackPageProps = {
  id: number
}

const EditCallBackPage = ({ id }: CallBackPageProps) => {
  return <EditCallBackCell id={id} />
}

export default EditCallBackPage
