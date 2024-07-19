import { type SchemaTypeDefinition } from "sanity";
import { Products } from "./Products";
import { Category } from "./Category";

export const schema: {
  types: SchemaTypeDefinition[];
} = {
  types: [Products,Category],
};
