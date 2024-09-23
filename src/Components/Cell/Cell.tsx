
const Cell = ({ item, index, handleClick }) => (
  <div
    className={`cell ${item.clicked ? 'opened' : ''}`}
    onClick={() => handleClick(index)}
  >
    {item.clicked && item.hasItem ? 'O' : ''}
  </div>
);
export default Cell;