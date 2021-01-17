import React, { Component } from 'react';
import { updatePokedex } from '../../action/pokedexAction';
import { connect } from 'react-redux';
import Abilities from '../Abilities';
import Happiness from '../Happiness';
import './index.scss';

class Modal extends React.Component {
    state = {
        resultSearch: [],
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            dataCard: nextProps.cards, // set state select card
            resultSearch: nextProps.data // set state all data
        });
    }

    addCard = (val) => { // add select card
        if (this.state.dataCard && this.state.dataCard !== undefined) {
            var addCard = this.state.dataCard
            addCard.push(val)
            this.props.putPokedex(addCard)
        }
        else {
            var addCard = []
            addCard.push(val)
            this.props.putPokedex(addCard) // update redux from select card
        }
    }

    handleChange = (e) => {
        this.setState({
            resultSearch: this.props.data,
        });
    };

    search = (e) => {
        let matches = this.props.data.filter(v => (v.name.toLowerCase().includes(e.target.value.toLowerCase())) || (v.type.toLowerCase().includes(e.target.value.toLowerCase())));
        this.setState({ resultSearch: matches }); // set list card
    };

    listCard = () => {
        if (this.state.resultSearch && this.state.resultSearch.length !== 0) {
            return (
                this.state.resultSearch.map((val, index) =>
                    <div className="modal-card-bg" key={index}>
                        <div className="modal-card-scale">
                            <div className="modal-card-box">
                                <img className="modal-img" src={val.imageUrl} alt="image card" />
                            </div>
                            <div>
                                <h1 className="modal-add" onClick={() => this.addCard(val)}>Add</h1>
                                <p className="modal-name">{val.name}</p>
                                <span className="modal-abilitie" > HP <Abilities hp={val.hp} /> </span>
                                <span className="modal-abilitie" > STR <Abilities str={val.attacks} /> </span>
                                <span className="modal-abilitie" > WEAK <Abilities weak={val.weaknesses} /> </span>
                                <Happiness hp={val.hp} str={val.attacks} weak={val.weaknesses} />
                            </div>
                        </div>
                    </div>
                )
            )
        }
    }

    render() {
        const show = this.props.show;
        const background = show ? 'modal-background modal-background-active' : 'modal-background'
        const container = show ? 'modal-container modal-container-active' : 'modal-container'
        return (
            <div className="modal-container-head" >
                <div className={container}>
                    <div className="modal-container-search">
                        <label className="modal-search-label">
                            <input
                                type="text"
                                onClick={this.handleChange}
                                onChange={this.search}
                                placeholder="Find pokemon"
                                className="modal-search-box"
                            />
                            <img className="modal-search-input" src={require('../../images/search.png')} alt="icon search" />
                        </label>
                    </div>
                    <div className="modal-nav">
                        {this.listCard()}
                    </div>
                </div>
                <div className={background} onClick={this.props.handleClose}></div>
            </div >
        );
    }
}

const mapDispatchToProps = dispatch => ({
    putPokedex: (data) => dispatch(updatePokedex(data)),
})

export default connect(null, mapDispatchToProps)(Modal);