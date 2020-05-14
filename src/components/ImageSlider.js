import * as React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';
import {ACCOUNTS} from '../data/dummy-data';

import Carousel from 'react-native-snap-carousel';

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: ['Item 1', 'Item 2', 'Item 3', 'Text 4'],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 225,
          padding: 50,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <Text style={{fontSize: 30}}>{item}</Text>
        <Image source={require('../assets/logo.png')} />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={450}
            itemWidth={400}
            renderItem={this._renderItem}
            autoplay
            autoplayInterval={2500}
            loop
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
      </SafeAreaView>
    );
  }
}
