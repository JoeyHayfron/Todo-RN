import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Text, Platform, SectionList} from 'react-native';
import BackButton from '../components/BackButton';
import {hideSideNav} from '../redux/actions/ui/ui.actions';
import {Business} from '../appData/categoryData';
import TaskComponent from '../components/TaskComponent';

const platform = Platform.OS;
const SingleCategoryScreen = props => {
  return (
    <Wrapper>
      <Header>
        <BackButton
          onPress={() => {
            props.hideSideNav();
            props.navigation.navigate('Home');
          }}
        />
        <Text
          style={{
            marginLeft: 20,
            fontSize: 35,
            fontWeight: platform === 'ios' ? '700' : 'bold',
          }}>
          Business
        </Text>
      </Header>
      <SectionList
        sections={Business}
        renderItem={({item}) => (
          <TaskComponent
            title={item.task}
            isCompleted={item.status == 'completed'}
            date={item.date}
          />
        )}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
      />
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    hideSideNav: () => dispatch(hideSideNav()),
  };
};

export default connect(null, mapDispatchToProps)(SingleCategoryScreen);

const Wrapper = styled.View`
  background-color: #fafbff;
  height: 100%;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${platform === 'ios' ? 60 : 35}px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;
