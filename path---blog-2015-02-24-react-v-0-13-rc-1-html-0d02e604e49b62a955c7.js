webpackJsonp([0x6c8534fe4490],{797:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Over the weekend we pushed out our first (and hopefully only) release candidate for React v0.13!</p>\n<p>We’ve talked a little bit about the changes that are coming. The splashiest of these changes is support for ES6 Classes. You can read more about this in <a href="/blog/2015/01/27/react-v0.13.0-beta-1.html">our beta announcement</a>. We’re really excited about this! Sebastian also posted earlier this morning about <a href="/blog/2015/02/24/streamlining-react-elements.html">some of the other changes coming focused around ReactElement</a>. The changes we’ve been working on there will hopefully enable lots of improvements to performance and developer experience.</p>\n<p>The release candidate is available for download:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.13.0-rc1.js">https://fb.me/react-0.13.0-rc1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.13.0-rc1.min.js">https://fb.me/react-0.13.0-rc1.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.13.0-rc1.js">https://fb.me/react-with-addons-0.13.0-rc1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.13.0-rc1.min.js">https://fb.me/react-with-addons-0.13.0-rc1.min.js</a>  </li>\n<li><strong>In-Browser JSX transformer</strong><br>\n<a href="https://fb.me/JSXTransformer-0.13.0-rc1.js">https://fb.me/JSXTransformer-0.13.0-rc1.js</a></li>\n</ul>\n<p>We’ve also published version <code>0.13.0-rc1</code> of the <code>react</code> and <code>react-tools</code> packages on npm and the <code>react</code> package on bower.</p>\n<hr>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-core"><a href="#react-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Core</h3>\n<h4 id="breaking-changes"><a href="#breaking-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Changes</h4>\n<ul>\n<li>Mutating <code>props</code> after an element is created is deprecated and will cause warnings in development mode; future versions of React will incorporate performance optimizations assuming that props aren’t mutated</li>\n<li>Static methods (defined in <code>statics</code>) are no longer autobound to the component class</li>\n<li><code>ref</code> resolution order has changed slightly such that a ref to a component is available immediately after its <code>componentDidMount</code> method is called; this change should be observable only if your component calls a parent component’s callback within your <code>componentDidMount</code>, which is an anti-pattern and should be avoided regardless</li>\n<li>Calls to <code>setState</code> in life-cycle methods are now always batched and therefore asynchronous. Previously the first call on the first mount was synchronous.</li>\n<li><code>setState</code> and <code>forceUpdate</code> on an unmounted component now warns instead of throwing. That avoids a possible race condition with Promises.</li>\n<li>Access to most internal properties has been completely removed, including <code>this._pendingState</code> and <code>this._rootNodeID</code>.</li>\n</ul>\n<h4 id="new-features"><a href="#new-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Features</h4>\n<ul>\n<li>Support for using ES6 classes to build React components; see the <a href="/blog/2015/01/27/react-v0.13.0-beta-1.html">v0.13.0 beta 1 notes</a> for details</li>\n<li>Added new top-level API <code>React.findDOMNode(component)</code>, which should be used in place of <code>component.getDOMNode()</code>. The base class for ES6-based components will not have <code>getDOMNode</code>. This change will enable some more patterns moving forward.</li>\n<li>New <code>ref</code> style, allowing a callback to be used in place of a name: <code>&#x3C;Photo ref={(c) => this._photo = c} /></code> allows you to reference the component with <code>this._photo</code> (as opposed to <code>ref="photo"</code> which gives <code>this.refs.photo</code>)</li>\n<li><code>this.setState()</code> can now take a function as the first argument for transactional state updates, such as <code>this.setState((state, props) => ({count: state.count + 1}));</code> — this means that you no longer need to use <code>this._pendingState</code>, which is now gone.</li>\n<li>Support for iterators and immutable-js sequences as children</li>\n</ul>\n<h4 id="deprecations"><a href="#deprecations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecations</h4>\n<ul>\n<li><code>ComponentClass.type</code> is deprecated. Just use <code>ComponentClass</code> (usually as <code>element.type === ComponentClass</code>)</li>\n<li>Some methods that are available on <code>createClass</code>-based components are removed or deprecated from ES6 classes (for example, <code>getDOMNode</code>, <code>setProps</code>, <code>replaceState</code>).</li>\n</ul>\n<h3 id="react-with-add-ons"><a href="#react-with-add-ons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React with Add-Ons</h3>\n<h4 id="deprecations-1"><a href="#deprecations-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecations</h4>\n<ul>\n<li><code>React.addons.classSet</code> is now deprecated. This functionality can be replaced with several freely available modules. <a href="https://www.npmjs.com/package/classnames">classnames</a> is one such module.</li>\n</ul>\n<h3 id="react-tools"><a href="#react-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Tools</h3>\n<h4 id="breaking-changes-1"><a href="#breaking-changes-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Changes</h4>\n<ul>\n<li>When transforming ES6 syntax, <code>class</code> methods are no longer enumerable by default, which requires <code>Object.defineProperty</code>; if you support browsers such as IE8, you can pass <code>--target es3</code> to mirror the old behavior</li>\n</ul>\n<h4 id="new-features-1"><a href="#new-features-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Features</h4>\n<ul>\n<li>\n<p><code>--target</code> option is available on the jsx command, allowing users to specify and ECMAScript version to target.</p>\n<ul>\n<li><code>es5</code> is the default.</li>\n<li><code>es3</code> restored the previous default behavior. An additional transform is added here to ensure the use of reserved words as properties is safe (eg <code>this.static</code> will become <code>this[\'static\']</code> for IE8 compatibility).</li>\n</ul>\n</li>\n<li>The transform for the call spread operator has also been enabled.</li>\n</ul>\n<h3 id="jsx"><a href="#jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX</h3>\n<h4 id="breaking-changes-2"><a href="#breaking-changes-2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Changes</h4>\n<ul>\n<li>A change was made to how some JSX was parsed, specifically around the use of <code>></code> or <code>}</code> when inside an element. Previously it would be treated as a string but now it will be treated as a parse error. We will be releasing a standalone executable to find and fix potential issues in your JSX code.</li>\n</ul>',excerpt:"Over the weekend we pushed out our first (and hopefully only) release candidate for React v0.13! We’ve talked a little bit about the changes that are coming. The splashiest of these changes is support for ES6 Classes. You can read more about this in  our beta announcement . We’re really excited about this! Sebastian also posted earlier this morning about  some of the other changes coming focused around ReactElement . The changes we’ve been working on there will hopefully enable lots of…",frontmatter:{title:"React v0.13 RC",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"February 24, 2015",path:"blog/2015-02-24-react-v0.13-rc1.md",slug:"/blog/2015/02/24/react-v0.13-rc1.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2015/02/24/react-v0.13-rc1.html"}}}});
//# sourceMappingURL=path---blog-2015-02-24-react-v-0-13-rc-1-html-0d02e604e49b62a955c7.js.map