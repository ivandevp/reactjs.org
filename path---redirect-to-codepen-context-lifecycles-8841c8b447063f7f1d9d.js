webpackJsonp([0x5c9a9f6b72bd],{975:function(e,n){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"class Button extends React.Component {\\n  componentDidMount() {\\n    // highlight-next-line\\n    // ThemeContext value is this.props.theme\\n  }\\n\\n  componentDidUpdate(prevProps, prevState) {\\n    // highlight-range{1-2}\\n    // Previous ThemeContext value is prevProps.theme\\n    // New ThemeContext value is this.props.theme\\n  }\\n\\n  render() {\\n    const {theme, children} = this.props;\\n    return (\\n      <button className={theme ? \'dark\' : \'light\'}>\\n        {children}\\n      </button>\\n    );\\n  }\\n}\\n\\n// highlight-range{3}\\nexport default props => (\\n  <ThemeContext.Consumer>\\n    {theme => <Button {...props} theme={theme} />}\\n  </ThemeContext.Consumer>\\n);\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-context-lifecycles-8841c8b447063f7f1d9d.js.map