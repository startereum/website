import React, { Component } from 'react';
import {Card, Cards, Space} from '../styles/media';
import {data} from '../content/data';
class FeatureCards extends Component {
  render () {
    return (
      <Space mtL='50' mtS='50'>
        <Cards>
          {
            data.cards.map(function (line) {
              return (
                <Card>
                  <p>{line}</p>
                </Card>
              );
            })
          }
        </Cards>
      </Space>
    );
  }
}

export {FeatureCards};
