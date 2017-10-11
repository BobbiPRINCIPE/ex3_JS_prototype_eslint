# ex3_JS_prototype_eslint
Little example project to show JS object creation, prototype and eslint

## VS Code Extensions used
+ Angular v4 TypeScript Snippets, 2.7.0, by John Papa
+ Bootstrap 4 & Font awesome snippets, 2.4.0, by Ashok Koyi
+ ESLint, 1.3.2, by Dirk Baumer
+ HTML Snippets, 0.1.0, by Mohamed Abusaid
+ JS-CSS-HTML Formatter, 0.2.3, by lonefy
+ open in browser, 1.1.0, by TechER
+ Path Autocomplete, 1.6.1, by Michai Vilcu
+ Path Intellisense, 1.4.2, by Christian Kohler

## ESLint setup
### npm module dependencies for ESLint
install ESLint globally
```
npm install -g eslint
```
ESLint does not come with a default rules set. So either
+ create a custom one by issueing below and entering answers at root of project using DOS CMD (not git bash). But first need to generate package.json with all defaults(--yes means that) that eslint expects to be there
```
npm init --yes
eslint --init
```

+ or, install default rule set for ESlint(we have to give one) at project dir, to use for this project, and let it be added to package.json as a dev dependency (--save-dev means that)
```
npm install eslint-config-rallycoding --save-dev
```

TODO figureMeOut, the below complained, add below to settings.json  (File -> Preferences -> Settings)
```
"eslint.enable": true
```
### running eslint
At command line at root of project, issue below and see eslint results
```
eslint script.js
```