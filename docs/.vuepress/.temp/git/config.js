import { GitContributors } from "/data/data/com.termux/files/home/dev/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.96_vuepress@2.0.0-rc.21_@vuepress+bundler-vite@2.0.0-rc.2_87a3bb40c097114a6e148b37d48301ea/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/data/data/com.termux/files/home/dev/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.96_vuepress@2.0.0-rc.21_@vuepress+bundler-vite@2.0.0-rc.2_87a3bb40c097114a6e148b37d48301ea/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
