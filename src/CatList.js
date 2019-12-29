import React, {Component} from 'react'

class CatList extends Component {
    
    listCats() {
        return this.props.catPics.map(pic => <img src={pic.url} alt="kitty"/>)
    }

    render() {
        return (
            <div>
                {this.listCats()}
            </div>
        )
    }
}

export default CatList