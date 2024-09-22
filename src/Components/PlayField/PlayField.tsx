import Cell from "../Cell/Cell.tsx";

const PlayField = ({items, handleClick}) => {
  return (
    <div className="playing-field">
      {items.map((item, index) => {
        <Cell key={index} item={item} index={index} handleClick={handleClick}/>;
      })}
    </div>
  );
};

export default PlayField;