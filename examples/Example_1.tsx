import React from 'react';
import { Alert, Pressable, StyleSheet, Text } from 'react-native';
import List from 'react-native-list-sort';

const ITEM_HEIGHT = 80;
const originalList = [
  { id: 'a1', value: 10 },
  { id: 'b2', value: 12 },
  { id: 'c3', value: 5 },
  { id: 'd4', value: 12 },
  { id: 'e5', value: 1 },
  { id: 'f6', value: 10 },
  { id: 'g7', value: 41 },
  { id: 'h8', value: 9 },
  { id: 'i9', value: 24 },
  { id: 'j10', value: 67 },
  { id: 'k11', value: 21 },
  { id: 'l12', value: 4 }
];

function Example_1() {
  const onOrderChange = (sortedList: any) => {
    console.log({ sortedList });
  };

  const renderItem = ({ id, value }: { id: number, value: string }) => {
    return (
      <Pressable style={style.item} onPress={() => Alert.alert(id.toString())}>
        <Text>{JSON.stringify({ id, value })}</Text>
      </Pressable>
    );
  };

  return (
    <List
      items={originalList}
      renderItem={renderItem}
      itemHeight={ITEM_HEIGHT}    // <----- MUST MATCH THE ITEM'S STYLE HEIGHT
      onOrderChange={onOrderChange}
    />
  );
};

const style = StyleSheet.create({
  item: {
    height: ITEM_HEIGHT,              // <----- MUST MATCH THE LIST'S "itemHeight" PROP
    width: '100%',
    padding: 4,
    backgroundColor: 'white',
    borderColor: 'rgb(200,200,200)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
// note: adding margin will change item's real height and hence should be either:
//       1. avoided
// OR -  2. added to "itemHeight" (i.e. in case of {height: 100, marginBotton: 4} --> itemHeight: {100 + 4})

export default Example_1;
