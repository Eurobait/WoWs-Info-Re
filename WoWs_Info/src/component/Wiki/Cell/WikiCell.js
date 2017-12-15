import React from 'react';
import { View, Image, Text, TouchableWithoutFeedback, TouchableNativeFeedback, Platform } from 'react-native';
import { wikiIndex } from '../../../constant/value';
import { styles } from './WikiCellStyles';
import { Actions } from 'react-native-router-flux';

const Touchable = (Platform.OS == 'android') ? TouchableNativeFeedback : TouchableWithoutFeedback;

class WikiCell extends React.PureComponent {
  componentWillMount() {
    this.name = this.props.data.name;
    this.icon = this.props.data.icon;
    this.index = this.props.data.index;
  }

  render() {
    return (
      <View>
        <Touchable onPress={() => this.onWikiBtnPressed()} >
          <View style={viewStyle}>
            <Image style={imageStyle} source={{uri: 'http://via.placeholder.com/160x160'}}/> 
            <Text style={textStyle}>{this.name}</Text>     
          </View>        
        </Touchable>
      </View>
    )
  }

  onWikiBtnPressed() {
    console.log(this.index);
    switch (this.index) {
      case wikiIndex.Achievement:
        Actions.AchievementScreen(); break;
      case wikiIndex.Flag_Camouflage:
        Actions.ConsumableScreen({index: wikiIndex.Flag_Camouflage}); break;    
      case wikiIndex.Warship:
        Actions.ShipScreen(); break;    
      case wikiIndex.Commander:
        Actions.CommanderScreen(); break;      
      case wikiIndex.Upgrade:
        Actions.ConsumableScreen({index: wikiIndex.Upgrade}); break;      
      case wikiIndex.Map:
        Actions.MapScreen(); break;
      default: return;
    }
  }
}

const { viewStyle, imageStyle, textStyle } = styles;

export {WikiCell};