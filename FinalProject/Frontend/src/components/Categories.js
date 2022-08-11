import React from 'react'
import CategoryItem from './CategoryItem';
import { categories } from '../data';
export default function Categories() {
  return (
    <div className="cat-cont">
        {categories.map(item => (
            <CategoryItem item={item} key={item.id}/>
        ))}
    </div>
  )
}
