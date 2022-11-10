import type { CallBack } from '@prisma/client'

import {
  callBacks,
  callBack,
  createCallBack,
  updateCallBack,
  deleteCallBack,
} from './callBacks'
import type { StandardScenario } from './callBacks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('callBacks', () => {
  scenario('returns all callBacks', async (scenario: StandardScenario) => {
    const result = await callBacks()

    expect(result.length).toEqual(Object.keys(scenario.callBack).length)
  })

  scenario('returns a single callBack', async (scenario: StandardScenario) => {
    const result = await callBack({ id: scenario.callBack.one.id })

    expect(result).toEqual(scenario.callBack.one)
  })

  scenario('creates a callBack', async () => {
    const result = await createCallBack({
      input: {
        buildid: 'String',
        deploymentid: 'String',
        machineID: 'String',
        publicIP: 2357886,
        privateIP: 9786738,
      },
    })

    expect(result.buildid).toEqual('String')
    expect(result.deploymentid).toEqual('String')
    expect(result.machineID).toEqual('String')
    expect(result.publicIP).toEqual(2357886)
    expect(result.privateIP).toEqual(9786738)
  })

  scenario('updates a callBack', async (scenario: StandardScenario) => {
    const original = (await callBack({
      id: scenario.callBack.one.id,
    })) as CallBack
    const result = await updateCallBack({
      id: original.id,
      input: { buildid: 'String2' },
    })

    expect(result.buildid).toEqual('String2')
  })

  scenario('deletes a callBack', async (scenario: StandardScenario) => {
    const original = (await deleteCallBack({
      id: scenario.callBack.one.id,
    })) as CallBack
    const result = await callBack({ id: original.id })

    expect(result).toEqual(null)
  })
})
