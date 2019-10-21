export type Predicate = (it: any) => boolean;

export interface PpsProps {
  items: any[];
  components: Components;
}

export interface Components {
  Card: (props: CardProps) => JSX.Element;
  Filters: (props: FiltersProps) => JSX.Element;
}

export interface CardProps {
  item: any;
}

export interface FiltersProps {
  addFilter: (p: Predicate) => void;
  rmFilter: (p: Predicate) => void;
}
