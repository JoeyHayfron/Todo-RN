import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import NavScreen from './NavScreen';
import styled from 'styled-components';
import {showSideNav, hideSideNav} from '../redux/actions/ui/ui.actions';
import TaskCategory from '../components/TaskCategory';
import Task from '../components/TaskComponent';
import AddTaskFloatingButton from '../components/AddTaskFloatingButton';
import {Colors} from '../globals/colors';
import AddTaskScreen from './AddTaskScreen';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const HomeScreen = props => {
  const {sideMenuToggled} = props;
  const {showSideNav, hideSideNav} = props;
  const translateX = new Animated.Value(0);
  const scale = new Animated.Value(1);
  const borderRadius = new Animated.Value(0);

  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  useEffect(() => {
    if (sideMenuToggled) {
      Animated.spring(translateX, {
        toValue: screenWidth / 1.5,
        useNativeDriver: false,
      }).start();
      Animated.spring(scale, {
        toValue: 0.85,
        useNativeDriver: false,
      }).start();
      Animated.spring(borderRadius, {
        toValue: 50,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
      Animated.spring(borderRadius, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  }, [sideMenuToggled]);

  return (
    <HomeWrapper>
      <AddTaskScreen />
      {/* <AnimatedWrapper
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          transform: [{translateX: translateX}, {scale: scale}],
          borderRadius: borderRadius,
        }}>
        <AddTaskFloatingButton />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => showSideNav()}
            style={{
              marginTop: screenHeight <= 800 ? 40 : 80,
              marginBottom: 35,
            }}>
            <Image source={require('../assets/images/menu-25.png')} />
          </TouchableOpacity>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#1f2d5c'}}>
            Welcome Joseph
          </Text>
          <Text
            style={{
              color: '#9da6c7',
              marginTop: 25,
              marginBottom: 25,
              fontWeight: '600',
            }}>
            CATEGORY
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TaskCategory
              categoryName="Business"
              numberOfTasks="40"
              categoryColor="#e000ee"
            />
            <TaskCategory
              categoryName="Business"
              numberOfTasks="40"
              categoryColor="#e000ee"
            />
            <TaskCategory
              categoryName="Business"
              numberOfTasks="40"
              categoryColor="#e000ee"
            />
            <TaskCategory
              categoryName="Business"
              numberOfTasks="40"
              categoryColor="#e000ee"
            />
            <TaskCategory
              categoryName="Business"
              numberOfTasks="40"
              categoryColor="#e000ee"
            />
          </ScrollView>

          <Text
            style={{
              color: '#9da6c7',
              marginTop: 35,
              marginBottom: 25,
              fontWeight: '600',
            }}>
            TODAY'S TODO
          </Text>
          <Task
            checkTask={() => setIsTaskCompleted(!isTaskCompleted)}
            isCompleted={isTaskCompleted}
            categoryColor="#e000ee"
          />
          <Task
            checkTask={() => setIsTaskCompleted(!isTaskCompleted)}
            isCompleted={isTaskCompleted}
            categoryColor="#e000ee"
          />
          <Task
            checkTask={() => setIsTaskCompleted(!isTaskCompleted)}
            isCompleted={isTaskCompleted}
            categoryColor="#e000ee"
          />
          <Task
            checkTask={() => setIsTaskCompleted(!isTaskCompleted)}
            isCompleted={isTaskCompleted}
            categoryColor="#e000ee"
          />
          <Task
            checkTask={() => setIsTaskCompleted(!isTaskCompleted)}
            isCompleted={isTaskCompleted}
            categoryColor="#e000ee"
          />
          <Task
            checkTask={() => setIsTaskCompleted(!isTaskCompleted)}
            isCompleted={isTaskCompleted}
            categoryColor="#e000ee"
          />
          <Task
            checkTask={() => setIsTaskCompleted(!isTaskCompleted)}
            isCompleted={isTaskCompleted}
            categoryColor="#e000ee"
          />
        </ScrollView>
      </AnimatedWrapper>
      <NavScreen /> */}
    </HomeWrapper>
  );
};

const mapStateToProps = state => {
  return {
    sideMenuToggled: state.ui.sideMenuToggled,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showSideNav: () => dispatch(showSideNav()),
    hideSideNav: () => dispatch(hideSideNav()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const HomeWrapper = styled.View`
  height: 100%;
  width: 100%;
  background-color: white;
`;

const Wrapper = styled.View`
  background-color: #fafbff;
  position: absolute;
  border: 1px white;
  height: 100%;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
`;
const AnimatedWrapper = Animated.createAnimatedComponent(Wrapper);
