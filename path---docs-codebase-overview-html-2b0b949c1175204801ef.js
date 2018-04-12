webpackJsonp([59691541809194],{883:function(e,n){e.exports={data:{markdownRemark:{html:'<p>This section will give you an overview of the React codebase organization, its conventions, and the implementation.</p>\n<p>If you want to <a href="/docs/how-to-contribute.html">contribute to React</a> we hope that this guide will help you feel more comfortable making changes.</p>\n<p>We don’t necessarily recommend any of these conventions in React apps. Many of them exist for historical reasons and might change with time.</p>\n<h3 id="external-dependencies"><a href="#external-dependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>External Dependencies</h3>\n<p>React has almost no external dependencies. Usually, a <code>require()</code> points to a file in React’s own codebase. However, there are a few relatively rare exceptions.</p>\n<p>The <a href="https://github.com/facebook/fbjs">fbjs repository</a> exists because React shares some small utilities with libraries like <a href="https://github.com/facebook/relay">Relay</a>, and we keep them in sync. We don’t depend on equivalent small modules in the Node ecosystem because we want Facebook engineers to be able to make changes to them whenever necessary. None of the utilities inside fbjs are considered to be public API, and they are only intended for use by Facebook projects such as React.</p>\n<h3 id="top-level-folders"><a href="#top-level-folders" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Top-Level Folders</h3>\n<p>After cloning the <a href="https://github.com/facebook/react">React repository</a>, you will see a few top-level folders in it:</p>\n<ul>\n<li><a href="https://github.com/facebook/react/tree/master/packages"><code>packages</code></a> contains metadata (such as <code>package.json</code>) and the source code (<code>src</code> subdirectory) for all packages in the React repository. <strong>If your change is related to the code, the <code>src</code> subdirectory of each package is where you’ll spend most of your time.</strong></li>\n<li><a href="https://github.com/facebook/react/tree/master/fixtures"><code>fixtures</code></a> contains a few small React test applications for contributors.</li>\n<li><code>build</code> is the build output of React. It is not in the repository but it will appear in your React clone after you <a href="/docs/how-to-contribute.html#development-workflow">build it</a> for the first time.</li>\n</ul>\n<p>The documentation is hosted <a href="https://github.com/reactjs/reactjs.org">in a separate repository from React</a>.</p>\n<p>There are a few other top-level folders but they are mostly used for the tooling and you likely won’t ever encounter them when contributing.</p>\n<h3 id="colocated-tests"><a href="#colocated-tests" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Colocated Tests</h3>\n<p>We don’t have a top-level directory for unit tests. Instead, we put them into a directory called <code>__tests__</code> relative to the files that they test.</p>\n<p>For example, a test for <a href="https://github.com/facebook/react/blob/87724bd87506325fcaf2648c70fc1f43411a87be/src/renderers/dom/client/utils/setInnerHTML.js"><code>setInnerHTML.js</code></a> is located in <a href="https://github.com/facebook/react/blob/87724bd87506325fcaf2648c70fc1f43411a87be/src/renderers/dom/client/utils/__tests__/setInnerHTML-test.js"><code>__tests__/setInnerHTML-test.js</code></a> right next to it.</p>\n<h3 id="warnings-and-invariants"><a href="#warnings-and-invariants" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Warnings and Invariants</h3>\n<p>The React codebase uses the <code>warning</code> module to display warnings:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> warning <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'warning\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">warning</span><span class="token punctuation">(</span>\n  <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">,</span>\n  <span class="token string">\'Math is not working today.\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>The warning is shown when the <code>warning</code> condition is <code>false</code>.</strong></p>\n<p>One way to think about it is that the condition should reflect the normal situation rather than the exceptional one.</p>\n<p>It is a good idea to avoid spamming the console with duplicate warnings:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> warning <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'warning\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> didWarnAboutMath <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>didWarnAboutMath<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">warning</span><span class="token punctuation">(</span>\n    <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">,</span>\n    <span class="token string">\'Math is not working today.\'</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  didWarnAboutMath <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Warnings are only enabled in development. In production, they are completely stripped out. If you need to forbid some code path from executing, use <code>invariant</code> module instead:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> invariant <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'invariant\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">invariant</span><span class="token punctuation">(</span>\n  <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">,</span>\n  <span class="token string">\'You shall not pass!\'</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>The invariant is thrown when the <code>invariant</code> condition is <code>false</code>.</strong></p>\n<p>“Invariant” is just a way of saying “this condition always holds true”. You can think about it as making an assertion.</p>\n<p>It is important to keep development and production behavior similar, so <code>invariant</code> throws both in development and in production. The error messages are automatically replaced with error codes in production to avoid negatively affecting the byte size.</p>\n<h3 id="development-and-production"><a href="#development-and-production" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Development and Production</h3>\n<p>You can use <code>__DEV__</code> pseudo-global variable in the codebase to guard development-only blocks of code.</p>\n<p>It is inlined during the compile step, and turns into <code>process.env.NODE_ENV !== \'production\'</code> checks in the CommonJS builds.</p>\n<p>For standalone builds, it becomes <code>true</code> in the unminified build, and gets completely stripped out with the <code>if</code> blocks it guards in the minified build.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>__DEV__<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// This code will only run in development.</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="flow"><a href="#flow" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flow</h3>\n<p>We recently started introducing <a href="https://flowtype.org/">Flow</a> checks to the codebase. Files marked with the <code>@flow</code> annotation in the license header comment are being typechecked.</p>\n<p>We accept pull requests <a href="https://github.com/facebook/react/pull/7600/files">adding Flow annotations to existing code</a>. Flow annotations look like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>ReactRef<span class="token punctuation">.</span><span class="token function-variable function">detachRefs</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>\n  instance<span class="token punctuation">:</span> ReactInstance<span class="token punctuation">,</span>\n  element<span class="token punctuation">:</span> ReactElement <span class="token operator">|</span> string <span class="token operator">|</span> number <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>When possible, new code should use Flow annotations.\nYou can run <code>yarn flow</code> locally to check your code with Flow.</p>\n<h3 id="dynamic-injection"><a href="#dynamic-injection" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Dynamic Injection</h3>\n<p>React uses dynamic injection in some modules. While it is always explicit, it is still unfortunate because it hinders understanding of the code. The main reason it exists is because React originally only supported DOM as a target. React Native started as a React fork. We had to add dynamic injection to let React Native override some behaviors.</p>\n<p>You may see modules declaring their dynamic dependencies like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// Dynamically injected</span>\n<span class="token keyword">var</span> textComponentClass <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Relies on dynamically injected value</span>\n<span class="token keyword">function</span> <span class="token function">createInstanceForText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">textComponentClass</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> ReactHostComponent <span class="token operator">=</span> <span class="token punctuation">{</span>\n  createInstanceForText<span class="token punctuation">,</span>\n\n  <span class="token comment">// Provides an opportunity for dynamic injection</span>\n  injection<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    injectTextComponentClass<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>componentClass<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      textComponentClass <span class="token operator">=</span> componentClass<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> ReactHostComponent<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The <code>injection</code> field is not handled specially in any way. But by convention, it means that this module wants to have some (presumably platform-specific) dependencies injected into it at runtime.</p>\n<p>There are multiple injection points in the codebase. In the future, we intend to get rid of the dynamic injection mechanism and wire up all the pieces statically during the build.</p>\n<h3 id="multiple-packages"><a href="#multiple-packages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Multiple Packages</h3>\n<p>React is a <a href="http://danluu.com/monorepo/">monorepo</a>. Its repository contains multiple separate packages so that their changes can be coordinated together, and issues live in one place.</p>\n<h3 id="react-core"><a href="#react-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Core</h3>\n<p>The “core” of React includes all the <a href="/docs/top-level-api.html#react">top-level <code>React</code> APIs</a>, for example:</p>\n<ul>\n<li><code>React.createElement()</code></li>\n<li><code>React.Component</code></li>\n<li><code>React.Children</code></li>\n</ul>\n<p><strong>React core only includes the APIs necessary to define components.</strong> It does not include the <a href="/docs/reconciliation.html">reconciliation</a> algorithm or any platform-specific code. It is used both by React DOM and React Native components.</p>\n<p>The code for React core is located in <a href="https://github.com/facebook/react/tree/master/packages/react"><code>packages/react</code></a> in the source tree. It is available on npm as the <a href="https://www.npmjs.com/package/react"><code>react</code></a> package. The corresponding standalone browser build is called <code>react.js</code>, and it exports a global called <code>React</code>.</p>\n<h3 id="renderers"><a href="#renderers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Renderers</h3>\n<p>React was originally created for the DOM but it was later adapted to also support native platforms with <a href="http://facebook.github.io/react-native/">React Native</a>. This introduced the concept of “renderers” to React internals.</p>\n<p><strong>Renderers manage how a React tree turns into the underlying platform calls.</strong></p>\n<p>Renderers are also located in <a href="https://github.com/facebook/react/tree/master/packages/"><code>packages/</code></a>:</p>\n<ul>\n<li><a href="https://github.com/facebook/react/tree/master/packages/react-dom">React DOM Renderer</a> renders React components to the DOM. It implements <a href="/docs/react-dom.html">top-level <code>ReactDOM</code> APIs</a> and is available as <a href="https://www.npmjs.com/package/react-dom"><code>react-dom</code></a> npm package. It can also be used as standalone browser bundle called <code>react-dom.js</code> that exports a <code>ReactDOM</code> global.</li>\n<li><a href="https://github.com/facebook/react/tree/master/packages/react-native-renderer">React Native Renderer</a> renders React components to native views. It is used internally by React Native.</li>\n<li><a href="https://github.com/facebook/react/tree/master/packages/react-test-renderer">React Test Renderer</a> renders React components to JSON trees. It is used by the <a href="https://facebook.github.io/jest/blog/2016/07/27/jest-14.html">Snapshot Testing</a> feature of <a href="https://facebook.github.io/jest">Jest</a> and is available as <a href="https://www.npmjs.com/package/react-test-renderer">react-test-renderer</a> npm package.</li>\n</ul>\n<p>The only other officially supported renderer is <a href="https://github.com/facebook/react/tree/master/packages/react-art"><code>react-art</code></a>. It used to be in a separate <a href="https://github.com/reactjs/react-art">GitHub repository</a> but we moved it into the main source tree for now.</p>\n<blockquote>\n<p><strong>Note:</strong></p>\n<p>Technically the <a href="https://github.com/facebook/react/tree/master/packages/react-native-renderer"><code>react-native-renderer</code></a> is a very thin layer that teaches React to interact with React Native implementation. The real platform-specific code managing the native views lives in the <a href="https://github.com/facebook/react-native">React Native repository</a> together with its components.</p>\n</blockquote>\n<h3 id="reconcilers"><a href="#reconcilers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reconcilers</h3>\n<p>Even vastly different renderers like React DOM and React Native need to share a lot of logic. In particular, the <a href="/docs/reconciliation.html">reconciliation</a> algorithm should be as similar as possible so that declarative rendering, custom components, state, lifecycle methods, and refs work consistently across platforms.</p>\n<p>To solve this, different renderers share some code between them. We call this part of React a “reconciler”. When an update such as <code>setState()</code> is scheduled, the reconciler calls <code>render()</code> on components in the tree and mounts, updates, or unmounts them.</p>\n<p>Reconcilers are not packaged separately because they currently have no public API. Instead, they are exclusively used by renderers such as React DOM and React Native.</p>\n<h3 id="stack-reconciler"><a href="#stack-reconciler" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stack Reconciler</h3>\n<p>The “stack” reconciler is the implementation powering React 15 and earlier. We have since stopped using it, but it is documented in detail in the <a href="/docs/implementation-notes.html">next section</a>.</p>\n<h3 id="fiber-reconciler"><a href="#fiber-reconciler" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Fiber Reconciler</h3>\n<p>The “fiber” reconciler is a new effort aiming to resolve the problems inherent in the stack reconciler and fix a few long-standing issues. It has been the default reconciler since React 16.</p>\n<p>Its main goals are:</p>\n<ul>\n<li>Ability to split interruptible work in chunks.</li>\n<li>Ability to prioritize, rebase and reuse work in progress.</li>\n<li>Ability to yield back and forth between parents and children to support layout in React.</li>\n<li>Ability to return multiple elements from <code>render()</code>.</li>\n<li>Better support for error boundaries.</li>\n</ul>\n<p>You can read more about it in <a href="https://github.com/acdlite/react-fiber-architecture">React Fiber Architecture</a>. While it has shipped with React 16, the async features are not enabled by default yet.</p>\n<p>Its source code is located in <a href="https://github.com/facebook/react/tree/master/packages/react-reconciler"><code>packages/react-reconciler</code></a>.</p>\n<h3 id="event-system"><a href="#event-system" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Event System</h3>\n<p>React implements a synthetic event system which is agnostic of the renderers and works both with React DOM and React Native. Its source code is located in <a href="https://github.com/facebook/react/tree/master/packages/events"><code>packages/events</code></a>.</p>\n<p>There is a <a href="https://www.youtube.com/watch?v=dRo_egw7tBc">video with a deep code dive into it</a> (66 mins).</p>\n<h3 id="what-next"><a href="#what-next" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What Next?</h3>\n<p>Read the <a href="/docs/implementation-notes.html">next section</a> to learn about the pre-React 16 implementation of reconciler in more detail. We haven’t documented the internals of the new reconciler yet.</p>',frontmatter:{title:"Codebase Overview",next:"implementation-notes.html",prev:"how-to-contribute.html"},fields:{path:"docs/codebase-overview.md",slug:"docs/codebase-overview.html"}}},pathContext:{slug:"docs/codebase-overview.html"}}}});
//# sourceMappingURL=path---docs-codebase-overview-html-2b0b949c1175204801ef.js.map