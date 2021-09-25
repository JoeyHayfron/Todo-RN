/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {Text, Image, View, Animated, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CategoryComponent from '../components/CategoryComponent_AddTaskScreen';
import {Categories} from '../appData/categoryData';
import AndroidDatePickerModule from '../natives/android/DatePickerModule';
import AddButton from '../components/AddButton';
import CloseButton from '../components/CloseButton';

const platform = Platform.OS;
const AddTaskScreen = props => {
  const [showCategoriesList, setShowCategoriesList] = useState(false);
  const categoriesListOpacity = new Animated.Value(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showiOSDatepicker = () => {
    setShow(true);
  };

  const hideiOSDatePicker = () => {
    setShow(false);
    setDate(date);
  };

  const showAndroidDatePicker = async () => {
    let androidDate = await AndroidDatePickerModule.showDateTimePicker();
    setDate(androidDate);
  };

  const handleSetSelectedCategory = category => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (showCategoriesList) {
      Animated.spring(categoriesListOpacity, {
        toValue: 1,
      }).start();
    } else {
      Animated.spring(categoriesListOpacity, {
        toValue: 0,
      }).start();
    }
  }, [showCategoriesList]);

  return (
    <Wrapper>
      <CloseButton onPress={() => props.navigation.navigate('Home')} />
      <TextArea placeholder="New Task" multiline={true} />
      <DateAndCategorySelectors>
        <DateWrapper
          onPress={() =>
            platform === 'ios' ? showiOSDatepicker() : showAndroidDatePicker()
          }>
          <Image source={require('../assets/images/calendar-25.png')} />
          <Text
            style={{
              color: '#7d7e88',
              fontSize: 15,
              marginLeft: 10,
              width: 100,
            }}>
            {`${date.toLocaleString().substring(0, 9)}...`.replace(',', '')}
          </Text>
        </DateWrapper>
        <View>
          <CategoryComponent
            color={
              selectedCategory ? selectedCategory.color : Categories[0].color
            }
            name={selectedCategory ? selectedCategory.name : Categories[0].name}
            image
            clicked={() => setShowCategoriesList(!showCategoriesList)}
          />
          {showCategoriesList ? (
            <AnimatedCategoriesList
              style={{
                opacity: categoriesListOpacity,
              }}
              data={Categories}
              renderItem={({item}) => (
                <CategoryComponent
                  color={item.color}
                  name={item.name}
                  clicked={() => {
                    handleSetSelectedCategory(item);
                    setShowCategoriesList(!showCategoriesList);
                  }}
                />
              )}
              keyExtractor={item => item.id}
            />
          ) : null}
        </View>
      </DateAndCategorySelectors>
      {show && (
        <IosDateWrapper>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="datetime"
            is24Hour={true}
            display="spinner"
            onChange={onChange}
          />
          <IosConfirmDateTimeButton onPress={() => hideiOSDatePicker()}>
            <Text
              style={{
                color: 'white',
                height: '100%',
                width: '100%',
                textAlign: 'center',
                paddingTop: 6,
              }}>
              OK
            </Text>
          </IosConfirmDateTimeButton>
        </IosDateWrapper>
      )}
      <AddButton
        text="New Task"
        image
        onPress={() => props.navigation.navigate('Home')}
      />
    </Wrapper>
  );
};

export default AddTaskScreen;

const Wrapper = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const TextArea = styled.TextInput`
  width: 100%;
  font-size: 25px;
`;

const DateAndCategorySelectors = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

const DateWrapper = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px 20px;
  border: 1px solid #edf0fe;
  border-radius: 50px;
  margin-right: 10px;
  height: 45px;
`;

const CategoriesList = styled.FlatList`
  height: 280px;
`;

const AnimatedCategoriesList = Animated.createAnimatedComponent(CategoriesList);

const IosDateWrapper = styled.View``;

const IosConfirmDateTimeButton = styled.TouchableOpacity`
  height: 30px;
  width: 60px;
  border-radius: 15px;
  background-color: #0375ff;
`;
