/// <reference types="react" />
import { StyleProp, ViewStyle } from 'react-native';
interface SortableListProps {
    items: Array<any>;
    itemHeight: number;
    onOrderChange: (item: any) => void;
    renderItem: (item: any) => JSX.Element;
    dragableAreaSize?: number;
    style?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
}
declare const SortableList: ({ items, itemHeight, onOrderChange, renderItem, dragableAreaSize }: SortableListProps) => JSX.Element;
export default SortableList;
