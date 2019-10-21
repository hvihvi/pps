import * as React from "react";
import Card from "./Card";
import { Predicate } from "./types";
import { connect } from "react-redux";
import { State } from "./redux";

interface CardListProps {
  items: any[];
  filters: Predicate[];
}
const CardList = ({ items, filters }: CardListProps) => {
  return (
    <>
      {items.filter(mergeFilters(filters)).map((item, index) => (
        <Card item={item} key={"Card" + index} />
      ))}
    </>
  );
};

const mergeFilters = (filters: Predicate[]) =>
  filters.reduce(
    (accumulator, currentValue) => accumulator && currentValue,
    () => true
  );

const mapStateToProps = (state: State) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(CardList);
