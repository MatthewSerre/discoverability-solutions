import React from 'react';
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

const Contribute = () => {
    return (

        <Container>
            <br />
            <h5>Want to contribute to Discoverability Solutions? You can...</h5>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h5>Code</h5>
                    I am a relatively new web developer and would welcome contributions from other devs.  Contact me at the link above in the nav bar or fork <a href="https://github.com/MatthewSerre/discoverability-solutions">my GitHub repository</a> and make a pull request. 
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Donate</h5>
                    DS runs on a free dyno provided by <a href="https://www.heroku.com">Heroku</a>.  If you find the app useful, then consider donating even a small sum to ensure up-time with a paid dyno (which would allow me to add a SSL certificate to the domain) and support maintenance of and the addition of new features to the app.  <a href="https://www.paypal.com/paypalme/my/profile">Donate via PayPal.</a> 
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Enter Data</h5>
                    Because information on the DDA website is difficult to scrape automatically using a utility like <a href="https://rubygems.org/gems/nokogiri/versions/1.6.8">Nokogiri</a>, I transfer the information manually from each page to a spreadsheet and then upload the spreadsheet on the back-end to seed the database.  If you would like to help by entering new information into the spreadsheet, particularly information for providers in the other Maryland regions, then contact me at the link above in the nav bar for access to the spreadsheet.
                </ListGroup.Item>
                <ListGroup.Item>
                    <h5>Report Errors/Issues</h5>
                    Provider information is sourced from <a href="https://dda.health.maryland.gov/Pages/Individuals.aspx">the Developmental Disabilities Administration</a> and is as accurate as possible, but mistakes happen and information can become outdated.  If you see any content/grammatical errors or encounter any issues with the app, then contact me at the link above in the nav bar and/or <a href="https://github.com/MatthewSerre/discoverability-solutions/issues">file an issue on the GitHub repository</a>.
                </ListGroup.Item>
            </ListGroup>
        </Container>

    )
}

export default Contribute