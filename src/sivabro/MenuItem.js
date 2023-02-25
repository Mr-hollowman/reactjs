import { Link } from 'react-router-dom'
export default function MenuItem() {

  const foods = ["women's clothing", "electronics", "jewelery", "men's clothing", "Favourite"];

  return (
    <div className="menu-item">
      <ul>
        {foods.map((items) => <li key={items}><Link to={`/${items}`}>{items}</Link></li>)}
      </ul>
    </div>
  )
}
