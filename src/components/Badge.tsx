export interface Props {
  content: string;
  bg: string | undefined;
}

export default function Badge(props: Props) {
  return (
    <div
      style={{
        backgroundColor: props.bg,
        width: "min-content",
        padding: "0.4em",
        borderRadius: "6%",
      }}>
      {props.content}
    </div>
  );
}
