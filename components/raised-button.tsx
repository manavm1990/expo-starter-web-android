import { Button } from '@rneui/themed';

interface RaisedButtonProps {
  title: string;
}

export default function RaisedButton({
  title,
}: RaisedButtonProps): JSX.Element {
  return <Button raised title={title} />;
}
