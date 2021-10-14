import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import SortableList from './sortableList/SortableList';

const ITEM_HEIGHT = 50;
const exampleItems = [
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

function Example_2() {
  const onOrderChange = (sortedItems: any) => {
    console.log({ exampleItems });
    console.log({ sortedItems });
  };

  const renderItem = ({ id, value }: { id: number, value: string }) => {
    return (
      <Pressable style={style.item} onPress={() => Alert.alert(id.toString())}>
        <Text>{JSON.stringify({ id, value })}</Text>
      </Pressable>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'blue' }} />
      <View style={{ flex: 1, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 200, width: 240, backgroundColor: 'black', borderRadius: 16, overflow: 'hidden' }}>
          <SortableList
            items={exampleItems}
            renderItem={renderItem}
            itemHeight={ITEM_HEIGHT}
            onOrderChange={onOrderChange}
            dragableAreaSize={30}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    height: ITEM_HEIGHT,
    width: '100%',
    padding: 4,
    backgroundColor: 'white',
    borderColor: 'rgb(200,200,200)',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Example_2;
