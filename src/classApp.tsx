import { Component } from 'react';
import { Twitter } from './classTwitter';

class App extends Component<{}, { loading: boolean; actived: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { loading: false, actived: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true,
      });
    }, 3000);
  }

  onRemove = () => {
    this.setState({
      actived: false,
    });
  };

  render() {
    const posts = [
      {
        title: 'x1',
        description: 'x2',
      },
      {
        title: 'y1',
        description: 'y2',
      },
    ];

    return (
      <>
        <button type="button" onClick={this.onRemove}>
          Remover componente
        </button>
        {this.state.actived && (
          <Twitter posts={posts} loading={this.state.loading} />
        )}
      </>
    );
  }
}

export { App };
