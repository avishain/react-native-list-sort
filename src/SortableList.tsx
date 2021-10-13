import React, { useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import Item from './Item';

interface SortableListProps {
  items: Array<any>;
  itemHeight: number;
  onOrderChange: (item: any) => void;
  renderItem: (item: any) => JSX.Element;
  dragableAreaSize?: number;
}

const SortableList = ({ items, itemHeight, onOrderChange, renderItem, dragableAreaSize }: SortableListProps) => {
  const [containerHeight, setContainerHeight] = useState<number>();
  const positions = useSharedValue({ ...items.map((item: any, index: number) => index) });
  const scrollY = useSharedValue(0);
  const scrolViewRef = useAnimatedRef<Animated.ScrollView>();
  const contentHeight = items.length * itemHeight;

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { y } }) => scrollY.value = y
  });

  const onLayout = (event: LayoutChangeEvent) => {
    setContainerHeight(event.nativeEvent.layout.height);
  };

  const sortList = (positions: any) => {
    const sortedList = new Array(items.length).fill(null);
    for (let i = 0; i < items.length; ++i) {
      const sortedIndex = positions[i];
      sortedList[sortedIndex] = items[i];
    }
    onOrderChange(sortedList);
  };

  return (
    <View onLayout={onLayout}>
      <Animated.ScrollView ref={scrolViewRef}
        contentContainerStyle={{ height: items.length * itemHeight }}
        bounces={false}
        scrollEventThrottle={8}
        onScroll={onScroll}
        showsVerticalScrollIndicator
        persistentScrollbar
      >
        {items.map((item: any, key: number) => {
          return (
            <Item {...{ item, key, positions, scrollY, containerHeight, contentHeight, scrolViewRef, itemHeight, renderItem, dragableAreaSize }}
              onFinish={sortList}
              index={key}
            />
          )
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default SortableList;
