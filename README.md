# Awesome SharePoint

> A curated list of SharePoint development resources — tools, libraries, samples, blogs, and more.
> **Made for the Community. Sharing is Caring.**

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit-0078D4?style=for-the-badge&logo=microsoftsharepoint&logoColor=white)](https://Sandeep-FED.github.io/awesome-sharepoint)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)](https://github.com/Sandeep-FED/awesome-sharepoint/pulls)

---

## Resources

### SharePoint Development
Essential tools and docs for building SharePoint solutions.

| Resource | Description | Tag |
| :--- | :--- | :--- |
| [SPFx Toolkit](https://pnp.github.io/vscode-viva/) | VS Code extension for scaffolding, developing, and deploying SPFx solutions | Community |
| [SharePoint Developer Docs](https://learn.microsoft.com/en-us/sharepoint/dev/) | Official Microsoft documentation for SharePoint development and extensibility | Official |
| [PnP Modern Search](https://microsoft-search.github.io/pnp-modern-search/) | Open-source modern search web parts powered by SharePoint Search & Microsoft Graph | Community |
| [SP Live Reload](https://github.com/pnp/sp-livereload) | Enable live reload during classic SharePoint page development for faster iterations | Community |

### APIs & Libraries
Client libraries for interacting with SharePoint and Microsoft 365 APIs.

| Resource | Description | Tag |
| :--- | :--- | :--- |
| [PnPJS](https://pnp.github.io/pnpjs/) | Fluent JavaScript library for consuming SharePoint, Graph, and Microsoft 365 REST APIs | Community |
| [SharePoint CSOM](https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/complete-basic-operations-using-sharepoint-client-library-code) | Complete basic operations using the SharePoint client library (.NET) | Official |
| [Connect to SharePoint APIs](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/connect-to-sharepoint) | Connect to SharePoint APIs from your SPFx solutions using the built-in context | Official |
| [Microsoft Graph in SPFx](https://learn.microsoft.com/en-us/sharepoint/dev/spfx/use-msgraph) | Access Microsoft Graph APIs from SharePoint Framework solutions for rich data integration | Official |

### UI Libraries
Component libraries and design systems for SharePoint and Microsoft 365 UIs.

| Resource | Description | Tag |
| :--- | :--- | :--- |
| [Fluent UI v9](https://storybooks.fluentui.dev/react/?path=/docs/concepts-introduction--docs) | Microsoft's latest cross-platform design system with React components for modern UIs | Official |
| [Fluent UI v8](https://developer.microsoft.com/en-us/fluentui#/controls/web) | Mature React component library widely used in SPFx web parts and Microsoft 365 apps | Official |
| [SPFx React Controls](https://reactcontrols.spteckapps.com) | Community-driven reusable React controls for SharePoint Framework solutions | Community |
| [PnP Reusable React Controls](https://pnp.github.io/sp-dev-fx-controls-react/) | Rich set of community React controls built specifically for SharePoint Framework solutions | Community |
| [PnP Property Pane Controls](https://pnp.github.io/sp-dev-fx-property-controls/) | Reusable property pane controls for SPFx web parts — pickers, editors, and more | Community |

### Technical Blogs
Stay up to date with the latest SharePoint news, tips, and best practices.

| Resource | Description | Tag |
| :--- | :--- | :--- |
| [PnP Community Blog](https://pnp.github.io/blog/) | Community-contributed articles on SharePoint, Microsoft 365, and Power Platform | Community |
| [Microsoft SharePoint Blog](https://techcommunity.microsoft.com/category/content_management/blog/spblog) | Official Microsoft blog with product announcements, roadmap updates, and best practices | Official |

### Tools
Browser extensions and utilities that boost SharePoint productivity.

| Resource | Description | Tag |
| :--- | :--- | :--- |
| [SP Formatter](https://github.com/pnp/sp-formatter) | Chrome/Edge extension for editing and previewing column & view formatting JSON in real time | Community |
| [SP Shortcuts](https://github.com/a1mery/sp-shortcuts-extension) | Browser extension adding keyboard shortcuts for faster SharePoint site navigation | Community |
| [SP Editor](https://github.com/pnp/sp-editor) | Chrome/Edge DevTools extension for managing scripts, styles, and properties on SharePoint sites | Community |

### Samples
Ready-to-use samples and templates from the PnP community.

| Resource | Description | Tag |
| :--- | :--- | :--- |
| [List Formatting Samples](https://pnp.github.io/List-Formatting/) | Gallery of column and view formatting JSON samples for SharePoint lists and libraries | Community |
| [SPFx Samples](https://pnp.github.io/sp-dev-fx-webparts/) | Searchable catalog of SPFx web parts and extensions | Community |

### Design & Templates
SharePoint site design inspiration, look books, and ready-made templates.

| Resource | Description | Tag |
| :--- | :--- | :--- |
| [SharePoint Look Book](https://adoption.microsoft.com/en-us/sharepoint-look-book/) | Official gallery of beautiful SharePoint site designs and templates from Microsoft | Official |
| [LookBook 365](https://lookbook365.com/#categories) | Community-curated collection of SharePoint Online site designs organized by category | Community |

---

## Development

This site is built with [Astro](https://astro.build). Run all commands from the root of the project:

| Command | Action |
| :--- | :--- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the build locally before deploying |

## Contributing

Contributions are welcome! To add a new resource:

1. Find the relevant file in `src/content/resources/`
2. Add an entry with `title`, `description`, `url`, and `tag` (`Official` or `Community`)
3. Open a pull request

Every link shared helps someone in the community. **Sharing is Caring.**