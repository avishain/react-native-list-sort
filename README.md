# react-native-list-sort
![Supports Android and iOS](https://img.shields.io/badge/platforms-android%20|%20ios-blue.svg) &nbsp;&nbsp;
![MIT License](https://img.shields.io/npm/l/react-native-range-slider-expo?color=red)
### Simple, light-weight and smooth sortable list for react-native apps (compatible for Expo)
<br/>

## Getting started
`npm install react-native-list-sort`
<br/>

## Usage
#### Examples - display

<div style="display:flex;flex-direction:row">
  <img src="https://user-images.githubusercontent.com/37651196/137318224-5b68ad4b-7ff1-4a90-b36e-d19fc9154991.gif" height="600" width="280" />
  <img src="https://user-images.githubusercontent.com/37651196/137317349-41695ec8-0152-4f73-bc4f-bbb05413768f.gif" height="600" width="280" />
</div>
<br/>

#### Examples - code (reflects the short video above)


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

## API
| Property | Type | Required | Default |
| :---     |:----:|  :-----: | :-----: | 
| items | Array | yes | - |
| renderItem | () => JSX.Element | yes | - |
| itemHeight | Number | yes | - |
| onOrderChange | (sortedList: Array) => void | yes | - |
| dragableAreaSize | number | no | itemHeight |

##### * dragableAreaSize enables the capability to make only part of the item draggable (default to the left part of item)

<br/><br/>

## License
This project is licensed under the MIT License
