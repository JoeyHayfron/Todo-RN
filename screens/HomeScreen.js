import React, {useEffect, useState, useRef} from 'react';
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
import styled from 'styled-components/native';
import {showSideNav, hideSideNav} from '../redux/actions/ui/ui.actions';
import TaskCategory from '../components/TaskCategory';
import Task from '../components/TaskComponent';
import AddFloatingButton from '../components/AddFloatingButton';
import {Colors} from '../globals/colors';
import AddTaskScreen from './AddTaskScreen';
import ProfileScreen from './ProfileScreen';
import AuthenticationScreen from './AuthenticationScreen';

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
      <AnimatedWrapper
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          transform: [{translateX: translateX}, {scale: scale}],
          borderRadius: borderRadius,
        }}>
        <AddFloatingButton
          onPress={() => props.navigation.navigate('AddTask')}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            style={{
              marginTop: screenHeight <= 800 ? 40 : 80,
              marginBottom: 35,
            }}>
            <TouchableOpacity onPress={() => showSideNav()}>
              <Image source={require('../assets/images/menu-25.png')} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => props.navigation.navigate('Search')}>
                <Image source={require('../assets/images/search-32.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Notifications')}>
                <Image
                  source={require('../assets/images/notification-32.png')}
                />
              </TouchableOpacity>
            </View>
          </Header>

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
              clicked={() => props.navigation.navigate('SingleCategory')}
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
      <NavScreen nav={props.navigation} />
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

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
