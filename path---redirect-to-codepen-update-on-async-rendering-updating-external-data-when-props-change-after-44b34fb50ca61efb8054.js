webpackJsonp([85677712440992],{1020:function(n,e){n.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"// After\\nclass ExampleComponent extends React.Component {\\n  state = {\\n    externalData: null,\\n  };\\n\\n  // highlight-range{1-13}\\n  static getDerivedStateFromProps(nextProps, prevState) {\\n    // Store prevId in state so we can compare when props change.\\n    // Clear out previously-loaded data (so we don\'t render stale stuff).\\n    if (nextProps.id !== prevState.prevId) {\\n      return {\\n        externalData: null,\\n        prevId: nextProps.id,\\n      };\\n    }\\n\\n    // No state update necessary\\n    return null;\\n  }\\n\\n  componentDidMount() {\\n    this._loadAsyncData(this.props.id);\\n  }\\n\\n  // highlight-range{1-5}\\n  componentDidUpdate(prevProps, prevState) {\\n    if (this.state.externalData === null) {\\n      this._loadAsyncData(this.props.id);\\n    }\\n  }\\n\\n  componentWillUnmount() {\\n    if (this._asyncRequest) {\\n      this._asyncRequest.cancel();\\n    }\\n  }\\n\\n  render() {\\n    if (this.state.externalData === null) {\\n      // Render loading state ...\\n    } else {\\n      // Render real UI ...\\n    }\\n  }\\n\\n  _loadAsyncData(id) {\\n    this._asyncRequest = asyncLoadData(id).then(\\n      externalData => {\\n        this._asyncRequest = null;\\n        this.setState({externalData});\\n      }\\n    );\\n  }\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-update-on-async-rendering-updating-external-data-when-props-change-after-44b34fb50ca61efb8054.js.map