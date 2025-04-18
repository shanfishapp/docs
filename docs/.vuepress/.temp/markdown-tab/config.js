import { CodeTabs } from "/data/data/com.termux/files/home/dev/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.96_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuep_ce16d15aac9deb1ef6ab66df7c502755/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/data/data/com.termux/files/home/dev/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.96_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuep_ce16d15aac9deb1ef6ab66df7c502755/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/data/data/com.termux/files/home/dev/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.96_markdown-it@14.1.0_vuepress@2.0.0-rc.21_@vuep_ce16d15aac9deb1ef6ab66df7c502755/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
