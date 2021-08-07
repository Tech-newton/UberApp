import React from 'react'
import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const data=[
    {
        id:"123",
        title:"Get a Ride",
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen",
    },
    {
        id:"456",
        title:"Order Food",
        image:"https://links.papareact.com/28w",
        screen:"EatScreen",
    }
];

const NavOptions = () => {
    const navigation=useNavigation();

    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
                <TouchableOpacity
                onPress={()=> navigation.navigate(item.screen)}
                 style={[tw`p-4 pl-6 pb-4 pt-4 bg-gray-300 m-2 w-40`]}>
                    <View>
                        <Image
                            source={{
                                uri:item.image
                            }}
                            style={{
                                width:120,
                                height:120,
                                resizeMode:"contain",
                            }}
                        />
                        <Text style={[tw`mt-2 text-lg font-semibold`]}>{item.title}</Text>
                        <Icon
                            name='arrow-circle-right'
                            type='font-awesome'
                            // color='#212529'
                            // raised
                            style={[tw`ml-0 w-10`]}
                            size={37}
                        />
                    </View>
                </TouchableOpacity>
            )}
        >

        </FlatList>
    )
}

export default NavOptions

const styles = StyleSheet.create({
    icon:{
        fontSize:20,
    },
})
