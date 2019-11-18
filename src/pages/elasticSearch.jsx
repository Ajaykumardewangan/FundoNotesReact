import React, { Component } from 'react';
import ElasticHeader from '../pages/headerelastic';
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
                    <ElasticHeader headerToSearchGetNote={this.modi} />
                    <ElasticSearchNotesDispaly sendNotes={this.state.elasticSearchNotes} />
                </div>
            )
        }
    }

export default withRouter(ElasticSearch)