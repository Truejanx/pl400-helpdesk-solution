# PL-400 Help Desk Solution

A Power Platform help desk ticket management solution built during 90+ days of hands-on PL-400 certification training. Demonstrates real-world patterns used in enterprise Dynamics 365 and Power Platform development.

## What's in this repo

### Plugins/
**PreventStatusRegression.cs** — A synchronous Pre-operation C# plug-in that blocks a help desk ticket's status from being moved backward (e.g., from "In Progress" back to "New") once work has started. Uses a PreImage to read the record's state before the update.

### WebResources/
**ticketform.js** — A JavaScript web resource for the model-driven app form. Handles the OnChange event on the Priority field: when Priority is set to Critical, it automatically updates the SLA field and shows a form notification. Demonstrates namespace patterns, formContext API usage, and event-driven client scripting.

### PCF/PriorityBadge/
**index.ts + ControlManifest.Input.xml** — A custom PCF (Power Apps Component Framework) field control that replaces the default priority dropdown with a colour-coded badge (Critical = red, High = orange, Normal = green). Implements all four lifecycle methods: init, updateView, getOutputs, destroy.

### Queries/
**odata-examples.md** — OData query examples against the Dataverse Web API: filtered record retrieval with $select/$filter/$orderby, related-record expansion via $expand, and row count with $count.

## Technologies used
- C# / .NET (IPlugin, IPluginExecutionContext, PreEntityImages)
- Microsoft Dataverse Web API (OData v4)
- Power Apps Component Framework (TypeScript)
- JavaScript / Xrm Client API
- Power Automate (cloud flows, expressions)
- Azure Active Directory / OAuth 2.0 (custom connectors)
- pac CLI / Power Platform ALM (managed solutions, environment variables, CI/CD pipelines)

## Certification context
This project was built as part of studying for the **Microsoft PL-400: Power Platform Developer** certification, covering all four exam domains: Create a Technical Design, Extend the Power Platform User Experience, Create and Configure Microsoft Dataverse, and Develop Integrations.
