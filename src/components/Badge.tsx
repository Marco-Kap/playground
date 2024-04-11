export interface Props {
  content: string;
  bg: string | undefined;
}

export default function Badge(props: Props) {
  return (
    <div
      className="col-md-2"
      style={{
        backgroundColor: props.bg,

        // paddingRight: "0.6em",
        // paddingLeft: "0.6em",
        padding: "0.4em",
        borderRadius: "6%",
        margin: "0.8em",
        display: "flex",
        alignItems: "center",
      }}>
      <span>{props.content}</span>
    </div>
  );
}
