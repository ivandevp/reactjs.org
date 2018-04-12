webpackJsonp([21318293188372],{776:function(e,n){e.exports={data:{markdownRemark:{html:'<p><strong>Update:</strong> We missed a few important changes in our initial post and changelog. We’ve updated this post with details about <a href="#descriptors">Descriptors</a> and <a href="#prop-type-validation">Prop Type Validation</a>.</p>\n<hr>\n<p>We’re really happy to announce the availability of React v0.11. There seems to be a lot of excitement already and we appreciate everybody who gave the release candidate a try over the weekend. We made a couple small changes in response to the feedback and issues filed. We enabled the destructuring assignment transform when using <code>jsx --harmony</code>, fixed a small regression with <code>statics</code>, and made sure we actually exposed the new API we said we were shipping: <code>React.Children.count</code>.</p>\n<p>This version has been cooking for a couple months now and includes a wide array of bug fixes and features. We highlighted some of the most important changes below, along with the full changelog.</p>\n<p>The release is available for download from the CDN:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.11.0.js">https://fb.me/react-0.11.0.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.11.0.min.js">https://fb.me/react-0.11.0.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.11.0.js">https://fb.me/react-with-addons-0.11.0.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.11.0.min.js">https://fb.me/react-with-addons-0.11.0.min.js</a>  </li>\n<li><strong>In-Browser JSX transformer</strong><br>\n<a href="https://fb.me/JSXTransformer-0.11.0.js">https://fb.me/JSXTransformer-0.11.0.js</a></li>\n</ul>\n<p>We’ve also published version <code>0.11.0</code> of the <code>react</code> and <code>react-tools</code> packages on npm and the <code>react</code> package on bower.</p>\n<p>Please try these builds out and <a href="https://github.com/facebook/react/issues/new">file an issue on GitHub</a> if you see anything awry.</p>\n<h2 id="getdefaultprops"><a href="#getdefaultprops" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code>getDefaultProps</code></h2>\n<p>Starting in React 0.11, <code>getDefaultProps()</code> is called only once when <code>React.createClass()</code> is called, instead of each time a component is rendered. This means that <code>getDefaultProps()</code> can no longer vary its return value based on <code>this.props</code> and any objects will be shared across all instances. This change improves performance and will make it possible in the future to do PropTypes checks earlier in the rendering process, allowing us to give better error messages.</p>\n<h2 id="rendering-to-null"><a href="#rendering-to-null" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Rendering to <code>null</code></h2>\n<p>Since React’s release, people have been using work arounds to “render nothing”. Usually this means returning an empty <code>&#x3C;div/></code> or <code>&#x3C;span/></code>. Some people even got clever and started returning <code>&#x3C;noscript/></code> to avoid extraneous DOM nodes. We finally provided a “blessed” solution that allows developers to write meaningful code. Returning <code>null</code> is an explicit indication to React that you do not want anything rendered. Behind the scenes we make this work with a <code>&#x3C;noscript></code> element, though in the future we hope to not put anything in the document. In the mean time, <code>&#x3C;noscript></code> elements do not affect layout in any way, so you can feel safe using <code>null</code> today!</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// Before</span>\nrender<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// After</span>\nrender<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>visible<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="jsx-namespacing"><a href="#jsx-namespacing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX Namespacing</h2>\n<p>Another feature request we’ve been hearing for a long time is the ability to have namespaces in JSX. Given that JSX is just JavaScript, we didn’t want to use XML namespacing. Instead we opted for a standard JS approach: object property access. Instead of assigning variables to access components stored in an object (such as a component library), you can now use the component directly as <code>&#x3C;Namespace.Component/></code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token comment">// Before</span>\n<span class="token keyword">var</span> UI <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'UI\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> UILayout <span class="token operator">=</span> UI<span class="token punctuation">.</span>Layout<span class="token punctuation">;</span>\n<span class="token keyword">var</span> UIButton <span class="token operator">=</span> UI<span class="token punctuation">.</span>Button<span class="token punctuation">;</span>\n<span class="token keyword">var</span> UILabel <span class="token operator">=</span> UI<span class="token punctuation">.</span>Label<span class="token punctuation">;</span>\n\nrender<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UILayout</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UIButton</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UILabel</span><span class="token punctuation">></span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UILabel</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UILayout</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// After</span>\n<span class="token keyword">var</span> UI <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'UI\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nrender<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UI.Layout</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UI.Button</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UI.Label</span><span class="token punctuation">></span></span>text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UI.Label</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UI.Layout</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="improved-keyboard-event-normalization"><a href="#improved-keyboard-event-normalization" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Improved keyboard event normalization</h2>\n<p>Keyboard events now contain a normalized <code>e.key</code> value according to the <a href="http://www.w3.org/TR/DOM-Level-3-Events/#keys-special">DOM Level 3 Events spec</a>, allowing you to write simpler key handling code that works in all browsers, such as:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>handleKeyDown<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">\'Enter\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Handle enter key</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">\' \'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Handle spacebar</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">\'ArrowLeft\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Handle left arrow</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<p>Keyboard and mouse events also now include a normalized <code>e.getModifierState()</code> that works consistently across browsers.</p>\n<h2 id="descriptors"><a href="#descriptors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Descriptors</h2>\n<p>In our <a href="/blog/2014/03/21/react-v0.10.html#clone-on-mount">v0.10 release notes</a>, we called out that we were deprecating the existing behavior of the component function call (eg <code>component = MyComponent(props, ...children)</code> or <code>component = &#x3C;MyComponent prop={...}/></code>). Previously that would create an instance and React would modify that internally. You could store that reference and then call functions on it (eg <code>component.setProps(...)</code>). This no longer works. <code>component</code> in the above examples will be a descriptor and not an instance that can be operated on. The v0.10 release notes provide a complete example along with a migration path. The development builds also provided warnings if you called functions on descriptors.</p>\n<p>Along with this change to descriptors, <code>React.isValidComponent</code> and <code>React.PropTypes.component</code> now actually validate that the value is a descriptor. Overwhelmingly, these functions are used to validate the value of <code>MyComponent()</code>, which as mentioned is now a descriptor, not a component instance. We opted to reduce code churn and make the migration to 0.11 as easy as possible. However, we realize this is has caused some confusion and we’re working to make sure we are consistent with our terminology.</p>\n<h2 id="prop-type-validation"><a href="#prop-type-validation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prop Type Validation</h2>\n<p>Previously <code>React.PropTypes</code> validation worked by simply logging to the console. Internally, each validator was responsible for doing this itself. Additionally, you could write a custom validator and the expectation was that you would also simply <code>console.log</code> your error message. Very shortly into the 0.11 cycle we changed this so that our validators return (<em>not throw</em>) an <code>Error</code> object. We then log the <code>error.message</code> property in a central place in ReactCompositeComponent. Overall the result is the same, but this provides a clearer intent in validation. In addition, to better transition into our descriptor factory changes, we also currently run prop type validation twice in development builds. As a result, custom validators doing their own logging result in duplicate messages. To update, simply return an <code>Error</code> with your message instead.</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-core"><a href="#react-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Core</h3>\n<h4 id="breaking-changes"><a href="#breaking-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Changes</h4>\n<ul>\n<li><code>getDefaultProps()</code> is now called once per class and shared across all instances</li>\n<li><code>MyComponent()</code> now returns a descriptor, not an instance</li>\n<li><code>React.isValidComponent</code> and <code>React.PropTypes.component</code> validate <em>descriptors</em>, not component instances.</li>\n<li>Custom <code>propType</code> validators should return an <code>Error</code> instead of logging directly</li>\n</ul>\n<h4 id="new-features"><a href="#new-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Features</h4>\n<ul>\n<li>Rendering to <code>null</code></li>\n<li>Keyboard events include normalized <code>e.key</code> and <code>e.getModifierState()</code> properties</li>\n<li>New normalized <code>onBeforeInput</code> event</li>\n<li><code>React.Children.count</code> has been added as a helper for counting the number of children</li>\n</ul>\n<h4 id="bug-fixes"><a href="#bug-fixes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bug Fixes</h4>\n<ul>\n<li>Re-renders are batched in more cases</li>\n<li>Events: <code>e.view</code> properly normalized</li>\n<li>Added Support for more HTML attributes (<code>coords</code>, <code>crossOrigin</code>, <code>download</code>, <code>hrefLang</code>, <code>mediaGroup</code>, <code>muted</code>, <code>scrolling</code>, <code>shape</code>, <code>srcSet</code>, <code>start</code>, <code>useMap</code>)</li>\n<li>\n<p>Improved SVG support</p>\n<ul>\n<li>Changing <code>className</code> on a mounted SVG component now works correctly</li>\n<li>Added support for elements <code>mask</code> and <code>tspan</code></li>\n<li>Added support for attributes <code>dx</code>, <code>dy</code>, <code>fillOpacity</code>, <code>fontFamily</code>, <code>fontSize</code>, <code>markerEnd</code>, <code>markerMid</code>, <code>markerStart</code>, <code>opacity</code>, <code>patternContentUnits</code>, <code>patternUnits</code>, <code>preserveAspectRatio</code>, <code>strokeDasharray</code>, <code>strokeOpacity</code></li>\n</ul>\n</li>\n<li>CSS property names with vendor prefixes (<code>Webkit</code>, <code>ms</code>, <code>Moz</code>, <code>O</code>) are now handled properly</li>\n<li>Duplicate keys no longer cause a hard error; now a warning is logged (and only one of the children with the same key is shown)</li>\n<li><code>img</code> event listeners are now unbound properly, preventing the error “Two valid but unequal nodes with the same <code>data-reactid</code>”</li>\n<li>Added explicit warning when missing polyfills</li>\n</ul>\n<h3 id="react-with-addons"><a href="#react-with-addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React With Addons</h3>\n<ul>\n<li>PureRenderMixin: a mixin which helps optimize “pure” components</li>\n<li>Perf: a new set of tools to help with performance analysis</li>\n<li>Update: New <code>$apply</code> command to transform values</li>\n<li>TransitionGroup bug fixes with null elements, Android</li>\n</ul>\n<h3 id="react-npm-module"><a href="#react-npm-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React NPM Module</h3>\n<ul>\n<li>Now includes the pre-built packages under <code>dist/</code>.</li>\n<li><code>envify</code> is properly listed as a dependency instead of a peer dependency</li>\n</ul>\n<h3 id="jsx"><a href="#jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSX</h3>\n<ul>\n<li>Added support for namespaces, eg <code>&#x3C;Components.Checkbox /></code></li>\n<li>\n<p>JSXTransformer</p>\n<ul>\n<li>Enable the same <code>harmony</code> features available in the command line with <code>&#x3C;script type="text/jsx;harmony=true"></code></li>\n<li>Scripts are downloaded in parallel for more speed. They are still executed in order (as you would expect with normal script tags)</li>\n<li>Fixed a bug preventing sourcemaps from working in Firefox</li>\n</ul>\n</li>\n</ul>\n<h3 id="react-tools-module"><a href="#react-tools-module" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Tools Module</h3>\n<ul>\n<li>Improved readme with usage and API information</li>\n<li>Improved ES6 transforms available with <code>--harmony</code> option</li>\n<li>Added <code>--source-map-inline</code> option to the <code>jsx</code> executable</li>\n<li>New <code>transformWithDetails</code> API which gives access to the raw sourcemap data</li>\n</ul>',excerpt:"Update:  We missed a few important changes in our initial post and changelog. We’ve updated this post with details about  Descriptors  and  Prop Type Validation . We’re really happy to announce the availability of React v0.11. There seems to be a lot of excitement already and we appreciate everybody who gave the release candidate a try over the weekend. We made a couple small changes in response to the feedback and issues filed. We enabled the destructuring assignment transform when using  jsx…",frontmatter:{title:"React v0.11",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"July 17, 2014",path:"blog/2014-07-17-react-v0.11.md",slug:"/blog/2014/07/17/react-v0.11.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2014/07/17/react-v0.11.html"}}}});
//# sourceMappingURL=path---blog-2014-07-17-react-v-0-11-html-e4667454201c494b861f.js.map