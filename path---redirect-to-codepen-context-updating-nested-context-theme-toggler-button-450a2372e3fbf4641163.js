webpackJsonp([98056518797775],{986:function(e,t){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"import {ThemeContext} from \'./theme-context\';\\n\\nfunction ThemeTogglerButton() {\\n  // highlight-range{1-2,5}\\n  // The Theme Toggler Button receives not only the theme\\n  // but also a toggleTheme function from the context\\n  return (\\n    <ThemeContext.Consumer>\\n      {({theme, toggleTheme}) => (\\n        <button\\n          onClick={toggleTheme}\\n          style={{backgroundColor: theme.background}}>\\n          Toggle Theme\\n        </button>\\n      )}\\n    </ThemeContext.Consumer>\\n  );\\n}\\n\\nexport default ThemeTogglerButton;\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-context-updating-nested-context-theme-toggler-button-450a2372e3fbf4641163.js.map