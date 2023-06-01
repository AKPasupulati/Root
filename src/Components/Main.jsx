import React from 'react'
import { Container } from '@mui/material'
import ProductCard from './ProductCard'
import './Main.css'

const productList = [
  {
    id: 1,
    name: 'Smashic brand logo shoe - PUMA',
    description: 'Puma Smashic Unisex Sneakers',
    price: 1000,
    image: 'https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/21767244/2023/1/31/ce9c89f5-ab94-4754-8f56-00a6747173e41675143770544PumaSmashicUnisexSneakers1.jpg'
  },
  {
    id: 2,
    name: 'Women yoke design kurta set - Biba',
    description: 'lorem ipsum',
    price: 2000,
    image: 'https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg'
  },
  {
    id: 3,
    name: 'Women yoke design kurta set - Biba',
    description: 'lorem ipsum',
    price: 2000,
    image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20980804/2022/12/6/117363eb-6fdc-4c5c-8305-bb5190fcf61e1670309627177-boAt-Storm-call-169-inch-HD-display-with-bluetooth-calling-S-1.jpg'
  },
  {
    id: 4,
    name: 'Women yoke design kurta set - Biba',
    description: 'lorem ipsum',
    price: 2000,
    image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19473744/2022/9/13/5b4fc687-b93b-4141-aeb6-1bd82db75e671663054576612-Antheaa-Women-Dresses-631663054576038-1.jpg'
  },
  {
    id: 5,
    name: 'Women yoke design kurta set - Biba',
    description: 'lorem ipsum',
    price: 2000,
    image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg'
  },
]


function Main() {
  return (
    <div>
        <Container className='product-list' maxWidth="lg">
          {
            productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </Container>
    </div>
  )
}

export default Main
