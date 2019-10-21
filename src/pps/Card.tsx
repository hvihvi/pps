import { useComponents } from "./Pps";

interface CardProps {
  item: any;
}
const Card = (props: CardProps) => {
  const components = useComponents();
  return components.Card(props);
};
export default Card;
