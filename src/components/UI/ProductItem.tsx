import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

import Ripple from 'react-native-material-ripple';
import constants from '../../constants/constants';
import { EXTRA_SMALL, MEDIUM, SMALL } from '../../constants/fonts';
import Icon from '@expo/vector-icons/Ionicons';

const Width = Dimensions.get('window').width;
const windowWidth = Width - 60;

const ProductItem = (props: any) => {
    const [liked, setLiked] = useState<boolean>(false);

    return (
        <View style={[styles.container, { marginLeft: props.marginLeft }]}>
            <View>
                <ImageBackground
                    resizeMode="contain"
                    style={{ height: 156, width: '100%', position: 'absolute' }}
                    imageStyle={{ borderRadius: 15 }}
                    source={{
                        uri: 'https://c0.wallpaperflare.com/preview/852/749/117/dark-minimalism-smartwatch-smartphone.jpg',
                    }} />
                <View style={styles.heartViewStyle}>
                    <Ripple
                        onPress={() => setLiked(!liked)}
                        rippleCentered={true}
                        rippleContainerBorderRadius={50}
                        style={styles.rippleStyle}>
                        <Icon
                            onPress={() => {
                                console.warn('decrement');
                            }}
                            name={liked ? 'heart' : 'heart-outline'}
                            size={15}
                            color={constants.primary}
                        />
                    </Ripple>
                </View>
            </View>
            {/* </ImageBackground> */}

            <View style={styles.contentViewStyle}>
                <Text style={styles.nameTextStyle}>ZAGATO Messenger</Text>

                <Text style={{ flexDirection: 'row' }}>
                    <Icon name={'star'} size={12} color={constants.primary} />
                    <View style={{ width: 3 }} />
                    <Text style={{ color: constants.primary, fontSize: SMALL }}>4.7</Text>
                </Text>

                <View style={{ height: 33, flexDirection: 'row', marginTop: 2 }}>
                    <View style={styles.textViewStyle}>
                        <Text style={styles.textStyle}>#5000</Text>
                    </View>
                    <View style={styles.buttonViewStyle}>
                        <Ripple
                            rippleCentered={true}
                            rippleContainerBorderRadius={40}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>Add to cart</Text>
                        </Ripple>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    container: {
        height: 230,
        width: windowWidth / 2,
        borderRadius: 15,
        borderColor: constants.primary,
        borderWidth: 1,
        backgroundColor: '#FFFBF5',
        alignSelf: 'center',
        marginTop: 20,
    },
    heartViewStyle: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rippleStyle: {
        height: 40,
        width: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentViewStyle: {
        flex: 1,
        marginRight: 10,
        marginLeft: 10,
    },
    nameTextStyle: {
        color: constants.black,
        fontSize: SMALL,
        fontWeight: 'bold',
        paddingTop: 2,
    },
    textViewStyle: { flex: 1 },
    textStyle: {
        color: constants.black,
        fontSize: MEDIUM,
        fontWeight: 'bold',
    },
    buttonViewStyle: {
        flex: 2,
        alignItems: 'flex-end',
    },
    buttonStyle: {
        height: 22,
        width: 75,
        borderRadius: 40,
        backgroundColor: constants.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextStyle: {
        fontSize: EXTRA_SMALL,
        fontWeight: 'bold',
        color: constants.secondary,
    },
});
