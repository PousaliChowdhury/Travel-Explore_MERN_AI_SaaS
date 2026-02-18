import './Source.css';

const Buttons = ({ filterItem, menuItems }) => {
  return (
    <div className="category-buttons">
      {menuItems.map((category, index) => (
        <button
          key={index}
          className="btn category-btn"
          onClick={() => filterItem(category)}
        > 
          {category}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
