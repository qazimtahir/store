export const Products = {
  title: "Product Name",
  name: "productName",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "product",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "product",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "Description",
      name: "Description",
      type: "text",
    },
    {
      title: "Images",
      name: "poster",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },

    {
      title: "Category",
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
    },

    {
      title: "Price",
      name: "Price",
      type: "number",
    },
  ],
};
