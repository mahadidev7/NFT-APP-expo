import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import React from 'react'

import { COLORS, SHADOWS, FONTS, assets, SIZES } from '../constants'
import FocusedStatusber from '../components/FocusedStatusber'

import { CircleButton, RectButton } from "../components/Button";
import DetailsBid from '../components/DetailsBid';
import {SubInfo} from '../components/SubInfo';
import DetailsDesc from '../components/DetailsDesc';

const DetailsHeader = ({data, navigation})=> (
  <View style={{width: '100%', height: 373}}>
    <Image 
      source={data.image}
      resizeMode="cover"
      style={{width: '100%', height:'100%'}}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight - 20}
    />
    
    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight - 20}
    />
  </View>
)

const Datails = ({route, navigation}) => {
  const {data} = route.params

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusber
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />
      <View style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        paddingVertical: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255,0.5)",
        zIndex: 1,

      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList
        data={data.bids}
        renderItem = {({item})=> <DetailsBid bid={item} /> }
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={()=> (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo data={data} />
            <View style={{padding: SIZES.font}}>
              <DetailsDesc data={data} />

              {
                data.bids.length > 0 && (
                  <Text style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary
                  }}>
                    Current Bids
                  </Text>
                )
              }
            </View>
          </>
        )}
      />
    </SafeAreaView>
  )
}

export default Datails