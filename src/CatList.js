// write your CatList component here
import React from 'react'

class CatList extends React.Component{ 

    renderCats =()=>{ return this.props.catPics.map((cat,index) =><img key={index} src={cat.url} alt='cat'/>)}

    render(){
        return <div>
            {this.renderCats()}
        </div>
    }
}

export default CatList
