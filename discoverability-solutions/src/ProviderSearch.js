import React from 'react';
import Providers from './Providers'
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";


class ProviderSearch extends React.Component {

    state = {search: '', providers: [], query: ''}

    handleOnChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.setState({ query: ""})
        fetch(`/api/v1/providers?search=` + this.state.search )
        .then(res => res.json())
        .then(data => this.setState({providers: [ ...data ]}))
        .catch(errors => errors)
        if (this.state.search !== "") {
        this.setState({ query: "Search result(s) for " + this.state.search + ":"})
        }
        this.setState({search: ''})
    }

    render() {
        return (
            <Container>

                <br />
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="formBasicSearch">
                        <Form.Control type="text" name="search" onChange={this.handleOnChange} placeholder="" value={this.state.search} />
                        <Form.Text className="text-muted">
                            Search by provider name, regional office, counties served, and/or services offered.  A search performed with terms from multiple categories (e.g. "employment montgomery") will return only results that match all terms.  A search performed with no terms will return all entries in the database.
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
                <br />
                <p>{this.state.query}</p>
                <Providers providers={this.state.providers} ref={el => (this.componentRef = el)}/>
            </Container>
        )
    }
}

export default ProviderSearch