import React, { useCallback } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";

import { todoContext, Todo } from "./realm";
import { TodoItem } from "./TodoItem";
const { useQuery, useRealm } = todoContext;

export const TodoList = () => {
    const todos = useQuery(Todo);
    console.log("TodoList",todos);
    const realm = useRealm();

    const [newTodoText, setNewTodoText] = React.useState('');

    const addTodo = useCallback((newText: string) => {
        realm.write(() => {
            realm.create('Todo',{
                _id: new Realm.BSON.ObjectID(),
                description: newText,
                completed: false,
                createdAt: new Date(),
            })
        });
        setNewTodoText('');
    }, [realm]);

    return(
        <View style={{flexGrow: 1, padding: 30}}>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={{flexGrow: 1, fontSize: 20, padding: 12, backgroundColor: '#EEEEEE'}}
                    placeholder="Add ToDo's"
                    value={newTodoText}
                    onChangeText={(text) => setNewTodoText(text)}
                />
               <Pressable onPress={() => addTodo(newTodoText)}>
                <Text style={{fontSize: 20, padding: 12}}>Add</Text>
               </Pressable>
            </View>
            <FlatList
                data={todos}
                renderItem={({item}) => <TodoItem item={item} />}
            />
        </View>
    );
}
