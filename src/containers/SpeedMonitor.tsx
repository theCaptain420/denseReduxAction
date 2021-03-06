import { connect } from 'react-redux';
import {
  GEO_LOCATION_REQUEST,
  SC_SET_SPEED_LIMIT,
  SC_SET_SPEED_UNIT,
  SC_TOGGLE_MONITORING_REQUEST,
  UPDATE_MY_BUTTON_NUMBER,
  UPDATE_MY_TEXT_FIELD,
  RESET_TEXT_COLOR,
  RESET_TEXT,
  GET_THE_PERSON_ARTICLE

} from '../redux/actions';
import SpeedMonitor from '../components/SpeedMonitor';
import { speedLimits } from '../utils';

const mapStateToProps = (state: AppState) => {
  return {
    currentLocation: state.geoService.currentLocation,
    currentSpeed: state.speedController.currentSpeed,
    speedLimit: state.speedController.selectedSpeedLimit,
    speedLimits: speedLimits[state.speedController.speedUnit],
    unit: state.speedController.speedUnit,
    isMonitoringSpeed: state.speedController.isMonitoringSpeed,

    myButtonValue: state.buttonService.currentValue,
    
    myfieldText: state.fieldTextService.currentString,
    myTextColor: state.fieldTextService.currentColor,
    showVapeNation: state.fieldTextService.showingVP,

    articleWriter: state.fieldTextService.artWriter
    
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  activateMyButton: ()=> dispatch(UPDATE_MY_BUTTON_NUMBER.create(null)),
  writingInMyfield: (newString:string)=> dispatch(UPDATE_MY_TEXT_FIELD.create(newString)),
  resetTextColor:()=>dispatch(RESET_TEXT_COLOR.create(null)),
  resetText:()=>dispatch(RESET_TEXT.create(null)),
  articlePress:(articleID:number)=>dispatch(GET_THE_PERSON_ARTICLE.create(articleID)),

  whereAmI: () => dispatch(GEO_LOCATION_REQUEST.create(null)),
  selectSpeedLimit: (newLimit: string) => dispatch(SC_SET_SPEED_LIMIT.create(newLimit)),
  selectUnit: (newUnit: SpeedUnit) => dispatch(SC_SET_SPEED_UNIT.create(newUnit)),
  toggleSpeedMonitor: () => dispatch(SC_TOGGLE_MONITORING_REQUEST.create(null)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpeedMonitor);
