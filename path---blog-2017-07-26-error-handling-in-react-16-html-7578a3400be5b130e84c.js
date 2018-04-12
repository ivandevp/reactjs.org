webpackJsonp([0x8b75f099510d],{846:function(a,e){a.exports={data:{markdownRemark:{html:'<p>As React 16 release is getting closer, we would like to announce a few changes to how React handles JavaScript errors inside components. These changes are included in React 16 beta versions, and will be a part of React 16.</p>\n<p><strong>By the way, <a href="https://github.com/facebook/react/issues/10294">we just released the first beta of React 16 for you to try!</a></strong></p>\n<h2 id="behavior-in-react-15-and-earlier"><a href="#behavior-in-react-15-and-earlier" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Behavior in React 15 and Earlier</h2>\n<p>In the past, JavaScript errors inside components used to corrupt React’s internal state and cause it to <a href="https://github.com/facebook/react/issues/4026">emit</a> <a href="https://github.com/facebook/react/issues/6895">cryptic</a> <a href="https://github.com/facebook/react/issues/8579">errors</a> on next renders. These errors were always caused by an earlier error in the application code, but React did not provide a way to handle them gracefully in components, and could not recover from them.</p>\n<h2 id="introducing-error-boundaries"><a href="#introducing-error-boundaries" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Introducing Error Boundaries</h2>\n<p>A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.</p>\n<p>Error boundaries are React components that <strong>catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI</strong> instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.</p>\n<p>A class component becomes an error boundary if it defines a new lifecycle method called <code>componentDidCatch(error, info)</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> hasError<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n<span class="gatsby-highlight-code-line">  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token comment">// Display fallback UI</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hasError<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token comment">// You can also log the error to an error reporting service</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token function">logErrorToMyService</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token comment">// You can render any custom fallback UI</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Something went wrong<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span>\n</span>    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Then you can use it as a regular component:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyWidget</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>The <code>componentDidCatch()</code> method works like a JavaScript <code>catch {}</code> block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.</p>\n<p>Note that <strong>error boundaries only catch errors in the components below them in the tree</strong>. An error boundary can’t catch an error within itself. If an error boundary fails trying to render the error message, the error will propagate to the closest error boundary above it. This, too, is similar to how <code>catch {}</code> block works in JavaScript.</p>\n<h2 id="live-demo"><a href="#live-demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Live Demo</h2>\n<p>Check out <a href="https://codepen.io/gaearon/pen/wqvxGa?editors=0010">this example of declaring and using an error boundary</a> with <a href="https://github.com/facebook/react/issues/10294">React 16 beta</a>.</p>\n<h2 id="where-to-place-error-boundaries"><a href="#where-to-place-error-boundaries" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Where to Place Error Boundaries</h2>\n<p>The granularity of error boundaries is up to you. You may wrap top-level route components to display a “Something went wrong” message to the user, just like server-side frameworks often handle crashes. You may also wrap individual widgets in an error boundary to protect them from crashing the rest of the application.</p>\n<h2 id="new-behavior-for-uncaught-errors"><a href="#new-behavior-for-uncaught-errors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Behavior for Uncaught Errors</h2>\n<p>This change has an important implication. <strong>As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree.</strong></p>\n<p>We debated this decision, but in our experience it is worse to leave corrupted UI in place than to completely remove it. For example, in a product like Messenger leaving the broken UI visible could lead to somebody sending a message to the wrong person. Similarly, it is worse for a payments app to display a wrong amount than to render nothing.</p>\n<p>This change means that as you migrate to React 16, you will likely uncover existing crashes in your application that have been unnoticed before. Adding error boundaries lets you provide better user experience when something goes wrong.</p>\n<p>For example, Facebook Messenger wraps content of the sidebar, the info panel, the conversation log, and the message input into separate error boundaries. If some component in one of these UI areas crashes, the rest of them remain interactive.</p>\n<p>We also encourage you to use JS error reporting services (or build your own) so that you can learn about unhandled exceptions as they happen in production, and fix them.</p>\n<h2 id="component-stack-traces"><a href="#component-stack-traces" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Component Stack Traces</h2>\n<p>React 16 prints all errors that occurred during rendering to the console in development, even if the application accidentally swallows them. In addition to the error message and the JavaScript stack, it also provides component stack traces. Now you can see where exactly in the component tree the failure has happened:</p>\n\n  <a class="gatsby-resp-image-link" href="/static/error-boundaries-stack-trace-f1276837b03821b43358d44c14072945-71000.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 17.114303560274827%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAXUlEQVQI15VLzQoAERj0/o/lxkU2fEQS5aa1e96a5Q12a5rmlz3GwHukhBCwtHPQGjGCaCeLV7ustSjldm4SnVpf3s9a2V7kvD+tYc5fYOgdUoJzKAUhcBwY4+P5BZ10pgdBiIxYAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Component stack traces in error message" title="" src="/static/error-boundaries-stack-trace-f1276837b03821b43358d44c14072945-acf85.png" srcset="/static/error-boundaries-stack-trace-f1276837b03821b43358d44c14072945-c1418.png 210w,\n/static/error-boundaries-stack-trace-f1276837b03821b43358d44c14072945-5d5d8.png 420w,\n/static/error-boundaries-stack-trace-f1276837b03821b43358d44c14072945-acf85.png 840w,\n/static/error-boundaries-stack-trace-f1276837b03821b43358d44c14072945-de0cd.png 1260w,\n/static/error-boundaries-stack-trace-f1276837b03821b43358d44c14072945-71000.png 1601w" sizes="(max-width: 840px) 100vw, 840px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>You can also see the filenames and line numbers in the component stack trace. This works by default in <a href="https://github.com/facebookincubator/create-react-app">Create React App</a> projects:</p>\n\n  <a class="gatsby-resp-image-link" href="/static/error-boundaries-stack-trace-line-numbers-45611d4fdbd152829b28ae2348d6dcba-4e7a0.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 16.46837820914214%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAW0lEQVQI15WMPQrAIBSDvf+tHDuICD7/dVBci4WOhdR3gxY+QkJIxGMtQkAprNs7B605brPxHikhZxCh1tv75dxpzEW0ehdct8bdGFjrFwJz4jggJZTiixi/j1+ViaYQxC7NFgAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Component stack traces with line numbers in error message" title="" src="/static/error-boundaries-stack-trace-line-numbers-45611d4fdbd152829b28ae2348d6dcba-acf85.png" srcset="/static/error-boundaries-stack-trace-line-numbers-45611d4fdbd152829b28ae2348d6dcba-c1418.png 210w,\n/static/error-boundaries-stack-trace-line-numbers-45611d4fdbd152829b28ae2348d6dcba-5d5d8.png 420w,\n/static/error-boundaries-stack-trace-line-numbers-45611d4fdbd152829b28ae2348d6dcba-acf85.png 840w,\n/static/error-boundaries-stack-trace-line-numbers-45611d4fdbd152829b28ae2348d6dcba-de0cd.png 1260w,\n/static/error-boundaries-stack-trace-line-numbers-45611d4fdbd152829b28ae2348d6dcba-4e7a0.png 1597w" sizes="(max-width: 840px) 100vw, 840px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>If you don’t use Create React App, you can add <a href="https://www.npmjs.com/package/babel-plugin-transform-react-jsx-source">this plugin</a> manually to your Babel configuration. Note that it’s intended only for development and <strong>must be disabled in production</strong>.</p>\n<h2 id="why-not-use-try--catch"><a href="#why-not-use-try--catch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why Not Use <code>try</code> / <code>catch</code>?</h2>\n<p><code>try</code> / <code>catch</code> is great but it only works for imperative code:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>\n  <span class="token function">showButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>However, React components are declarative and specify <em>what</em> should be rendered:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>Error boundaries preserve the declarative nature of React, and behave as you would expect. For example, even if an error occurs in a <code>componentDidUpdate</code> hook caused by a <code>setState</code> somewhere deep in the tree, it will still correctly propagate to the closest error boundary.</p>\n<h2 id="naming-changes-from-react-15"><a href="#naming-changes-from-react-15" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Naming Changes from React 15</h2>\n<p>React 15 included a very limited support for error boundaries under a different method name: <code>unstable_handleError</code>. This method no longer works, and you will need to change it to <code>componentDidCatch</code> in your code starting from the first 16 beta release.</p>\n<p>For this change, we’ve provided <a href="https://github.com/reactjs/react-codemod#error-boundaries">a codemod</a> to automatically migrate your code.</p>',excerpt:"As React 16 release is getting closer, we would like to announce a few changes to how React handles JavaScript errors inside components. These changes are included in React 16 beta versions, and will be a part of React 16. By the way,  we just released the first beta of React 16 for you to try! Behavior in React 15 and Earlier In the past, JavaScript errors inside components used to corrupt React’s internal state and cause it to  emit   cryptic   errors  on next renders. These errors were always…",frontmatter:{title:"Error Handling in React 16",next:null,prev:null,author:[{frontmatter:{name:"Dan Abramov",url:"https://twitter.com/dan_abramov"}}]},fields:{date:"July 26, 2017",path:"blog/2017-07-26-error-handling-in-react-16.md",slug:"/blog/2017/07/26/error-handling-in-react-16.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}});
//# sourceMappingURL=path---blog-2017-07-26-error-handling-in-react-16-html-7578a3400be5b130e84c.js.map