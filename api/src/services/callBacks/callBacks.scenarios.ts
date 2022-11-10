import type { Prisma, CallBack } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CallBackCreateArgs>({
  callBack: {
    one: {
      data: {
        buildid: 'String',
        deploymentid: 'String',
        machineID: 'String',
        publicIP: 1730262,
        privateIP: 5777382,
      },
    },
    two: {
      data: {
        buildid: 'String',
        deploymentid: 'String',
        machineID: 'String',
        publicIP: 3297099,
        privateIP: 9092897,
      },
    },
  },
})

export type StandardScenario = ScenarioData<CallBack, 'callBack'>
