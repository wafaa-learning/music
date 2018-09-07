import React, { Component } from 'react';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/platform';
import { Icon, Badge, StyleProvider, Container, Header, Content, Footer, FooterTab, Button, Text } from 'native-base';

export default class FooterTabsBadgeExample extends Component {
   static navigationOptions = {
      header: null,
   };

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Header />
        <Content />
        <Footer>
          <FooterTab>
            <Button badge vertical onPress={() => this.props.navigation.navigate('Players')}>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>My Music</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </StyleProvider>
    );
  }
}
