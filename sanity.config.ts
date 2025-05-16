import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { codeInput } from "@sanity/code-input";
import { table } from "@sanity/table";
import { projectId, dataset } from "./lib/env.api";

export default defineConfig({
  name: "gurdeep-singh-portfolio",
  title: "gurdeepsingh.tech",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    deskTool({
      // Simplify the desk tool config to avoid hook issues
      structure: (S) => 
        S.list()
          .title('Content')
          .items([
            ...S.documentTypeListItems()
          ])
    }), 
    visionTool(), 
    codeInput(), 
    table()
  ],
  schema: { types: schemaTypes },
  document: {
    // Keep only necessary actions to avoid hook-related errors
    actions: (prev, context) => {
      // Filter out problematic actions if needed
      return prev;
    },
  },
});
