import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["src/content"], // Adjust if your Markdown or JSON lives elsewhere
      models: [
        {
          name: "framework",
          label: "Framework",
          type: "page",
          filePath: "src/content/frameworks/{slug}.md", // Update path to match your structure
          urlPath: "/frameworks/{slug}",
          fields: [
            { name: "title", type: "string", label: "Title", required: true },
            { name: "likes", type: "number", label: "Likes" },
          ],
        },
      ],
    }),
  ],
});
