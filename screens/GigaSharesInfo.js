import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView, 
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';
const image=require('../images/tokenizedAssets.png');
const GigaSharesInfo= ({navigation}) => {
  return (
    <View style={{height:'100%'}}>
            <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {
                navigation.navigate('CardList');
              }} />
      <Appbar.Content style={{alignItems:'center'}} title="gigaaa Smart Card" />
    <TouchableOpacity>
    <Appbar.Action icon="dots-vertical"  />
    </TouchableOpacity>
      
    </Appbar.Header>
        <Text style={{top:10,alignSelf:'center',fontWeight:'bold',color:'skyblue'}}>Cards</Text>
          <View style={{top:20,alignSelf:'center'}}>
           <ImageBackground source ={image}style={{height:250, width:380,}} >
               <View style={{left:5,top:10}}>
               <Text style={{color:'white',fontSize:18}}>Giga Shares</Text>
               <Text style={{color:'white',fontSize:18}}>Giga International S.A</Text>
               
               </View>
               <View style={{top:120,left:5}}>
                 <Text style={{color:'white',fontSize:18}}>20.000</Text>
                 <Text style={{color:'white',fontSize:18,}}>Euros</Text>
                 <Text style={{color:'white',fontSize:18,textAlign: 'right',right:30,bottom:70 }}>300,000</Text>
                 <Text style={{color:'white',fontSize:20,fontWeight:'bold',textAlign: 'right',right:30,bottom:70 }}>Pieces</Text>
                 <Text style={{color:'white',fontSize:18,textAlign: 'right',right:30,bottom:70 }}>8.86 Euros/Share</Text>
               </View>
               </ImageBackground>
          
          
          </View>
          <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',top:30,right:10}}>
            <View style={{backgroundColor:'#FF155A',right:100,left:5, height:40,width:'45%', borderRadius:20,}}>
              <TouchableOpacity style={{height:'80%',width:'100%', alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white'}}>Sell</Text>   
             </TouchableOpacity>
          
              </View>
              <View style={{backgroundColor:'#715DFF',right:100,left:10, height:40,width:'45%', borderRadius:20,}}>
              <TouchableOpacity
            //  onPress={()=> navigation.navigate("Screen3")}
              style={{height:'80%',width:'100%', alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white'}}>Buy</Text>   
          </TouchableOpacity>
          
            </View>
           </View>
           <View style={{alignSelf:'center',}}>
          <Text style={{top: 30, fontSize: 20, fontWeight: 'bold',alignSelf:'center'}}>
            Value
          </Text>
          <View style={{display: 'flex',alignSelf:'center',flexWrap:'wrap',width:'80%', flexDirection: 'row', top: 30}}>
            <View style={{right: 50,alignSelf:'center'}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 20, color: '#0B9D88'}}>
                +12%
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 15, color: '#292F58'}}>
                6 MTH
              </Text>
            </View>
            <View style={{right: 20}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 20, color: '#FF155A'}}>
                -0.01%
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 15, color: '#292F58'}}>
                12 MTH
              </Text>
            </View>
            <View style={{left: 10,alignSelf:'center'}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 20, color: '#FF155A'}}>
                -1.99%
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 15, color: '#292F58'}}>
                18 MTH
              </Text>
            </View>
            <View style={{left: 30}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 20, color: '#0B9D88'}}>
                +1.1%
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 15, color: '#292F58'}}>
                24 MTH
              </Text>
            </View>
          </View>
        </View>
         <View style={{top:30,alignSelf:'center',height:40,width:'95%',borderRadius:20,}}>
          
      <Text style={{padding:10,fontWeight:'bold',alignSelf:'center',color:'#4D7099'}}>Last Transactions</Text>
          <View style={{padding:10}}>
              <Text>Receieved Transfer From Paypal</Text>
              <Text style={{textAlign:'right',bottom:20,color:'green'}}>+80.00€</Text>
              <Text style={{color:'#A6A8BA',bottom:10}}>13 April 2017  12:51</Text>
             
          </View>
          <View style={{padding:10,bottom:20}}>
              <Text>Bancomat Cash Withdrawl</Text>
              <Text style={{textAlign:'right',bottom:20,color:'grey'}}>-50.00€</Text>
              <Text style={{color:'#A6A8BA',bottom:10}}>13 April 2017  11:00</Text>
             </View>
             <View style={{padding:10,bottom:30}}>
              <Text>POS Payment Agora AVM</Text>
              <Text style={{color:'red'}}>Declined</Text>
              <Text style={{textAlign:'right',bottom:40,color:'pink'}}>-124.99€</Text>
              <Text style={{color:'#A6A8BA',bottom:10}}>13 April 2017  12:51</Text>
             
          </View>
          <View style={{padding:10,bottom:40}}>
              <Text>Receieved Transfer From Paypal</Text>
              <Text style={{textAlign:'right',bottom:20,color:'grey'}}>-50.00€</Text>
              <Text style={{color:'#A6A8BA',bottom:10}}>13 April 2017  11:00</Text>
             
          </View>
        
        </View>
       
           <BottomTabs/>
        </View>
  );
};
export default GigaSharesInfo;
