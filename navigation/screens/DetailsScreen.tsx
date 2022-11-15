import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Image, FlatList, Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import palette from '../../palette';

export default function DetailsScreen({ navigation }) {
    const [dataSource, setDataSource] = useState([]);
    function handleClick(url:string) {
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          } else {
            alert("Don't know how to open URI: " + url);
          }
        });
    };
    useEffect(() => {
        let items = Array.apply(null, Array(10)).map((v, i) => {
            return {
                id: i,
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Mojang_icon_2020.svg/1200px-Mojang_icon_2020.svg.png',
                link: 'https://www.dineritopagos.com',
            };
        });
        setDataSource(items);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
            }}>
                <View style={[{alignSelf: "flex-start", flex: 0.5}]}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                    <Image style={{width: 50, height:50}} source={require("../../assets/chevron_left2.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 7,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center"
                }}>
                    <Image style={{width: 110, height: 160}} source={require("../../assets/component6.png")} />
                    <Text style={
                                [styles.title1, 
                                {marginBottom: '5%', justifyContent: "center", alignContent: "center", alignItems: "center"}
                            ]
                            }>BAMX nace con un solo objetivo. LLevar comida a las familias y personas que lo necesitan</Text>
                    <Text
                        style={{
                            fontSize: 13,
                            fontWeight: "bold",
                            marginBottom: 10,
                            textAlign: "center",
                            justifyContent: "center", 
                            alignContent: "center", 
                            alignItems: "center",
                            paddingHorizontal: 15,
                        }}
                    >
                        BAMX Agradece infinitamente a las siguientes empresas por su alianza y apoyo directo
                    </Text>
                </View>
                <View style={{flex: 9, marginBottom: 15}}>
                    <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    style={{width: "100%"}}
                        data={dataSource}
                        renderItem={({item}) => (
                        <View
                            style={{
                            flexDirection: 'column',
                            margin: 4,
                            }}>
                            <TouchableOpacity onPress={() => handleClick(item.link)}>
                                <Image
                                    style={{width: 120,
                                        height: 120,
                                        resizeMode: 'contain'}} source={{uri:(item.src)}}
                                />
                            </TouchableOpacity>
                        </View>
                        )}
                        //Setting the number of column
                        numColumns={3}
                        keyExtractor={(item, index) => String(index)}
                    />
                </View>
                <View style={[{flexDirection: 'row', flex: 1.5}, styles.button_container]}>
                    <TouchableOpacity
                        style={styles.button_style}
                        onPress={() => null}
                    >
                    <Text style={styles.button_text}>Ser aliado</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button_style}
                        onPress={() => null}
                    >
                    <Text style={styles.button_text}>Ser voluntario</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    hello: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    container: {
      flex: 1,
      backgroundColor: palette.background,
      alignItems: 'center', 
      justifyContent: 'center'
    },
    title1: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "center"
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
    button_style: {
        flex: 1,
        width: 180,
        backgroundColor: palette.primaryRed,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginHorizontal: 5
      },
      button_text: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 18,
      },
      button_container: {
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
      },
  });
  