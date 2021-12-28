import sanityClient from '@sanity/client'
import { Building, Room } from '../schemas/schema';

const client = sanityClient({
  projectId: 'uktf7x5x',
  dataset: 'production',
  apiVersion: '2021-12-28',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

type Stub<T> = Omit<T, "_id" | "_rev" | "_createdAt" | "_updatedAt">

type BuildingStub = Stub<Building>
type RoomStub = Stub<Room>

const main = async () => {

  const building = await client.create<BuildingStub>({
    _type: "building",
    name: "A building",
  });
  building._id

  const room = await client.create<RoomStub>({
    _type: "room",
    name: "A room",
    building: { _type: "reference", _ref: building._id }
  })

  console.info("✅ Documents created")

  const rooms = await client.getDocument(room._id)
  console.log(rooms)
}

main()
