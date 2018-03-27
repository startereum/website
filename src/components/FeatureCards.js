import React, { Component } from 'react';
import {Card, Cards, Space} from '../styles/media';
import {data} from '../content/data';
class FeatureCards extends Component {
  render () {
    let createMarkup = (line) => ({__html: line});
    return (
      <Space mtL='50' mtS='50'>
        <Cards>
          {
            data.cards.map(function (line) {
              return (
                <Card>
                  <p dangerouslySetInnerHTML={createMarkup(line)} />
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
