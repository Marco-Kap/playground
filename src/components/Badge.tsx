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
        paddingRight: "0.6em",
        paddingLeft: "0.6em",
        borderRadius: "6%",
        margin: "0.8em",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span>{props.content}</span>
    </div>
  );
}
