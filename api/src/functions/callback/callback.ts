import { DbAuthHandler } from '@redwoodjs/api'

import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    console.log(JSON.parse(event.body))

    const buildID = JSON.parse(event.body).buildID
    const deploymentID = JSON.parse(event.body).deploymentID
    const machineID = JSON.parse(event.body).machineID
    const publicIP = JSON.parse(event.body).publicIP
    const privateIP = JSON.parse(event.body).privateIP

    console.log(
      await db.callBack.create({
        data: {
          buildid: buildID,
          deploymentid: deploymentID,
          machineID: machineID,
          publicIP: publicIP,
          privateIP: privateIP,
        },
      })
    )

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json ' },
      body: JSON.stringify({ time: new Date() }),
    }
  }
  if (event.httpMethod !== 'GET') {
    return { statusCode: 404 }
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json ' },
    body: JSON.stringify({ time: new Date() }),
  }
}
