import { FC, useEffect, memo, useState, useCallback } from 'react';

export interface PostsProps {
  title: string;
  description: string;
}

interface TwitterProps {
  loading: boolean;
  posts: Array<PostsProps>;
}

const areEqual = (prevProps: any, nextProps: any) =>
  prevProps.loading === nextProps.loading;

const Twitter: FC<TwitterProps> = memo(props => {
  const { posts, loading } = props;
  const [tweet, setTweet] = useState('Tweet title');

  // componentDidMount
  useEffect(() => {
    console.log('componentDidMount', posts);
    console.log('componentDidMount:loading', loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate', loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // componentWillUnmoutn
  useEffect(
    () => () => {
      console.log('componentWillUnmount: fui removido');
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleReRender = useCallback(() => setTweet('Tweet atualizado'), []);

  console.log(tweet);

  return (
    <>
      <button type="button" onClick={handleReRender}>
        Re-render
      </button>
      <h1>teste</h1>
    </>
  );
}, areEqual);

export { Twitter };
