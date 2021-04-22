//import React from 'react';
import React, { useState } from 'react'
import history from './history.js'
import mode from './mode'
import resense from './reasons'
import { Button } from 'react-bootstrap';

export default function About(props) {
    const [currentPage, setCurrentPage] = useState(0)
    const numberOfPages = React.Children.count(props.children)
    const [arrImages, setArrImages] = useState([history, resense, mode])

    function componentPage(currentPage) {
        const allChildrenProps = { arrImages, setArrImages, currentPage }
        const child = React.Children.toArray(props.children)[currentPage]
        return React.cloneElement(child, allChildrenProps)
    }
    return (
        <div className="Container">
            <Button variant="outline-success" size="sm"
                disabled={currentPage === 0}
                onClick={(e) => setCurrentPage(val => val - 1)} >
                &lt; Previous page
                  </Button>
            <Button variant="outline-success" size="sm"
                disabled={currentPage === numberOfPages - 1}
                onClick={(e) => setCurrentPage(val => val + 1)}>N
                ext page &gt;
              </Button>
            <div>{componentPage(currentPage)}</div>
        </div>
    )
}