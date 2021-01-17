import React, { Component } from 'react';
import emoji from '../../images/cute.png';
import './index.scss';

class Happiness extends Component {

    calculateHappiness = () => {
        let Hp = this.props.hp !== undefined && this.props.hp !== 'None' ? this.props.hp >= 100 ? 100 : this.props.hp : 0 // calculate HP
        let Weak = this.props.weak !== undefined ? this.props.weak.length * 100 : 0 // calculate Weak

        const groupDamage = []

        if (this.props.str !== undefined) {
            this.props.str.map((item, i) => { // set damage
                let damage = item.damage !== '' ? item.damage : '0'
                let splitDamage = damage.split(/[^0-9\.-]+/g).join('') // damage value without symbol 
                groupDamage.push(Number(splitDamage)) // push damage to array
            })
            const totalDamage = groupDamage.reduce((prev, next) => prev + next, 0); // plus damage
            const happiness = Math.ceil(((Number(Hp) / 10) + (totalDamage / 10) + 10 - (Weak / 100)) / 5) // calculate Happiness

            if (happiness) {
                let imageIndex = []
                for (let i = 1; i <= happiness; i++) { // loop array value happiness
                    imageIndex.push(i) // push happiness to array
                }
                return (
                    imageIndex.map((val, index) => // render image emoji
                        <div key={index}>
                            <img className="img" src={emoji} alt="emoji cute" />
                        </div>
                    )
                )
            }

        }
    }

    render() {
        return (
            <div className="row-img">
                {this.calculateHappiness()}
            </div>
        )
    }
}

export default Happiness