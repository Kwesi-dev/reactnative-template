import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
const Card = ({ details }) => {
  return (
    <View style={{width: "100%", marginBottom: 20, display: 'flex', flexDirection: "row",justifyContent: 'space-between', height: 190, borderRadius: 10,  backgroundColor: details.bgColor, padding: 20}}>
        <View style={{flex: 0.4, width: 40, height: 40, marginRight: 10,  borderRadius: 40/2, backgroundColor: details.pColor ? details.pColor : "#4374E5"}}>
        </View>
        <View style={{flex: 2.5}}>
            <View style={{display: 'flex', flexDirection: "row", alignItems: "center"}}>
                <Text style={{fontSize: 18, marginRight: 40, color: "#B4DAFF", fontWeight: 'bold'}}>Small stuffs adds up</Text>
                <Text style={{fontSize: 12, color: "#B4DAFF"}}>19 feb, 2022</Text>
            </View>
            <Text style={{ lineHeight: 22, fontSize: 12, color: "#B4DAFF", marginTop: 10}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut omnis vel unde quo illo asperiores, nobis, expedita eum excepturi corporis.
            </Text>
            <View style={{marginTop: 15, display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                <TouchableOpacity style={{width: 150, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: "#ffff", borderRadius: 20}}>
                    <Text style={{fontSize: 12}}>SETUP A GOAL</Text>
                </TouchableOpacity>
                <MaterialIcons name="favorite-border" size={24} color="#ffff" />
            </View>
        </View>
    </View>
  )
}

export default Card