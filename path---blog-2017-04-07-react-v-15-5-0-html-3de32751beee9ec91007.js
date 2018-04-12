webpackJsonp([0x84896bddc2f6],{843:function(a,e){a.exports={data:{markdownRemark:{html:'<p>It’s been exactly one year since the last breaking change to React. Our next major release, React 16, will include some exciting improvements, including a <a href="https://www.youtube.com/watch?v=ZCuYPiUIONs">complete rewrite</a> of React’s internals. <a href="/docs/design-principles.html#stability">We take stability seriously</a>, and are committed to bringing those improvements to all of our users with minimal effort.</p>\n<p>To that end, today we’re releasing React 15.5.0.</p>\n<h3 id="new-deprecation-warnings"><a href="#new-deprecation-warnings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Deprecation Warnings</h3>\n<p>The biggest change is that we’ve extracted <code>React.PropTypes</code> and <code>React.createClass</code> into their own packages. Both are still accessible via the main <code>React</code> object, but using either will log a one-time deprecation warning to the console when in development mode. This will enable future code size optimizations.</p>\n<p>These warnings will not affect the behavior of your application. However, we realize they may cause some frustration, particularly if you use a testing framework that treats <code>console.error</code> as a failure.</p>\n<p><strong>Adding new warnings is not something we do lightly.</strong> Warnings in React are not mere suggestions — they are integral to our strategy of keeping as many people as possible on the latest version of React. We never add warnings without providing an incremental path forward.</p>\n<p>So while the warnings may cause frustration in the short-term, we believe <strong>prodding developers to migrate their codebases now prevents greater frustration in the future</strong>. Proactively fixing warnings ensures you are prepared for the next major release. If your app produces zero warnings in 15.5, it should continue to work in 16 without any changes.</p>\n<p>For each of these new deprecations, we’ve provided a codemod to automatically migrate your code. They are available as part of the <a href="https://github.com/reactjs/react-codemod">react-codemod</a> project.</p>\n<h3 id="migrating-from-reactproptypes"><a href="#migrating-from-reactproptypes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Migrating from React.PropTypes</h3>\n<p>Prop types are a feature for runtime validation of props during development. We’ve extracted the built-in prop types to a separate package to reflect the fact that not everybody uses them.</p>\n<p>In 15.5, instead of accessing <code>PropTypes</code> from the main <code>React</code> object, install the <code>prop-types</code> package and import them from there:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// Before (15.4 and below)</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Component</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nComponent<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  text<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n</span><span class="token punctuation">}</span>\n\n<span class="token comment">// After (15.5)</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n</span>\n<span class="token keyword">class</span> <span class="token class-name">Component</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nComponent<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  text<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The <a href="https://github.com/reactjs/react-codemod#react-proptypes-to-prop-types">codemod</a> for this change performs this conversion automatically. Basic usage:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>jscodeshift -t react-codemod/transforms/React-PropTypes-to-prop-types.js <span class="token operator">&lt;</span>path<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>The <code>propTypes</code>, <code>contextTypes</code>, and <code>childContextTypes</code> APIs will work exactly as before. The only change is that the built-in validators now live in a separate package.</p>\n<p>You may also consider using <a href="https://flow.org/">Flow</a> to statically type check your JavaScript code, including <a href="https://flow.org/en/docs/react/components/">React components</a>.</p>\n<h3 id="migrating-from-reactcreateclass"><a href="#migrating-from-reactcreateclass" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Migrating from React.createClass</h3>\n<p>When React was initially released, there was no idiomatic way to create classes in JavaScript, so we provided our own: <code>React.createClass</code>.</p>\n<p>Later, classes were added to the language as part of ES2015, so we added the ability to create React components using JavaScript classes. <strong>Along with functional components, JavaScript classes are now the <a href="/docs/components-and-props.html#functional-and-class-components">preferred way to create components in React</a>.</strong></p>\n<p>For your existing <code>createClass</code> components, we recommend that you migrate them to JavaScript classes. However, if you have components that rely on mixins, converting to classes may not be immediately feasible. If so, <code>create-react-class</code> is available on npm as a drop-in replacement:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// Before (15.4 and below)</span>\n<span class="token keyword">var</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="gatsby-highlight-code-line"><span class="token keyword">var</span> Component <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n</span>  mixins<span class="token punctuation">:</span> <span class="token punctuation">[</span>MixinA<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// After (15.5)</span>\n<span class="token keyword">var</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="gatsby-highlight-code-line"><span class="token keyword">var</span> createReactClass <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'create-react-class\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>\n<span class="gatsby-highlight-code-line"><span class="token keyword">var</span> Component <span class="token operator">=</span> <span class="token function">createReactClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n</span>  mixins<span class="token punctuation">:</span> <span class="token punctuation">[</span>MixinA<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Your components will continue to work the same as they did before.</p>\n<p>The <a href="https://github.com/reactjs/react-codemod#explanation-of-the-new-es2015-class-transform-with-property-initializers">codemod</a> for this change attempts to convert a <code>createClass</code> component to a JavaScript class, with a fallback to <code>create-react-class</code> if necessary. It has converted thousands of components internally at Facebook.</p>\n<p>Basic usage:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>jscodeshift -t react-codemod/transforms/class.js path/to/components\n</code></pre>\n      </div>\n<h3 id="discontinuing-support-for-react-addons"><a href="#discontinuing-support-for-react-addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Discontinuing support for React Addons</h3>\n<p>We’re discontinuing active maintenance of React Addons packages. In truth, most of these packages haven’t been actively maintained in a long time. They will continue to work indefinitely, but we recommend migrating away as soon as you can to prevent future breakages.</p>\n<ul>\n<li><strong>react-addons-create-fragment</strong> – React 16 will have first-class support for fragments, at which point this package won’t be necessary. We recommend using arrays of keyed elements instead.</li>\n<li><strong>react-addons-css-transition-group</strong> - Use <a href="https://github.com/reactjs/react-transition-group">react-transition-group/CSSTransitionGroup</a> instead. Version 1.1.1 provides a drop-in replacement.</li>\n<li><strong>react-addons-linked-state-mixin</strong> - Explicitly set the <code>value</code> and <code>onChange</code> handler instead.</li>\n<li><strong>react-addons-pure-render-mixin</strong> - Use <a href="/docs/react-api.html#reactpurecomponent"><code>React.PureComponent</code></a> instead.</li>\n<li><strong>react-addons-shallow-compare</strong> - Use <a href="/docs/react-api.html#reactpurecomponent"><code>React.PureComponent</code></a> instead.</li>\n<li><strong>react-addons-transition-group</strong> - Use <a href="https://github.com/reactjs/react-transition-group">react-transition-group/TransitionGroup</a> instead. Version 1.1.1 provides a drop-in replacement.</li>\n<li><strong>react-addons-update</strong> - Use <a href="https://github.com/kolodny/immutability-helper">immutability-helper</a> instead, a drop-in replacement.</li>\n<li><strong>react-linked-input</strong> - Explicitly set the <code>value</code> and <code>onChange</code> handler instead.</li>\n</ul>\n<p>We’re also discontinuing support for the <code>react-with-addons</code> UMD build. It will be removed in React 16.</p>\n<h3 id="react-test-utils"><a href="#react-test-utils" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Test Utils</h3>\n<p>Currently, the React Test Utils live inside <code>react-addons-test-utils</code>. As of 15.5, we’re deprecating that package and moving them to <code>react-dom/test-utils</code> instead:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// Before (15.4 and below)</span>\n<span class="token keyword">import</span> TestUtils <span class="token keyword">from</span> <span class="token string">\'react-addons-test-utils\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// After (15.5)</span>\n<span class="token keyword">import</span> TestUtils <span class="token keyword">from</span> <span class="token string">\'react-dom/test-utils\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This reflects the fact that what we call the Test Utils are really a set of APIs that wrap the DOM renderer.</p>\n<p>The exception is shallow rendering, which is not DOM-specific. The shallow renderer has been moved to <code>react-test-renderer/shallow</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// Before (15.4 and below)</span>\n<span class="gatsby-highlight-code-line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-addons-test-utils\'</span><span class="token punctuation">;</span>\n</span>\n<span class="token comment">// After (15.5)</span>\n<span class="gatsby-highlight-code-line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-test-renderer/shallow\'</span><span class="token punctuation">;</span>\n</span></code></pre>\n      </div>\n<hr>\n<h2 id="acknowledgements"><a href="#acknowledgements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Acknowledgements</h2>\n<p>A special thank you to these folks for transferring ownership of npm package names:</p>\n<ul>\n<li><a href="https://github.com/developit">Jason Miller</a></li>\n<li><a href="https://github.com/aackerman">Aaron Ackerman</a></li>\n<li><a href="https://github.com/viniciusmarson">Vinicius Marson</a></li>\n</ul>\n<hr>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>We recommend using <a href="https://yarnpkg.com/">Yarn</a> or <a href="https://www.npmjs.com/">npm</a> for managing front-end dependencies. If you’re new to package managers, the <a href="https://yarnpkg.com/en/docs/getting-started">Yarn documentation</a> is a good place to get started.</p>\n<p>To install React with Yarn, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code>yarn add react@^15.5.0 react-dom@^15.5.0\n</code></pre>\n      </div>\n<p>To install React with npm, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save react@^15.5.0 react-dom@^15.5.0\n</code></pre>\n      </div>\n<p>We recommend using a bundler like <a href="https://webpack.js.org/">webpack</a> or <a href="http://browserify.org/">Browserify</a> so you can write modular code and bundle it together into small packages to optimize load time.</p>\n<p>Remember that by default, React runs extra checks and provides helpful warnings in development mode. When deploying your app, make sure to <a href="/docs/installation.html#development-and-production-versions">compile it in production mode</a>.</p>\n<p>In case you don’t use a bundler, we also provide pre-built bundles in the npm packages which you can <a href="/docs/installation.html#using-a-cdn">include as script tags</a> on your page:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://unpkg.com/react@15.5.0/dist/react.js">react/dist/react.js</a><br>\nMinified build for production: <a href="https://unpkg.com/react@15.5.0/dist/react.min.js">react/dist/react.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://unpkg.com/react@15.5.0/dist/react-with-addons.js">react/dist/react-with-addons.js</a><br>\nMinified build for production: <a href="https://unpkg.com/react@15.5.0/dist/react-with-addons.min.js">react/dist/react-with-addons.min.js</a>  </li>\n<li><strong>React DOM</strong> (include React in the page before React DOM)<br>\nDev build with warnings: <a href="https://unpkg.com/react-dom@15.5.0/dist/react-dom.js">react-dom/dist/react-dom.js</a><br>\nMinified build for production: <a href="https://unpkg.com/react-dom@15.5.0/dist/react-dom.min.js">react-dom/dist/react-dom.min.js</a>  </li>\n<li><strong>React DOM Server</strong> (include React in the page before React DOM Server)<br>\nDev build with warnings: <a href="https://unpkg.com/react-dom@15.5.0/dist/react-dom-server.js">react-dom/dist/react-dom-server.js</a><br>\nMinified build for production: <a href="https://unpkg.com/react-dom@15.5.0/dist/react-dom-server.min.js">react-dom/dist/react-dom-server.min.js</a></li>\n</ul>\n<p>We’ve also published version <code>15.5.0</code> of the <code>react</code>, <code>react-dom</code>, and addons packages on npm and the <code>react</code> package on bower.</p>\n<hr>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h2 id="1550-april-7-2017"><a href="#1550-april-7-2017" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>15.5.0 (April 7, 2017)</h2>\n<h3 id="react"><a href="#react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React</h3>\n<ul>\n<li>Added a deprecation warning for <code>React.createClass</code>. Points users to create-react-class instead. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/commit/d9a4fa4f51c6da895e1655f32255cf72c0fe620e">d9a4fa4</a>)</li>\n<li>Added a deprecation warning for <code>React.PropTypes</code>. Points users to prop-types instead. (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/commit/043845ce75ea0812286bbbd9d34994bb7e01eb28">043845c</a>)</li>\n<li>Fixed an issue when using <code>ReactDOM</code> together with <code>ReactDOMServer</code>. (<a href="https://github.com/wacii">@wacii</a> in <a href="https://github.com/facebook/react/pull/9005">#9005</a>)</li>\n<li>Fixed issue with Closure Compiler. (<a href="https://github.com/anmonteiro">@anmonteiro</a> in <a href="https://github.com/facebook/react/pull/8895">#8895</a>)</li>\n<li>Another fix for Closure Compiler. (<a href="https://github.com/Shastel">@Shastel</a> in <a href="https://github.com/facebook/react/pull/8882">#8882</a>)</li>\n<li>Added component stack info to invalid element type warning. (<a href="https://github.com/n3tr">@n3tr</a> in <a href="https://github.com/facebook/react/pull/8495">#8495</a>)</li>\n</ul>\n<h3 id="react-dom"><a href="#react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM</h3>\n<ul>\n<li>Fixed Chrome bug when backspacing in number inputs. (<a href="https://github.com/nhunzaker">@nhunzaker</a> in <a href="https://github.com/facebook/react/pull/7359">#7359</a>)</li>\n<li>Added <code>react-dom/test-utils</code>, which exports the React Test Utils. (<a href="https://github.com/bvaughn">@bvaughn</a>)</li>\n</ul>\n<h3 id="react-test-renderer"><a href="#react-test-renderer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Test Renderer</h3>\n<ul>\n<li>Fixed bug where <code>componentWillUnmount</code> was not called for children. (<a href="https://github.com/gre">@gre</a> in <a href="https://github.com/facebook/react/pull/8512">#8512</a>)</li>\n<li>Added <code>react-test-renderer/shallow</code>, which exports the shallow renderer. (<a href="https://github.com/bvaughn">@bvaughn</a>)</li>\n</ul>\n<h3 id="react-addons"><a href="#react-addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Addons</h3>\n<ul>\n<li>Last release for addons; they will no longer be actively maintained.</li>\n<li>Removed <code>peerDependencies</code> so that addons continue to work indefinitely. (<a href="https://github.com/acdlite">@acdlite</a> and <a href="https://github.com/bvaughn">@bvaughn</a> in <a href="https://github.com/facebook/react/commit/8a06cd7a786822fce229197cac8125a551e8abfa">8a06cd7</a> and <a href="https://github.com/facebook/react/commit/67a8db3650d724a51e70be130e9008806402678a">67a8db3</a>)</li>\n<li>Updated to remove references to <code>React.createClass</code> and <code>React.PropTypes</code> (<a href="https://github.com/acdlite">@acdlite</a> in <a href="https://github.com/facebook/react/commit/12a96b94823d6b6de6b1ac13bd576864abd50175">12a96b9</a>)</li>\n<li><code>react-addons-test-utils</code> is deprecated. Use <code>react-dom/test-utils</code> and <code>react-test-renderer/shallow</code> instead. (<a href="https://github.com/bvaughn">@bvaughn</a>)</li>\n</ul>',excerpt:"It’s been exactly one year since the last breaking change to React. Our next major release, React 16, will include some exciting improvements, including a  complete rewrite  of React’s internals.  We take stability seriously , and are committed to bringing those improvements to all of our users with minimal effort. To that end, today we’re releasing React 15.5.0. New Deprecation Warnings The biggest change is that we’ve extracted  React.PropTypes  and  React.createClass  into their own packages…",frontmatter:{title:"React v15.5.0",next:null,prev:null,author:[{frontmatter:{name:"Andrew Clark",url:"https://twitter.com/acdlite"}}]},fields:{date:"April 07, 2017",path:"blog/2017-04-07-react-v15.5.0.md",slug:"/blog/2017/04/07/react-v15.5.0.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}}});
//# sourceMappingURL=path---blog-2017-04-07-react-v-15-5-0-html-3de32751beee9ec91007.js.map