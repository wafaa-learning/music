import React, { Component } from 'react';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/platform';
import TracksSongs from '../TracksSongs/TracksSongs';
import { Icon, Badge, StyleProvider, Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';


export default class FooterTabsBadgeExample extends Component {

   state = {
     selectedTab: 'Songs'
   };

   static navigationOptions = {
      header: null,
   };

   renderSelectedTab () {
    switch (this.state.selectedTab) {
      case 'Songs':
        return (
           <TracksSongs />
        );
        break;
      case 'Albums':
        return (
           <Text>Albums</Text>
        );
        break;
      case 'Favorite':
        return (
           <Text>Favorite</Text>
        );
        break;

        case 'Search':
         return (
            <Text>Search</Text>
         );
         break;
      default:
    }
  }

  render() {

    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Header />
        <Content>
         {this.renderSelectedTab()}
        </Content>
        <Footer>
          <FooterTab>

            <Button badge vertical
            active={this.state.selectedTab==='Songs'}
            onPress={() => this.setState({selectedTab: 'Songs'})}>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>My Music</Text>
            </Button>

            <Button active badge vertical
            active={this.state.selectedTab==='Albums'}
            onPress={() => this.setState({selectedTab: 'Albums'})}>
            <Badge ><Text>51</Text></Badge>
              <Icon name="camera" />
              <Text>Albums</Text>
            </Button>

            <Button active badge vertical
            active={this.state.selectedTab==='Favorite'}
            onPress={() => this.setState({selectedTab: 'Favorite'})}>
            <Badge ><Text>13</Text></Badge>
              <Icon active name="navigate" />
              <Text>Favorite</Text>
            </Button>

            <Button vertical
            active={this.state.selectedTab==='Search'}
            onPress={() => this.setState({selectedTab: 'Search'})}>
              <Icon name="person" />
              <Text>Search</Text>
            </Button>

          </FooterTab>
        </Footer>
      </Container>
      </StyleProvider>
    );
  }
}
