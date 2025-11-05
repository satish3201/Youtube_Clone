import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'


const SlideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack direction="row" sx={{overflow:"auto", height:{sx:"auto",md:'95%'}, flexDirection:{md:'column'},}}>
      {categories.map((Category => (
        <button className='category-btn' key={Category.name}  onClick={() => setSelectedCategory(Category.name)} style={{ background: Category.name ===selectedCategory && '#FC1503',color: '#fff'}}
        >
            <span style={{color:Category.name === selectedCategory ? 'white': 'red', marginRight:'15px'}}>{Category.icon}</span>
            <span style={{opacity: Category.name ===selectedCategory ? '1': '0.8'}}>{Category.name}</span>
        </button>
      )))}
    </Stack>
  )
}

export default SlideBar
