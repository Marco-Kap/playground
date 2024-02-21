export interface Props {
  content: string;
  bg: string | undefined;
}

export default function Badge(props: Props) {
  return <div style={{ backgroundColor: props.bg }}>{props.content}</div>;
}
