import React from 'react';
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

const Providers = (props) => {

    const results = props.providers
    if (results.length > 0) {
        return (
            <React.Fragment>
                <Container>
                    <strong>
                    {props.providers.length} {
                        (props.providers.length === 1)
                        ? "result"
                        : "results"
                        } found.
                    </strong>
                </Container>
                <br />
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Provider Name</th>
                        <th>Regional Office</th>
                        <th>Counties Served</th>
                        <th>Services Offered</th>
                        <th>Contact Information</th>
                        <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.providers && props.providers.map(provider =>
                            <tr key={provider.id}>
                            <td>{props.providers.indexOf(provider) + 1}</td>
                            <td>{provider.name}</td>
                            <td>Southern Maryland</td>
                            <td>{provider.countiesServed}</td>
                            <td>{provider.servicesOffered}</td>
                            <td>{provider.contactInformation}</td>
                            <td><a href={provider.website} alt="Link" target="_blank" rel="noopener noreferrer">Link</a></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <br />
            </React.Fragment>
    )} else {
        return null
    }
}

export default Providers