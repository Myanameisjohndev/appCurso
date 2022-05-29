import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../ListItem';
import { styles } from './styles';

const List = ({ namesFiltered, actionToEdit, removeItem }) => {
    return <FlatList style={styles.Container}
        data={namesFiltered}
        keyExtractor={(item) => item.index}
        renderItem={({ item }) => <ListItem
            edit={actionToEdit(item)}
            remove={removeItem(item.index)}
            item={item} />}
    />
}

export default List;