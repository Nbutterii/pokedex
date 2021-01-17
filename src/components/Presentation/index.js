import React, { Component } from 'react';
import Modal from '../Modal';
import Abilities from '../Abilities';
import Happiness from '../Happiness';
import { pokedex, updatePokedex } from '../../action/pokedexAction';
import { connect } from 'react-redux';
import './index.scss';

class Presentation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
            pokedex: ''
        }
        this.handleToggleModal = this.handleToggleModal.bind(this);
    }

    componentDidMount() {
        this.props.getPokedex()
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            pokedex: nextProps.pokedex
        });
        if (nextProps.listCard) { // check all card and select card from list
            let filterCard = nextProps.pokedex.filter(item => !nextProps.listCard.some(val => item.id === val.id));
            this.setState({
                pokedex: filterCard
            });
        }
    }

    handleToggleModal() { // set open/close Modal
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    deleteCard = (item) => { // delete card
        let cardDelete = this.props.listCard.filter((val) => val.id !== item.id);
        this.props.putPokedex(cardDelete) // update redux from delete card
    }

    ListPokedexCard = () => {
        if (this.props.listCard && this.props.listCard.length !== 0) {
            return (
                this.props.listCard.map((val, index) =>
                    <div className="presentation-card-bg" key={index}>
                        <div className="presentation-card-scale">
                            <div className="presentation-card-box">
                                <img className="presentation-img" src={val.imageUrl} alt="image card" />
                            </div>
                            <div>
                                <span onClick={() => this.deleteCard(val)} className="presentation-cancle" >X</span>
                                <span className="presentation-name">{val.name}</span>
                                <span className="presentation-abilities" > HP <Abilities hp={val.hp} /> </span>
                                <span className="presentation-abilities" > STR <Abilities str={val.attacks} /> </span>
                                <span className="presentation-abilities" > WEAK <Abilities weak={val.weaknesses} /> </span>
                                <Happiness hp={val.hp} str={val.attacks} weak={val.weaknesses} />
                            </div>
                        </div>
                    </div>
                )
            )
        }
    }

    render() {
        return (
            <div className="presentation-container">
                <h1 className="presentation-topic">My Pokedex</h1>
                <div className="presentation-tabbar">
                    <h1 className="presentation-button" onClick={this.handleToggleModal}>+</h1>
                </div>
                <div className="presentation-navbar">
                    <div className="presentation-card">
                        {this.ListPokedexCard()}
                    </div>
                </div>
                <Modal
                    show={this.state.isModalOpen}
                    handleClose={this.handleToggleModal}
                    data={this.state.pokedex}
                    cards={this.props.listCard}
                />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getPokedex: () => dispatch(pokedex()),
    putPokedex: (data) => dispatch(updatePokedex(data)),
})

const mapStateToProps = (state) => {
    return {
        ...state,
        pokedex: state.pokedex.cards,
        listCard: state.updatePokedex.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);