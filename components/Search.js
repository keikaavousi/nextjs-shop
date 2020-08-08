import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FromControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Search = () => {
    return (
        <Row>
            <Col sm={12} className="px-0">
            <div className="wrapper">
                <div className="search">
                    <InputGroup>
                        <FromControl placeholder="Keyword..."/>
                        <InputGroup.Append>
                            <Button variant="dark">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <style jsx>{`
                    .wrapper{
                        height:50vh;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        background-color:#dedede;
                        margin-top:60px;
                    }
                    .search{
                        width:40%;
                    }
                `} </style>
        </div>
        </Col>
        </Row>
    )
}

export default Search;
