webpackJsonp([0x942eba8c7c54],{909:function(n,e){n.exports={data:{markdownRemark:{html:'<h3 id="what-does-setstate-do"><a href="#what-does-setstate-do" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What does <code>setState</code> do?</h3>\n<p><code>setState()</code> schedules an update to a component’s <code>state</code> object. When state changes, the component responds by re-rendering.</p>\n<h3 id="what-is-the-difference-between-state-and-props"><a href="#what-is-the-difference-between-state-and-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is the difference between <code>state</code> and <code>props</code>?</h3>\n<p><a href="/docs/components-and-props.html"><code>props</code></a> (short for “properties”) and <a href="/docs/state-and-lifecycle.html"><code>state</code></a> are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: <code>props</code> get passed <em>to</em> the component (similar to function parameters) whereas <code>state</code> is managed <em>within</em> the component (similar to variables declared within a function).</p>\n<p>Here are some good resources for further reading on when to use <code>props</code> vs <code>state</code>:</p>\n<ul>\n<li><a href="https://github.com/uberVU/react-guide/blob/master/props-vs-state.md">Props vs State</a></li>\n<li><a href="http://lucybain.com/blog/2016/react-state-vs-pros/">ReactJS: Props vs. State</a></li>\n</ul>\n<h3 id="why-is-setstate-giving-me-the-wrong-value"><a href="#why-is-setstate-giving-me-the-wrong-value" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why is <code>setState</code> giving me the wrong value?</h3>\n<p>In React, both <code>this.props</code> and <code>this.state</code> represent the <em>rendered</em> values, i.e. what’s currently on the screen.</p>\n<p>Calls to <code>setState</code> are asynchronous - don’t rely on <code>this.state</code> to reflect the new value immediately after calling <code>setState</code>. Pass an updater function instead of an object if you need compute values based on the current state (see below for details).</p>\n<p>Example of code that will <em>not</em> behave as expected:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Note: this will *not* work as intended.</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">handleSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Let\'s say `this.state.count` starts at 0.</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// When React re-renders the component, `this.state.count` will be 1, but you expected 3.</span>\n\n  <span class="token comment">// This is because `incrementCount()` function above reads from `this.state.count`,</span>\n  <span class="token comment">// but React doesn\'t update `this.state.count` until the component is re-rendered.</span>\n  <span class="token comment">// So `incrementCount()` ends up reading `this.state.count` as 0 every time, and sets it to 1.</span>\n\n  <span class="token comment">// The fix is described below!</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>See below for how to fix this problem.</p>\n<h3 id="how-do-i-update-state-with-values-that-depend-on-the-current-state"><a href="#how-do-i-update-state-with-values-that-depend-on-the-current-state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do I update state with values that depend on the current state?</h3>\n<p>Pass a function instead of an object to <code>setState</code> to ensure the call always uses the most updated version of state (see below). </p>\n<h3 id="what-is-the-difference-between-passing-an-object-or-a-function-in-setstate"><a href="#what-is-the-difference-between-passing-an-object-or-a-function-in-setstate" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What is the difference between passing an object or a function in <code>setState</code>?</h3>\n<p>Passing an update function allows you to access the current state value inside the updater. Since <code>setState</code> calls are batched, this lets you chain updates and ensure they build on top of each other instead of conflicting:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prevState<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// Important: read `prevState` instead of `this.state` when updating.</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>count<span class="token punctuation">:</span> prevState<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">handleSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Let\'s say `this.state.count` starts at 0.</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">incrementCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// If you read `this.state.count` now, it would still be 0.</span>\n  <span class="token comment">// But when React re-renders the component, it will be 3.</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><a href="/docs/react-component.html#setstate">Learn more about setState</a></p>\n<h3 id="when-is-setstate-asynchronous"><a href="#when-is-setstate-asynchronous" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>When is <code>setState</code> asynchronous?</h3>\n<p>Currently, <code>setState</code> is asynchronous inside event handlers.</p>\n<p>This ensures, for example, that if both <code>Parent</code> and <code>Child</code> call <code>setState</code> during a click event, <code>Child</code> isn’t re-rendered twice. Instead, React “flushes” the state updates at the end of the browser event. This results in significant performance improvements in larger apps.</p>\n<p>This is an implementation detail so avoid relying on it directly. In the future versions, React will batch updates by default in more cases.</p>\n<h3 id="why-doesnt-react-update-thisstate-synchronously"><a href="#why-doesnt-react-update-thisstate-synchronously" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why doesn’t React update <code>this.state</code> synchronously?</h3>\n<p>As explained in the previous section, React intentionally “waits” until all components call <code>setState()</code> in their event handlers before starting to re-render. This boosts performance by avoiding unnecessary re-renders.</p>\n<p>However, you might still be wondering why React doesn’t just update <code>this.state</code> immediately without re-rendering.</p>\n<p>There are two main reasons:</p>\n<ul>\n<li>This would break the consistency between <code>props</code> and <code>state</code>, causing issues that are very hard to debug.</li>\n<li>This would make some of the new features we’re working on impossible to implement.</li>\n</ul>\n<p>This <a href="https://github.com/facebook/react/issues/11527#issuecomment-360199710">GitHub comment</a> dives deep into the specific examples.</p>\n<h3 id="should-i-use-a-state-management-library-like-redux-or-mobx"><a href="#should-i-use-a-state-management-library-like-redux-or-mobx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Should I use a state management library like Redux or MobX?</h3>\n<p><a href="https://redux.js.org/faq/general#when-should-i-use-redux">Maybe.</a></p>\n<p>It’s a good idea to get to know React first, before adding in additional libraries. You can build quite complex applications using only React.</p>',frontmatter:{title:"Component State",next:null,prev:null},fields:{path:"docs/faq-state.md",slug:"docs/faq-state.html"}}},pathContext:{slug:"docs/faq-state.html"}}}});
//# sourceMappingURL=path---docs-faq-state-html-2dc939d1c3b24ad476c2.js.map