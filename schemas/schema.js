import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

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
    }
  ]
}

export default createSchema({
  name: 'default-model',
  types: schemaTypes.concat([
    building,
    room,
  ]),
})
