import React from "react"
import { Text, View, SafeAreaView, FlatList } from 'react-native';

export default function Form(){
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ padding: 20 }}>
                <FlatList
                    data={[
                        { key: 'Tokyo' },
                        { key: 'Delhi' },
                        { key: 'Shanghai' },
                        { key: 'Sao Paolo' },
                        { key: 'Mexico City' },
                        { key: 'Cairo' },
                        { key: 'Dhaka' },
                        { key: 'Mumbai' },
                        { key: 'Beijing' },
                        { key: 'Osaka' },
                    ]}
                    renderItem={({ item }) => {
                        return (
                        <View style={{ marginBottom: 10 }}>
                            <Text style={{ fontSize: 20 }}>{item.key}</Text>
                        </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    )
}