import { Button } from '@rneui/themed';
import { Text } from 'react-native';
import RaisedButton from '../components/raised-button';

export default function Home(): JSX.Element {
  return (
    <>
      <Button title="My Button" />
      <Text>Home page</Text>
      <RaisedButton title="My Raised Button" />
    </>
  );
}
