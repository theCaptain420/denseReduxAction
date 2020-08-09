import React from 'react';
import { View, Button, Text, SafeAreaView } from 'react-native';
import { GeolocationResponse } from '@react-native-community/geolocation';
import DigitalCounter from './DigitalCounter';
import Selector from './Selector';
import { speedUnits } from '../utils/variables';
import { strings } from '../locales/index';

import AmountPressed from './AmountPressed'
import WhatIWrite from './WhatIWrite'
import ResetColor from './ColorChangingButton'
import WhoWroteArt from './WhoWroteArt'

interface Props {
  whereAmI: () => void;
  currentLocation?: GeolocationResponse;
  unit: SpeedUnit;
  selectUnit: (newUnit: SpeedUnit) => void;
  selectSpeedLimit: (newLimit: string) => void;
  speedLimit: string;
  speedLimits: string[];
  currentSpeed: number;
  toggleSpeedMonitor: () => void;
  isMonitoringSpeed: boolean;

  myButtonValue:number;
  activateMyButton: ()=> void;

  writingInMyfield:(newString: string)=> void;
  myfieldText: string;
  myTextColor:string; 
  showVapeNation:boolean;
  resetTextColor:()=>void;
  resetText:()=> void;

  articlePress:(theArticleNumber:number)=>void;
  articleWriter:string


}
class SpeedMonitor extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.selectColor = this.selectColor.bind(this);
    this.state = {};
  }

  private showLocation(location?: GeolocationResponse) {
    if (!location) {
      return;
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{strings('speedMonitor.lat')} </Text>
          <Text>{`${location.coords.latitude}`} </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>{strings('speedMonitor.lon')}</Text>
          <Text>{`${location.coords.longitude}`}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>{strings('speedMonitor.alt')}</Text>
          <Text>{`${location.coords.altitude}`}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>{strings('speedMonitor.timestamp')}</Text>
          <Text>{`${location.timestamp}`}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>{'speed: '}</Text>
          <Text>{`${location.coords.speed}`}</Text>
        </View>
      </View>
    );
  }

  private selectColor() {
    // percent of speed limit.

    const currentLimit = parseFloat(this.props.speedLimit);

    if (this.props.currentSpeed <= 0) {
      return 'black';
    }

    if (this.props.currentSpeed / currentLimit  <= 0.9) {
      return 'green';
    }

    if (this.props.currentSpeed / currentLimit <= 1) {
      return 'yellow';
    }

    if (this.props.currentSpeed / currentLimit > 1) {
      return 'red';
    }
  }

  public render() {
    return (
      <SafeAreaView style={{ flex: 1, marginHorizontal: 20, marginTop:10 }}>
         
          <AmountPressed
          startValue={0}
          faceValue={this.props.myButtonValue}
          whenIPressYou={this.props.activateMyButton}
          />
          <WhatIWrite
          textValue={this.props.myfieldText}
          whenIWrite={(newString:string)=>this.props.writingInMyfield(newString)}
          textColor={this.props.myTextColor}
          showVapeNation={this.props.showVapeNation}
          />
          <ResetColor
            whenPressed={this.props.resetTextColor}
            resetColorBtnPress={this.props.resetText}
          />

          <WhoWroteArt
            whenPressed={this.props.articlePress}
            theID={20}
            writer={this.props.articleWriter}
          ></WhoWroteArt>

      </SafeAreaView>
    );
  }
}

export default SpeedMonitor;
