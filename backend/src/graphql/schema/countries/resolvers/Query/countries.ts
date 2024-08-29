import type { QueryResolvers } from "../../../../codegen/types.generated.js";

/* Example of how to implement a resolver */
export const countries: NonNullable<QueryResolvers['countries']> = async (
  _parent,
  _arg,
  _ctx
) => {
  return [{ id: "1", code: "NED", name: "Netherlands" }];
};
