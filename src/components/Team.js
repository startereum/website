import React, { Component } from 'react';
import {Cont} from '../styles/grid';
import {Space} from '../styles/media';
import {TeamSection, TeamList, TeamListHeading, TeamMemberName, TeamMemberTag, SocialIcon} from '../styles/pageStyles';
import {data} from '../content/data';

class Team extends Component {
  render () {
    function getSocialLinks(member) {
      return (<div>
        {(member.fb !== '') ? <SocialIcon target='_blank' href={member.fb} type='fb' /> : ''}
        {(member.twitter !== '') ? <SocialIcon target='_blank' href={member.twitter} type='twitter' /> : ''}
        {(member.linkedIn !== '') ? <SocialIcon target='_blank' href={member.linkedIn} type='linkedin' /> : ''}
      </div>)
    }
    return (
      <Cont>
        <Space mtL='50' mtS='50'>
          <center>
            {
              data.team.map(function (team, ind) {
                return (
                  <TeamSection key={ind}>
                    <TeamListHeading>{team.heading}</TeamListHeading>
                    <TeamList>
                      {
                        team.members.map(function (member, ind) {
                          return (<li key={ind}>
                            <div>
                              <TeamMemberName>{member.name}</TeamMemberName>
                              <TeamMemberTag>{member.designnation}</TeamMemberTag>
                              <TeamMemberTag>{member.company}</TeamMemberTag>
                              {getSocialLinks(member)}
                            </div>
                            <img src={`${process.env.PUBLIC_URL + member.img}`} />
                            </li>);
                        })
                      }
                    </TeamList>
                  </TeamSection>
                );
              })
            }
          </center>
        </Space>
      </Cont>
    );
  }
}

export {Team};
