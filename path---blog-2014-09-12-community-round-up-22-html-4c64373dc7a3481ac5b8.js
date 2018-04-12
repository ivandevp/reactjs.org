webpackJsonp([71556152376974],{782:function(a,t){a.exports={data:{markdownRemark:{html:'<p>This has been an exciting summer as four big companies: Yahoo, Mozilla, Airbnb and Reddit announced that they were using React!</p>\n<table><tr><td>\n<blockquote width="300" class="twitter-tweet" data-cards="hidden" lang="en"><p>Our friends at <a href="https://twitter.com/Yahoo">@yahoo</a> talk about migrating Yahoo! Mail from YUI to ReactJS at the next <a href="https://twitter.com/hashtag/ReactJS?src=hash">#ReactJS</a> meetup! <a href="http://t.co/Cu2AaE0sVE">http://t.co/Cu2AaE0sVE</a></p>&mdash; Facebook Open Source (@fbOpenSource) <a href="https://twitter.com/fbOpenSource/status/510258065900572672">September 12, 2014</a></blockquote>\n</td><td valign="top">\n<blockquote width="300" class="twitter-tweet" lang="en"><p>I guess <a href="https://twitter.com/reactjs">@reactjs</a> is getting into Firefox :-) Thanks <a href="https://twitter.com/n1k0">@n1k0</a> ! <a href="https://t.co/kipfUS0hu4">https://t.co/kipfUS0hu4</a></p>&mdash; David Bruant (@DavidBruant) <a href="https://twitter.com/DavidBruant/status/484956929933213696">July 4, 2014</a></blockquote>\n</td></tr><tr><td>\n<blockquote width="300" class="twitter-tweet" lang="en"><p>.<a href="https://twitter.com/AirbnbNerds">@AirbnbNerds</a> just launched our first user-facing React.js feature to production! We love it so far. <a href="https://t.co/KtyudemcIW">https://t.co/KtyudemcIW</a> /<a href="https://twitter.com/floydophone">@floydophone</a></p>&mdash; spikebrehm (@spikebrehm) <a href="https://twitter.com/spikebrehm/statuses/491645223643013121">July 22, 2014</a></blockquote>\n</td><td>\n<blockquote width="300" class="twitter-tweet" lang="en"><p>We shipped reddit&#39;s first production <a href="https://twitter.com/reactjs">@reactjs</a> code last week, our checkout process.&#10;&#10;<a href="https://t.co/KUInwsCmAF">https://t.co/KUInwsCmAF</a></p>&mdash; Brian Holt (@holtbt) <a href="https://twitter.com/holtbt/statuses/493852312604254208">July 28, 2014</a></blockquote>\n</td></tr></table>\n<h2 id="reacts-architecture"><a href="#reacts-architecture" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React’s Architecture</h2>\n<p><a href="http://blog.vjeux.com/">Vjeux</a>, from the React team, gave a talk at OSCON on the history of React and the various optimizations strategies that are implemented. You can also check out the <a href="https://speakerdeck.com/vjeux/oscon-react-architecture">annotated slides</a> or <a href="http://thenewstack.io/author/chrisdawson/">Chris Dawson</a>’s notes titled <a href="http://thenewstack.io/javascripts-history-and-how-it-led-to-reactjs/">JavaScript’s History and How it Led To React</a>.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 48.46153846153846%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="//www.youtube-nocookie.com/embed/eCf5CquV_Bw" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<h2 id="v8-optimizations"><a href="#v8-optimizations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>v8 optimizations</h2>\n<p>Jakob Kummerow landed <a href="http://www.chromium.org/developers/speed-hall-of-fame#TOC-2014-06-18">two optimizations to V8</a> specifically targeted at optimizing React. That’s really exciting to see browser vendors helping out on performance!</p>\n<h2 id="reusable-components-by-khan-academy"><a href="#reusable-components-by-khan-academy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reusable Components by Khan Academy</h2>\n<p><a href="https://www.khanacademy.org/">Khan Academy</a> released <a href="https://khan.github.io/react-components/">many high quality standalone components</a> they are using. This is a good opportunity to see what React code used in production look like.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> TeX <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react-components/js/tex.jsx\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nReact<span class="token punctuation">.</span><span class="token function">renderComponent</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TeX</span><span class="token punctuation">></span></span>\\nabla \\cdot E <span class="token operator">=</span> <span class="token number">4</span> \\pi \\rho<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TeX</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> domNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> translated <span class="token operator">=</span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>$_ first<span class="token operator">=</span><span class="token string">"Motoko"</span> last<span class="token operator">=</span><span class="token string">"Kusanagi"</span><span class="token operator">></span>\n    Hello<span class="token punctuation">,</span> <span class="token operator">%</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>s <span class="token operator">%</span><span class="token punctuation">(</span>last<span class="token punctuation">)</span>s<span class="token operator">!</span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>$_<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="react--browserify--gulp"><a href="#react--browserify--gulp" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React + Browserify + Gulp</h2>\n<p><a href="http://truongtx.me/">Trường</a> wrote a little guide to help your <a href="http://truongtx.me/2014/07/18/using-reactjs-with-browserify-and-gulp/">getting started using React, Browserify and Gulp</a>.</p>\n<figure><a href="http://truongtx.me/2014/07/18/using-reactjs-with-browserify-and-gulp/">\n  <a class="gatsby-resp-image-link" href="/static/react-browserify-gulp-7873a26312d1d592042c1dcd5e756bd4-f7541.jpg" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 400px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 31.25%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEE/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAHBCANf/8QAFxABAQEBAAAAAAAAAAAAAAAAARECEv/aAAgBAQABBQKnLJtr/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEx/9oACAEDAQE/AV1//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGRAAAQUAAAAAAAAAAAAAAAAAAAEQESEx/9oACAEBAAY/Asakg//EABcQAQEBAQAAAAAAAAAAAAAAABEBADH/2gAIAQEAAT8hoZ1qAldNwG//2gAMAwEAAgADAAAAEAvv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/EAnqb//EABcRAQADAAAAAAAAAAAAAAAAAAABETH/2gAIAQIBAT8QtGP/xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMUFh/9oACAEBAAE/EKc92a7BlewCCgUE/9k=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="react browserify gulp" title="" src="/static/react-browserify-gulp-7873a26312d1d592042c1dcd5e756bd4-f7541.jpg" srcset="/static/react-browserify-gulp-7873a26312d1d592042c1dcd5e756bd4-d1618.jpg 210w,\n/static/react-browserify-gulp-7873a26312d1d592042c1dcd5e756bd4-f7541.jpg 400w" sizes="(max-width: 400px) 100vw, 400px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n<h2 id="react-style"><a href="#react-style" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Style</h2>\n<p>After React put HTML inside of JavaScript, Sander Spies takes the same approach with CSS: <a href="https://github.com/SanderSpies/react-style">IntegratedCSS</a>. It seems weird at first but this is the direction where React is heading.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">var</span> Button <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  normalStyle<span class="token punctuation">:</span> <span class="token function">ReactStyle</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> vars<span class="token punctuation">.</span>orange <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  activeStyle<span class="token punctuation">:</span> <span class="token function">ReactStyle</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>active<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'yellow\'</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'10px\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">styles</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">normalStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">activeStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        Hello<span class="token punctuation">,</span> I\'m styled\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="virtual-dom-in-elm"><a href="#virtual-dom-in-elm" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Virtual DOM in Elm</h2>\n<p><a href="http://evan.czaplicki.us">Evan Czaplicki</a> explains how Elm implements the idea of a Virtual DOM and a diffing algorithm. This is great to see React ideas spread to other languages.</p>\n<blockquote>\n<p>Performance is a good hook, but the real benefit is that this approach leads to code that is easier to understand and maintain. In short, it becomes very simple to create reusable HTML widgets and abstract out common patterns. This is why people with larger code bases should be interested in virtual DOM approaches.</p>\n<p><a href="http://elm-lang.org/blog/Blazing-Fast-Html.elm">Read the full article</a></p>\n</blockquote>\n<h2 id="components-tutorial"><a href="#components-tutorial" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Components Tutorial</h2>\n<p>If you are getting started with React, <a href="http://www.joemaddalone.com/">Joe Maddalone</a> made a good tutorial on how to build your first component.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 30.76923076923077%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="//www.youtube-nocookie.com/embed/rFvZydtmsxM" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<h2 id="saving-time--staying-sane"><a href="#saving-time--staying-sane" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Saving time &#x26; staying sane?</h2>\n<p>When <a href="http://http://kentwilliam.com/">Kent William Innholt</a> who works at <a href="http://mpath.com/">M>Path</a> summed up his experience using React in an <a href="http://kentwilliam.com/articles/saving-time-staying-sane-pros-cons-of-react-js">article</a>.</p>\n<blockquote>\n<p>We’re building an ambitious new web app, where the UI complexity represents most of the app’s complexity overall. It includes a tremendous amount of UI widgets as well as a lot rules on what-to-show-when. This is exactly the sort of situation React.js was built to simplify.</p>\n<ul>\n<li><strong>Big win</strong>: Tighter coupling of markup and behavior</li>\n<li><strong>Jury’s still out</strong>: CSS lives outside React.js</li>\n<li><strong>Big win</strong>: Cascading updates and functional thinking</li>\n<li><strong>Jury’s still out</strong>: Verbose propagation</li>\n</ul>\n<p><a href="http://kentwilliam.com/articles/saving-time-staying-sane-pros-cons-of-react-js">Read the article…</a></p>\n</blockquote>\n<h2 id="weather"><a href="#weather" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Weather</h2>\n<p>To finish this round-up, Andrew Gleave made a page that displays the <a href="https://github.com/andrewgleave/react-weather">Weather</a>. It’s great to see that React is also used for small prototypes.</p>\n<figure><a href="https://github.com/andrewgleave/react-weather">\n  <a class="gatsby-resp-image-link" href="/static/weather-8f130f2a80f0e7d4b07d59554f957ec6-d2158.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 133px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 112.78195488721805%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAABYlAAAWJQFJUiTwAAACsUlEQVQ4y5VUS08TURTuX2Eh0vTdzoCIIglqUFBgoQlBWqKYQECN0fhegI0ufCDQebTTFgi1NSK04kIIIjEgYkLcaufeebVgadpqNMa9pw9RSqWSfJnc5JzvfOd8585V6Y7YDNa+HcNm1zWcVemttwlOJFxCHsxOwcRmzyLp2pzgxIQnYuwaUunb+ixObGGRhcVZpGMs3sMJ+zwi6cRGGmspRPyOpsHwFk42dA6Ccl+uWAblLqyheI2DbwjI/ctJC4MPjkpnptb0NIJQLo1FhFsxdm0mg46eQa0T0eZApGyIf7CcPB5QTgVX2ZUvpYP8hkBhMtRWO3j7QuLSbOzCdMy+mKBXUveXkmqK3+8VDnhFM7utsplFJY/C9X7llfjj4kysPRQNfvrW8eIzlICOdFSm+a3kNJNBMOH1ufVb8/E7CwmtA5X0hy/Prt9dTLY8i9aOSqBMFlQmXdhAo6N++cZ8vM4nhz5+B7Wbr+NvIz+todVKt6Cj+JxnBduGnVVwAukSwNvz07F7S6neN4kT45HTU2vch69GJi3wT3LGM2H3QPjhu9SVuTisevB9CroA2UNjchG3NzyD8aqHRRODz72MtT+PGhkEKE7OwsQgE5urBXOaN25eUTJ0XskJwKnkcPMTud4nVXuFvW7BUpQMGTBhy7hinVRaJ5X6x1LTU9kaUup8kpnJ7GkbcoULl1EIyNdmoldnYEP4mF9qDMg1w2Juydsbpmdw3ZjU6JegRJVbqPJgW1CB5k1FlbN88FZLo1IH2uVABgarKfgi8j/dhryaEaFjQukJKrUjcG3wn/+xKBlsq/IIDT7pZECu9vzlcz65rZdwwkPB58FM81oqrHaETXR+iGDCBCcZOwdUepudHF4lvdGtKM+gQMgTIUfXjd20SlPbom7s3jGaejSH234BEEfhkevmJQAAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="weather" title="" src="/static/weather-8f130f2a80f0e7d4b07d59554f957ec6-d2158.png" srcset="/static/weather-8f130f2a80f0e7d4b07d59554f957ec6-d2158.png 133w" sizes="(max-width: 133px) 100vw, 133px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>',excerpt:"This has been an exciting summer as four big companies: Yahoo, Mozilla, Airbnb and Reddit announced that they were using React! React’s Architecture Vjeux , from the React team, gave a talk at OSCON on the history of React and the various optimizations strategies that are implemented. You can also check out the  annotated slides  or  Chris Dawson ’s notes titled  JavaScript’s History and How it Led To React . v8 optimizations Jakob Kummerow landed  two optimizations to V8  specifically targeted…",frontmatter:{title:"Community Round-up #22",next:null,prev:null,author:[{frontmatter:{name:"Lou Husson",url:"https://twitter.com/loukan42"}}]},fields:{date:"September 12, 2014",path:"blog/2014-09-12-community-round-up-22.md",slug:"/blog/2014/09/12/community-round-up-22.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2014/09/12/community-round-up-22.html"}}}});
//# sourceMappingURL=path---blog-2014-09-12-community-round-up-22-html-4c64373dc7a3481ac5b8.js.map