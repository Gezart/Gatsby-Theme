import { Link } from 'gatsby';
import React from 'react'

const PlainText = ({column, columns}) => {
    const allColumns = column;

    return (
    <div className={`plain-text ${columns}`}>
        {
            allColumns.map((column, index) => 
                <div className="column" key={index}>
                    <h3>{column.title}</h3>
                    <p>{column.content}</p>
                        {
                            column.plainButton && column.plainButton.title ? 
                            <Link to={column.plainButton && column.plainButton.url}>
                                <button>{column.plainButton && column.plainButton.title}</button> </Link> : ''
                        }
                    
                </div>
            )
        }
    </div>
  )
}

export default PlainText

