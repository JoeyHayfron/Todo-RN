import React, {useState} from 'react';
import styled from 'styled-components';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Text, TouchableOpacity, Image, Platform} from 'react-native';

const AddTaskScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <Wrapper>
      <CloseButton>
        <TouchableOpacity>
          <CloseImage source={require('../assets/images/multiply-25.png')} />
        </TouchableOpacity>
      </CloseButton>
      <TextArea placeholder="New Task" multiline={true}></TextArea>
      <DateAndCategorySelectors>
        <DateWrapper onPress={showDatePicker}>
          <Image source={require('../assets/images/calendar-25.png')} />
          <Text
            style={{
              color: '#7d7e88',
              fontSize: 15,
              marginLeft: 10,
            }}>
            Today
          </Text>
        </DateWrapper>
        <CategoryWrapper></CategoryWrapper>
      </DateAndCategorySelectors>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <AddTaskButton>
        <Text style={{marginRight: 10, color: 'white'}}>New Task</Text>
        <Image
          source={require('../assets/images/collapse_arrow-50.png')}
          style={{width: 18, height: 18}}
        />
      </AddTaskButton>
    </Wrapper>
  );
};

export default AddTaskScreen;

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
`;

const CloseButton = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #e1e4f6;
  padding-top: 8px;
  padding-left: 8px;
  position: absolute;
  right: 14px;
  top: 8px;
`;

const CloseImage = styled.Image`
  height: 20px;
  width: 20px;
`;

const TextArea = styled.TextInput`
  width: 100%;
  font-size: 25px;
`;

const DateAndCategorySelectors = styled.View`
  flex-direction: row;
`;

const DateWrapper = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 20px;
  border: 1px solid #edf0fe;
  border-radius: 50px;
`;

const CategoryWrapper = styled.View``;

const AddTaskButton = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #0375ff;
  flex-direction: row;
  width: 140px;
  padding: 15px 20px;
  border-radius: 50px;
  align-items: center;
`;
