import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import CloseButton from '../components/CloseButton';
import AddButton from '../components/AddButton';
import {ColorPicker} from 'react-native-color-picker';
import {RainbowColors} from '../appData/colorsData';

const AddCategoryScreen = props => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [chosenColor, setChosenColor] = useState('');

  const chooseColorButtonColor = chosenColor
    ? chosenColor
    : RainbowColors[Math.floor(Math.random() * 7)];
  return (
    <Wrapper>
      <CloseButton onPress={() => props.navigation.navigate('Categories')} />
      <TextArea placeholder="New Category" multiline={true} />
      <ColorPickerWrapper>
        <ChooseColorButton onPress={() => setShowColorPicker(!showColorPicker)}>
          <OuterCircle color={chooseColorButtonColor}>
            <InnerCircle color={chooseColorButtonColor} />
          </OuterCircle>
          <Text style={{color: '#53575b', marginLeft: 5}}> Choose Color</Text>
        </ChooseColorButton>
        {showColorPicker ? (
          <View>
            <ColorPicker
              onColorSelected={color => {
                setShowColorPicker(!showColorPicker);
                setChosenColor(color);
              }}
              style={{height: 200, width: 200}}
            />
            <Text
              style={{
                width: 150,
                textAlign: 'center',
                alignSelf: 'center',
                color: '#ccd0dc',
              }}
              multiline={true}>
              Tap the middle circle to choose color
            </Text>
          </View>
        ) : null}
      </ColorPickerWrapper>
      <AddButton text="New Category" image />
    </Wrapper>
  );
};

export default AddCategoryScreen;

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

const ChooseColorButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 45px;
  width: 160px;
  border: 1px solid #edf0fe;
  align-items: center;
  border-radius: 80px;
  padding-left: 15px;
`;

const OuterCircle = styled.View`
  height: 26px;
  width: 26px;
  border: 3px solid ${props => (props.color ? props.color : 'black')};
  border-radius: 13px;
  background-color: transparent;
  padding-top: 2px;
  padding-left: 2px;
`;

const InnerCircle = styled.View`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: ${props => (props.color ? props.color : 'black')};
`;

const ColorPickerWrapper = styled.View`
  margin-top: 20px;
  flex-direction: row;
`;
