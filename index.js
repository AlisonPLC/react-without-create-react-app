const e = React.createElement;

class LikeButton extends React.Component {
  render() {
    return e("h1", null, "Hello God Dammit");
  }
}

const domContainer = document.querySelector("#the_react_container");
ReactDOM.render(e(LikeButton), domContainer);
