import CallBackCell from 'src/components/CallBack/CallBackCell'

type CallBackPageProps = {
  id: number
}

const CallBackPage = ({ id }: CallBackPageProps) => {
  return <CallBackCell id={id} />
}

export default CallBackPage
