import React from 'react'
import mems from '../team'
import Member from './Member'

export default function Team() {
  return (
    <div className="team-cont">
        <div className="container">
            <div className="row">
                {mems.map(item => {
                    return <div className="col-md-4">
                        <Member item={item} key={item.id}/>
                    </div>
                    
                })}
            </div>
        </div>
        
    </div>
  )
}
