const Cell = ({item, index, handleClick}) => {
  return (
    <>
      <div className={`cell ${item.clicked ? "opened" : ""}`} onClick={() => handleClick(index)}>
        {item.clicked && item.hasItem ? "0" : ""}
      </div>
    </>
  );
};

export default Cell;