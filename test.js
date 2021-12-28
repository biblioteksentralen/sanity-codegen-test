import sanityClient from '@sanity/client'
import { Building } from './schema-types'

const client = sanityClient({
  projectId: 'uktf7x5x',
  dataset: 'production',
  apiVersion: '2021-12-28',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const main = async () => {

  const building = await client.create<Building>({
    _type: "building",
    name: "A building",
  })

  const room = await client.create({
    _type: "room",
    name: "A room",
    building: { _type: "reference", ref: building._id }
  })

  console.info("Hello world")

  const rooms = await client.getDocument(room._id)
  console.log(rooms)
}

main()
