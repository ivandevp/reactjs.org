webpackJsonp([0xa248dec2faa8],{889:function(n,a){n.exports={data:{markdownRemark:{html:'<p>React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.</p>\n<p>In this section, we will consider a few problems where developers new to React often reach for inheritance, and show how we can solve them with composition.</p>\n<h2 id="containment"><a href="#containment" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Containment</h2>\n<p>Some components don’t know their children ahead of time. This is especially common for components like <code>Sidebar</code> or <code>Dialog</code> that represent generic “boxes”.</p>\n<p>We recommend that such components use the special <code>children</code> prop to pass children elements directly into their output:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">FancyBorder</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'FancyBorder FancyBorder-\'</span> <span class="token operator">+</span> props<span class="token punctuation">.</span>color<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This lets other components pass arbitrary children to them by nesting the JSX:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">WelcomeDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FancyBorder</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Dialog-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">        Welcome\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Dialog-message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">        Thank you <span class="token keyword">for</span> visiting our spacecraft<span class="token operator">!</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FancyBorder</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="https://codepen.io/gaearon/pen/ozqNOV?editors=0010">Try it on CodePen.</a></p>\n<p>Anything inside the <code>&#x3C;FancyBorder></code> JSX tag gets passed into the <code>FancyBorder</code> component as a <code>children</code> prop. Since <code>FancyBorder</code> renders <code>{props.children}</code> inside a <code>&#x3C;div></code>, the passed elements appear in the final output.</p>\n<p>While this is less common, sometimes you might need multiple “holes” in a component. In such cases you may come up with your own convention instead of using <code>children</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">SplitPane</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SplitPane<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SplitPane-left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>left<span class="token punctuation">}</span>\n</span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SplitPane-right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>right<span class="token punctuation">}</span>\n</span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SplitPane</span>\n      <span class="token attr-name">left</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Contacts</span> <span class="token punctuation">/></span></span>\n</span>      <span class="token punctuation">}</span></span>\n      <span class="token attr-name">right</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Chat</span> <span class="token punctuation">/></span></span>\n</span>      <span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="https://codepen.io/gaearon/pen/gwZOJp?editors=0010">Try it on CodePen.</a></p>\n<p>React elements like <code>&#x3C;Contacts /></code> and <code>&#x3C;Chat /></code> are just objects, so you can pass them as props like any other data. This approach may remind you of “slots” in other libraries but there are no limitations on what you can pass as props in React.</p>\n<h2 id="specialization"><a href="#specialization" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Specialization</h2>\n<p>Sometimes we think about components as being “special cases” of other components. For example, we might say that a <code>WelcomeDialog</code> is a special case of <code>Dialog</code>.</p>\n<p>In React, this is also achieved by composition, where a more “specific” component renders a more “generic” one and configures it with props:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Dialog</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FancyBorder</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Dialog-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>title<span class="token punctuation">}</span>\n</span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Dialog-message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>message<span class="token punctuation">}</span>\n</span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FancyBorder</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">WelcomeDialog</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n<span class="gatsby-highlight-code-line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Welcome<span class="token punctuation">"</span></span>\n</span><span class="gatsby-highlight-code-line">      <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Thank you for visiting our spacecraft!<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n</span>  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="https://codepen.io/gaearon/pen/kkEaOZ?editors=0010">Try it on CodePen.</a></p>\n<p>Composition works equally well for components defined as classes:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">Dialog</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FancyBorder</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Dialog-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>title<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Dialog-message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>message<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">      <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n</span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FancyBorder</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">SignUpDialog</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>handleSignUp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleSignUp<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>login<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dialog</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Mars Exploration Program<span class="token punctuation">"</span></span>\n              <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>How should we refer to you?<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>login<span class="token punctuation">}</span></span>\n</span><span class="gatsby-highlight-code-line">               <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n</span><span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleSignUp<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">          Sign Me Up<span class="token operator">!</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n</span>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Dialog</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">handleChange</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>login<span class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">handleSignUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`Welcome aboard, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>login<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="https://codepen.io/gaearon/pen/gwZbYa?editors=0010">Try it on CodePen.</a></p>\n<h2 id="so-what-about-inheritance"><a href="#so-what-about-inheritance" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>So What About Inheritance?</h2>\n<p>At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.</p>\n<p>Props and composition give you all the flexibility you need to customize a component’s look and behavior in an explicit and safe way. Remember that components may accept arbitrary props, including primitive values, React elements, or functions.</p>\n<p>If you want to reuse non-UI functionality between components, we suggest extracting it into a separate JavaScript module. The components may import it and use that function, object, or a class, without extending it.</p>',frontmatter:{title:"Composition vs Inheritance",next:"thinking-in-react.html",prev:"lifting-state-up.html"},fields:{path:"docs/composition-vs-inheritance.md",slug:"docs/composition-vs-inheritance.html"}}},pathContext:{slug:"docs/composition-vs-inheritance.html"}}}});
//# sourceMappingURL=path---docs-composition-vs-inheritance-html-95febfc28eaf574ffb47.js.map