export const paradox = `
# Paradox of Choice

---

~~~
JavaScript (ES 6 / 7) → which is renamed to ES2015 and ES2016, Babel, Closure, Clojure, React, Ember, Backbone, Oboe, Angular (1 & 2), Web Workers, Service Workers, RAIL, Rails, Hot Loading, Node.js & iojs, Promises, Observables, GraphQL, CSP & Channels, core.async, immutable, HTML5, npm, build tools, brunch, gulp, grunt, npm scripts, broccoli, ember-cli, mocha, chai, karma, sinon, jQuery, vanilla.js, Mithril, virtual doms, routing, isomorphic & universal code, Express, Koa, Elm, CLJS, PureScript, TypeScript, Flow, static type checking, compilers, compile-to-js languages, browserify, rollup, commonjs, amd, umd, SystemJS, js-to-native packages, Haskell, type systems, lambda calculus, functional programming, Meteor, transpilers, variadic behavior, context vs. contextless approaches, offline first, deployment tools, docker, macros, languages extensions, sweet.js, containers, container management services, dev-ops & web-ops, WebRTC, JSCS, style guides, linting, WebGL, Unity engine, benchmark suites, online coding environments, and so so so so many others things that I am missing here…
~~~
`

export const compilers = `
### Compilers (of compilers (of compilers (…)))

---

1. Compilation --> Transpilation
2. Runtime levels
3. Language features

`

export const fp = `
### Functional programming and the popularization of academia in web development

---

- type-systems
- parallelism (multi-core) vs. concurrency (multi-threading)
- runtime level matters
- some cool optimizations can still come from our lack of type-system (next slide)

`

export const quote1 = `
### Ability will never catch up with the demand for it.

### ~ Confucius

`

export const npm = `
### “The Year npm blew up”

---

### a serious over-saturation of “me too” projects

`

export const contextless = `
### The fight between the contextual and contextless

---

### Abstractions (of abstractions (of abstractions (…)))

`

export const quote2 = `

### "Going back to zero can help creative juices no matter the art form you are attempting to create."

### ~ Byron Pulsifer

`

export const lessons1 = `

# 30 Second Summary

---

- Functions make powerful, modular building blocks that let you make abstractions when you need those to occur
- Most libraries available on npm aren't terse or have a small API footprint (PR's please!)
- Functions that take functions as input and give functions as output are an advanced concept that makes code extremely fast and modular; so get comfortable with those “tough functional and ES3 concepts”!
- A little yak-shaving while toying with functional building blocks can go a long ways
- Functions as building blocks can help prevent those damned “leaky abstractions” from finding their way into your code.
- GraphQL and Falcor are great projects, but it doesn’t mean you should just jump at the chance to adopt them into projects without knowing their in’s-and-out’s (Also, have you heard of [Oboe.js](http://oboejs.com)?)

`

export const reduxWeaknesses = `

# Potential weaknesses

---

- A singly-sourced state
- By using pure reducer functions, they can — through functional composition — be used to create [modular, “abstractable” state modifiers](http://redux.js.org/docs/basics/Reducers.html).
- Actions and describing all of this can require yet again a lot of configuration over utility.
- In addition, asynchronous actions/code embedded in the flow of application logic can become muddled and unclear; which is why they are under the [“advanced” section](http://redux.js.org/docs/advanced/AsyncActions.html).

`

export const store = `
# A smaller footprint?

---

- Creating a store should be a simpler, with less boilerplate
- The option to create & use multiple stores should be available for memory intensive applications and scaling situations
- Actions and Reducers should be simpler, where I should not have to remember the name/type of an Action, or have to learn a new set of procedures to have asynchronous reducers/actions.

`

export const otto = `
### There are soooooo so so so many options out there for:

---

- continuous deployment and integration
- hosting providers
- domain name registrars and routing
- IaaS and PaaS solutions
- Database and Push services
- pre and post-processing tools
- build tools
- style linting
- static type checking
- compilation and transpilation
- packagers, bundlers, “concatter-minifiers”
- … and many other topics here


`