import React, { useCallback } from "react";
import Realm from "realm";
import { Alert, Pressable, Text, View } from "react-native";

import { Todo, todoContext } from "./realm";

const { useRealm } = todoContext;

export const TodoItem = ({item}: {item:  Todo & Realm.Object}) => {

    const realm = useRealm();

    const deleteItem = useCallback(() => {
        Alert.alert(
            'Delete ToDo',
            'Are you sure want to delete this ToDo',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        realm.write(() => {
                            realm.delete(item);
                        });
                    },
                },
            ],
            {cancelable: false},
        );
    }, [realm, item]);

    const toggleCompleted = useCallback(() => {
        realm.write(() => {
            item.completed = !item.completed;
        });
    }, [realm, item]);

    return(
        <Pressable style={{flexDirection: 'row', paddingVertical: 15}}
            onLongPress={deleteItem}
            onPress={toggleCompleted}
        >
            <Text style={{fontSize: 20, paddingRight: 10}}>
                {item.completed ? '✅' : '🔲'}
            </Text>
            <Text style={{
                fontSize: 20,
                textDecorationLine: item.completed ? 'line-through': 'none',
                color: item.completed ? '#AAAAAA' : '#000000',
            }}>
                {item.description}
            </Text>
        </Pressable>
    );
}
