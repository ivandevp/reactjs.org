webpackJsonp([0x7af3b34e6f3a],{995:function(e,t){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"class ScrollingList extends React.Component {\\n  listRef = React.createRef();\\n\\n  getSnapshotBeforeUpdate(prevProps, prevState) {\\n    // Are we adding new items to the list?\\n    // Capture the current height of the list so we can adjust scroll later.\\n    if (prevProps.list.length < this.props.list.length) {\\n      return this.listRef.current.scrollHeight;\\n    }\\n    return null;\\n  }\\n\\n  componentDidUpdate(prevProps, prevState, snapshot) {\\n    // If we have a snapshot value, we\'ve just added new items.\\n    // Adjust scroll so these new items don\'t push the old ones out of view.\\n    if (snapshot !== null) {\\n      this.listRef.current.scrollTop +=\\n        this.listRef.current.scrollHeight - snapshot;\\n    }\\n  }\\n\\n  render() {\\n    return (\\n      <div ref={this.listRef}>{/* ...contents... */}</div>\\n    );\\n  }\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-react-component-reference-get-snapshot-before-update-584004869caf2c1c2965.js.map