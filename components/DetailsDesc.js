import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, FONTS, SIZES } from '../constants'

const DetailsDesc = ({data}) => {
    const [description, setdescription] = useState(data.description.slice(0, 100));
    const [readMore, setReadMode] = useState(false);
  return (
    <>
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <NFTTitle title={data.name} subTitle={data.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.font} />
            <EthPrice price={data.price}/>
        </View>
        <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
            <Text style={{
                fontSize: SIZES.font,
                fontFamily: FONTS.semiBold,
                color: COLORS.primary,
            }}>Description </Text>
            <View style={{ marginTop: SIZES.base}}>
                <Text style={{
                    fontSize: SIZES.small,
                    fontFamily: FONTS.regular,
                    color: COLORS.secondary,
                    lineHeight: SIZES.large,
                    textAlign: 'justify',
                }}>
                    {description}
                    {!readMore && '... '}
                    <Text 
                        style={{
                        fontSize: SIZES.small,
                        fontFamily: FONTS.semiBold,
                        color: COLORS.primary,
                        }}
                        onPress={()=> {
                            if(!readMore){
                                setdescription(data.description)
                                setReadMode(true)
                            }else{
                                setdescription(data.description.slice(0, 100))
                                setReadMode(false)
                            }
                        }}
                    >
                        {readMore ? ' Show Less ' : ' Read More '}
                    </Text>
                </Text>
            </View>
        </View>
    </>
  )
}

export default DetailsDesc