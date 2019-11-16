import React, { Component } from 'react';
import PrimarySearchAppBar from '../pages/header';
import ElasticSearchNotesDispaly from '../pages/elasticSearchNotesDispaly';
import { withRouter } from 'react-router-dom';
class ElasticSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elasticSearchNotes: [],
        }
    }
    modi = (notes) => {
        this.setState({
            elasticSearchNotes: notes
        })
    }
        render() {
            console.log(this.state.elasticSearchNotes)

            return (

                <div>
                    <PrimarySearchAppBar headerToSearchGetNote={this.modi} />
                    <ElasticSearchNotesDispaly sendNotes={this.state.elasticSearchNotes} />
                </div>
            )
        }
    }

export default withRouter(ElasticSearch)