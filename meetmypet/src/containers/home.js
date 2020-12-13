import { connect } from 'react-redux';
import Home from '../Components/Home';
import {
    getData
} from '../actions/home';

const mapStateToProps = (state) => ({
    //markers: state.map.markers,
    lastDogs: state.sliderPart.sliderDog,
    groups: state.loginModal.groups
});

const mapDispatchToProps = (dispatch) => ({
    fetchDataDog: () => {
        dispatch(getData());
    }
});

// Container
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

// == Export
export default HomeContainer;