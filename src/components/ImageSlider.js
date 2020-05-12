import * as React from 'react';
import {Text, View, SafeAreaView, Image} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          text: 'Text 1',
        },
        {
          title: 'Item 2',
          text: 'Text 2',
        },
        {
          title: 'Item 3',
          text: 'Text 3',
        },
        {
          title: 'Item 4',
          text: 'Text 4',
          image: 'https://source.unsplash.com/1024x768/?tree',
        },
        {
          title: 'Item 5',
          text: 'Text 5',
        },
      ],
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
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView
        style={{flex: 1, backgroundColor: 'transparent'}}>
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
