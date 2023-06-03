import React from 'react'
import { ProductState } from '../context/Context'
import SingleProducts from './SingleProducts'
import Filters from './Filters'
import * as styles from './styles.css'

const Home = () => {
  const { state } = ProductState()
  const { products, byStock } = state


  const transformProducts = () => {
    let sorted = products
    if (byStock==="lowToHigh") {
      sorted = sorted.sort((a, b) => a.qty - b.qty)
    }
    if (byStock === "highToLow") {
      sorted = sorted.sort((a, b) => b.qty - a.qty)
    }
    return sorted
  }
  return (
    <div className="home" style={styles}>
      <Filters />
      <div className="productContainer">
        {transformProducts().length > 0 && transformProducts().map((product) => {
          return <SingleProducts key={product.id} product={product} />
        })}
      </div>
    </div>
  )
}

export default Home
