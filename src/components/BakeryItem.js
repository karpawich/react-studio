import '../App.css';

const BakeryItem = (props) => {
  const { item, onButtonClick } = props;

  function onClick() {
    onButtonClick(item)
  }

  return (
    <div className='BakeryItem'>
      <img src={item.image} alt={item.description}></img>
      <p><b>Name: </b>{item.name}</p>
      <p><b>Price: </b>{item.price}</p>
      <button onClick={onClick}>Add to cart</button>
    </div>
  )
}

export default BakeryItem;
