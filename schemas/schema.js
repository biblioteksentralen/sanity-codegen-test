import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

const buildingRef = {
  name: "buildingRef",
  type: "reference",
  to: [{ type: "building" }],
}

const building = {
  name: "building",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string"
    }
  ]
}

const room = {
  name: "room",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string"
    },
    {
      name: "building",
      type: "buildingRef"
    }
  ]
}

export default createSchema({
  name: 'default-model',
  types: schemaTypes.concat([
    building,
    room,
    buildingRef,
  ]),
})
