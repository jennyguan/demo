import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {countries} from './Countries';
import {displayArticles} from './Articles';
import './News.css';

// Hide api key reference: https://betterprogramming.pub/how-to-hide-your-api-keys-c2b952bc07e6
const apiKey = process.env.REACT_APP_API_KEY;

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //country: '',
            articles: undefined};
    }

    onSelect(value) {
        //this.setState({country: value})

        // NewsAPI documentation: https://newsapi.org/docs/endpoints/top-headlines
        fetch('https://newsapi.org/v2/top-headlines?country=' + value.value + '&apiKey=' + apiKey)
            .then(response => response.json())
            .then(data => this.setState({ articles: data.articles }))
            // TODO: catch error & handle gracefully for user
    }

    render() {
        let Articles = null;
        if (this.state.articles !== undefined) {
            Articles = displayArticles(this.state.articles);
        }

        // TODO: 'back to top' button while scrolling
        // TODO: start back at top after change selection
        return (
            <div>
                <h3>Get your top headlines from around the world:</h3>
                <Dropdown options={countries}
                          onChange={this.onSelect.bind(this)}
                          placeholder="Select a country"/>
                {Articles}
            </div>
        )
    }
}

export default News;