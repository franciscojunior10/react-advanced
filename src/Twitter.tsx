/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
import { Component } from 'react';
import PropTypes from 'prop-types';

interface TwitterProps {
  posts: Array<Object>;
  loading: boolean;
}

class Twitter extends Component<TwitterProps, { tweet: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { tweet: false };
  }

  static propTypes: {
    posts: PropTypes.Requireable<unknown[]>;
    loading: PropTypes.Requireable<boolean>;
  };

  componentDidMount() {
    const { posts, loading } = this.props;
    console.log('componentDidMount', posts);
    console.log('componentDidMount:loading', loading);
  }

  componentDidUpdate(prevProps: { loading: boolean }) {
    const { loading } = this.props;
    if (this.props.loading !== prevProps.loading) {
      console.log('componentDidUpdate:loading', loading);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: fui removido');
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    return this.state.tweet !== nextState.tweet;
  }

  tweet = () => {
    this.setState({
      tweet: true,
    });
  };

  render() {
    const { posts } = this.props;
    console.log('render', posts);

    return (
      <h1>
        teste
        <button type="button" onClick={this.tweet}>
          Re-render
        </button>
      </h1>
    );
  }
}

Twitter.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
};

export { Twitter };
