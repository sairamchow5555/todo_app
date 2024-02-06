import Realm, {  ObjectSchema } from "realm";
import { createRealmContext } from '@realm/react';

export class Todo extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    description!: string;
    completed!: boolean;
    createdAt!: Date;

    static schema: ObjectSchema = {
        name: 'Todo',
        properties: {
            _id: 'objectId',
            description: 'string',
            completed: {
                type: 'bool',
                default: true,
            },
            createdAt: 'date',
        },
    };
}

export const todoContext = createRealmContext({
    schema: [Todo],
    // onFirstOpen(realm){
    //     console.log("onFirstOpen called");
    //     realm.write(() => {
    //         realm.create('Todo',{
    //             _id: new Realm.BSON.ObjectID(),
    //             description: 'Welcome to ToDo App',
    //             completed: true,
    //             createdAt: new Date(),
    //         });
    //     });
    // },
});
