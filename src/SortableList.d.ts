/// <reference types="react" />
interface SortableListProps {
    items: Array<any>;
    itemHeight: number;
    onOrderChange: (item: any) => void;
    renderItem: (item: any) => JSX.Element;
    dragableAreaSize?: number;
}
declare const SortableList: ({ items, itemHeight, onOrderChange, renderItem, dragableAreaSize }: SortableListProps) => JSX.Element;
export default SortableList;
