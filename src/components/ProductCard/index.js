/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {title, image_url, Age, id} = productData

  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="link-item">
        <img src={image_url} alt="product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">Age {Age}</p>
      </Link>
    </li>
  )
}
export default ProductCard
