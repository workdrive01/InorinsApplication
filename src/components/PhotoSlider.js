// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// import {SliderBox} from 'react-native-image-slider-box';
// import {FastImage} from 'react-native-fast-image';

// export default class PhotoSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       images: [
//         'https://source.unsplash.com/1024x768/?nature',
//         'https://source.unsplash.com/1024x768/?water',
//         'https://source.unsplash.com/1024x768/?girl',
//         'https://source.unsplash.com/1024x768/?tree',
//       ],
//     };
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <SliderBox
//           ImageComponent={FastImage}
//           imageLoadingColor="#2196F3"
//           ImageComponentStyle={{borderRadius: 15, width: '90%', marginTop: 5}}
//           images={this.state.images}
//           onCurrentImagePressed={index =>
//             console.warn(`image ${index} pressed`)
//           }
//           autoPlay
//           autoplayInterval={3000}
//           circleLoop
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
