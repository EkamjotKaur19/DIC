import React, {useState} from 'react';
import { sliderItems } from '../data';
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClickLeft = ( ) =>{
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    }

    const handleClickRight = ( ) =>{
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
    }

  return (
    <div className="slider">
        <i className="fa-solid fa-arrow-left arr arr-l" onClick={()=>handleClickLeft()}></i>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item =>(
                <div className="slide slide1">
                    <div className="imgCont">
                        <img className="slider-img"src={item.img} alt=""/>
                    </div>
                    <div className="infoCont">
                        <h1 className='title'>{item.title}</h1>
                        <p className="desc">{item.desc}</p>
                        <button className="slider-btn">SHOW NOW</button>
                    </div>
                </div>
            ))}
        </Wrapper>
        <i className="fa-solid fa-arrow-right arr arr-r" onClick={()=>handleClickRight()}></i>
    </div>
  )
}
