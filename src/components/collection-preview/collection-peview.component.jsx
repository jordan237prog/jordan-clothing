import React from 'react'
import './collection-peview.component.scss'
import CollectionItem from '../colletion-item/CollectionItem.component'

const CollectionPeview = ({title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, index)=> index < 6)
                        .map( ({id, ...item}) => (
                        <CollectionItem key={id} {...item}/> 
                    ))
                }
            </div>
            
        </div>
    )
}

export default CollectionPeview
