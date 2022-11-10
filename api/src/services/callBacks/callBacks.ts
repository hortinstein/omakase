import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const callBacks: QueryResolvers['callBacks'] = () => {
  return db.callBack.findMany()
}

export const callBack: QueryResolvers['callBack'] = ({ id }) => {
  return db.callBack.findUnique({
    where: { id },
  })
}

export const createCallBack: MutationResolvers['createCallBack'] = ({
  input,
}) => {
  return db.callBack.create({
    data: input,
  })
}

export const updateCallBack: MutationResolvers['updateCallBack'] = ({
  id,
  input,
}) => {
  return db.callBack.update({
    data: input,
    where: { id },
  })
}

export const deleteCallBack: MutationResolvers['deleteCallBack'] = ({ id }) => {
  return db.callBack.delete({
    where: { id },
  })
}
