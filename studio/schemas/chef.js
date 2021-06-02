// https://www.sanity.io/docs/schema-types

export default {
  name: 'chef',
  title: 'Chef',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: "Chef's name",
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
};
