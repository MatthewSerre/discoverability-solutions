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
            <div className="text-center">
            <Container>
                <br />
                <div>
                Discoverability Solutions is an <a href="https://github.com/MatthewSerre/discoverability-solutions">open source</a>, single page application that allows you to search for providers of disability services in the Southern Maryland Region (other regions coming soon) obtained from <a href="https://dda.health.maryland.gov/Pages/Individuals.aspx">the list provided by the Developmental Disabilities Administration</a>.
                </div>
                <br />
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group controlId="formBasicSearch">
                        <Form.Control type="text" name="search" onChange={this.handleOnChange} placeholder='e.g. "arc", "rockville", "montgomery", "employment"' value={this.state.search} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>
                <p>{this.state.query}</p>
                <Providers providers={this.state.providers} />
        </Container>
        </div>
        )
    }
}

export default ProviderSearch