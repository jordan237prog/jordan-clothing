
import "./Directory.style.scss"
import React, { Component } from 'react'
import MenuItem from '../menuItem/MenuItem.component'

export class Directory extends Component {
    constructor(){
        super()

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                },
                {
                    title: 'Snakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id:3,
                },
                {
                    title: 'women',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id:4,
                },
                {
                    title: 'men',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id:5,
                }
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu" >
                {
                    this.state.sections.map( ({ id, title, imageUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory

