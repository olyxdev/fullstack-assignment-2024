import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/graphql/schema/**/schema.graphql",
  generates: {
    "src/graphql/codegen": defineConfig({
      emitLegacyCommonJSImports: false,
      typesPluginsConfig: {
        contextType: "../context/olympicsContext.js#OlympicsContext",
      },
    }),
  },
};

export default config;
