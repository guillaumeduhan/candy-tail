import { Box, Button, Sidebar, Spinner } from '../../components';

export default function Docs() {
  const list = [
    {
      title: 'Button',
      description:
        'Regular button with a text, loading, disabled state & spinner reference to load alone.',
      component: Button,
      props: {
        text: 'Click me',
        loading: false
      }
    },
    {
      title: 'Spinner',
      description: 'Regular spinner that loads independently.',
      component: Spinner,
      props: {
        text: '',
        loading: false
      }
    }
  ];

  
  return (
    <div className="flex Docs">
      <Sidebar />
      <div className="container w-full p-6 mx-auto Docs">
        {list.map((x, i) => {
          const { component } = x;
          let Component = component;
          return (
            <Box content={x} key={i}>
              <Component text={x.props.text} loading={x.props.loading} />
            </Box>
          );
        })}
      </div>
    </div>
  );
}
