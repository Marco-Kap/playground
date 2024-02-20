import { Badge as BadgeComponent } from "react-bootstrap";

export interface Props {
  content: string;
}

export default function Badge(props: Props) {
  return <BadgeComponent>{props.content}</BadgeComponent>;
}
