import React, { Component } from 'react'
import Card from '../Card/Card'
import './CardList.css'

export default class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {
          this.props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
          ))
        }
      </div>
    )
  }
}