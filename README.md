# react-native-list-sort
![Supports Android and iOS](https://img.shields.io/badge/platforms-android%20|%20ios-blue.svg) &nbsp;&nbsp;
![MIT License](https://img.shields.io/npm/l/react-native-range-slider-expo?color=red)
### Simple, light-weight and smooth sortable list for react-native apps (compatible for Expo)
<br/>

## Getting started
`npm install react-native-list-sort`
<br/>
##### NOTE:<br/>This package uses react-native-reanimated (version 2) and react-native-gesture-handler.<br/>In case you do not have these pacakges installed please see and follow the Softare-Mansion docs:
<a href="https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation/" target="_blank">react-native-reanimated</a>
<br/>
<a href="https://docs.swmansion.com/react-native-gesture-handler/docs/" target="_blank">react-native-gesture-handler</a>
<br/>

## Usage
```javascript
import List from 'react-native-list-sort';
```
```javascript
     return (
        <List
          items={originalList}
          renderItem={renderItem}
          itemHeight={ITEM_HEIGHT}    // <----- MUST MATCH THE ITEM'S STYLE HEIGHT
          onOrderChange={onOrderChange}
        />
     );
```

<br/>

## Examples
<div style="display:flex;flex-direction:row">
    <kbd>
      <img src="https://user-images.githubusercontent.com/37651196/137317349-41695ec8-0152-4f73-bc4f-bbb05413768f.gif" height="600" width="280" />
    </kbd>
    <kbd>
      <img src="https://user-images.githubusercontent.com/37651196/137318224-5b68ad4b-7ff1-4a90-b36e-d19fc9154991.gif" height="600" width="280" />
    </kbd>
</div>
<br/>
<div style="display:flex;flex-direction:row">
   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  
    <a href="https://github.com/D10S60948/react-native-list-sort/blob/main/examples/Example_1.tsx" target="_blank">Example 1</a>
   &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
    <a href="https://github.com/D10S60948/react-native-list-sort/blob/main/examples/Example_2.tsx" target="_blank">Example 2</a>
</div>
<br/>

## API
| Property | Type | Required | Default |
| :---     |:----:|  :-----: | :-----: | 
| items | Array | yes | - |
| renderItem | () => JSX.Element | yes | - |
| itemHeight | Number | yes | - |
| onOrderChange | (sortedList: Array) => void | yes | - |
| dragableAreaSize | number | no | itemHeight |
| style | style | no | - |
| contentContainerStyle | style | no | - |

##### * dragableAreaSize enables the capability to make only part of the item draggable (default to the left part of item)
<br/>

## Inspiration
<a href="https://www.youtube.com/watch?v=-39OEXk_mWc" target="_blank">William Candillon - Chrome Drag-to-Sort - “Can it be done in React Native?” - season 4</a>
<br/>

## License
This project is licensed under the MIT License
