webpackJsonp([42170176633613],{896:function(e,a){e.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p>The following section applies only to the development mode of React. Error handling in production mode is done with regular try/catch statements.</p>\n</blockquote>\n<p>In <a href="/docs/optimizing-performance.html">development mode</a>, React uses a global <code>error</code> event handler to preserve the “pause on exceptions” behavior of browser DevTools. It also logs errors to the developer console.</p>\n<p>If an error is thrown from a <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy">different origin</a> the browser will mask its details and React will not be able to log the original error message. This is a security precaution taken by browsers to avoid leaking sensitive information.</p>\n<p>You can simplify the development/debugging process by ensuring that errors are thrown with a same-origin policy. Below are some common causes of cross-origin errors and ways to address them.</p>\n<h3 id="cdn"><a href="#cdn" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CDN</h3>\n<p>When loading React (or other libraries that might throw errors) from a CDN, add the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes"><code>crossorigin</code></a> attribute to your <code>&#x3C;script></code> tags:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Also ensure the CDN responds with the <code>Access-Control-Allow-Origin: *</code> HTTP header:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/cdn-cors-header-89baed0a6540f29e954065ce04661048-dd807.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 350px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 66.57142857142857%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB1ElEQVQoz5VSbY+aQBD2//+QJrW9NJc2/WoVFUVA4BBwFw4ORGB5E3yvRu+R8/qpbdon2WRmd56ZZ2a2tW6QJEkURXEcb7dbxlhVVXVdHw6HLMtWDXCPMLhlWV4ul2uD1mazQajruoQQ27Zhx0n80gBPnuc5juP7fhiGcIMggHs8Hn82aOV5TimdNYBx+R+0cJADuYt3QP9utyvL1aqq1uvNbr+v6zXcfWOsbg3hesPSrPWmXlGU6XSqqiqU67oOeXlRhlFMbacoyizPXe8lXEYJS1maZlmO+SzC5Z08Go2GwyHP88jS6XQmkwk34BhLXc+//hl3crfb5TjONE2k6PV6i3jxPf02EkTU/CcyqoEJ5f1+H3xoAdO0yI/ewPcDYSIZ1lwQZVFWoB+98OPJnTwejyVJQrdYmCzLmqZhchah6M+aUz9YUPs5ThLdMD0/INQ2zDnGcZv2+Xx++yrYJOaM/4Btwz6dTng6vePc4JeNyNueDcOAZlEUUdyyLL4B9OPDXf+Ku2xT+TKTPulS2zMfjelnVfg4Vx/EwYeZ1Cbqw5PYpvrXnJHfk6klGBoXuIpnC+YTZ+p9Fs2INY4XepGSZ3vqOXLK/NuqE7aM4jmhmj57BW5DwxtkN/4BAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Access-Control-Allow-Origin: *"\n        title=""\n        src="/static/cdn-cors-header-89baed0a6540f29e954065ce04661048-dd807.png"\n        srcset="/static/cdn-cors-header-89baed0a6540f29e954065ce04661048-caff8.png 210w,\n/static/cdn-cors-header-89baed0a6540f29e954065ce04661048-dd807.png 350w"\n        sizes="(max-width: 350px) 100vw, 350px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3 id="webpack"><a href="#webpack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Webpack</h3>\n<h4 id="source-maps"><a href="#source-maps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Source maps</h4>\n<p>Some JavaScript bundlers may wrap the application code with <code>eval</code> statements in development. (For example Webpack will do this if <a href="https://webpack.js.org/configuration/devtool/"><code>devtool</code></a> is set to any value containing the word “eval”.) This may cause errors to be treated as cross-origin.</p>\n<p>If you use Webpack, we recommend using the <code>cheap-module-source-map</code> setting in development to avoid this problem.</p>\n<h4 id="code-splitting"><a href="#code-splitting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Code splitting</h4>\n<p>If your application is split into multiple bundles, these bundles may be loaded using JSONP. This may cause errors thrown in the code of these bundles to be treated as cross-origin.</p>\n<p>To resolve this, use the <a href="https://webpack.js.org/configuration/output/#output-crossoriginloading"><code>crossOriginLoading</code></a> setting in development to add the <code>crossorigin</code> attribute to the <code>&#x3C;script></code> tags generated for the JSONP requests.</p>',frontmatter:{title:"Cross-origin Errors",next:null,prev:null},fields:{path:"docs/cross-origin-errors.md",slug:"docs/cross-origin-errors.html"}}},pathContext:{slug:"docs/cross-origin-errors.html"}}}});
//# sourceMappingURL=path---docs-cross-origin-errors-html-0e8df7ec99bd3cce5da0.js.map