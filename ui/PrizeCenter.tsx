import {
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
  ImageBackground,
  Text,
  ScrollView,
} from 'react-native';
import React, {useRef, useCallback, useMemo, useEffect, useState} from 'react';
import {MonoText, MonoTextSmall} from '../components/StylesText';
import PrizeGrid from './PrizesGrid';
const {height, width} = Dimensions.get('window');
import BottomSheet from '../components/BottomSheet';
import ConnectButton from '../components/SMSComponents/ConnectButton';
import {useConnection} from '../components/providers/ConnectionProvider';
import {
  Account,
  useAuthorization,
} from '../components/providers/AuthorizationProvider';
import {useAnchorWallet} from '../hooks/useAnchorWallet';
import CallPrizeClaim from '../components/CallInstruction/CallPrizeClaimIns';
import {PublicKey} from '@solana/web3.js';

export default function MachineSliderWithButtons({red}: {red: boolean}) {
  const {connection} = useConnection();
  const [publicKey, setPublickey] = useState<any>();
  const {selectedAccount, authorizeSession} = useAuthorization();
  const anchorWallet = useAnchorWallet(authorizeSession, selectedAccount);
  const fetchAndUpdateBalance = useCallback(
    async (account: Account) => {
      console.log('Fetching balance for: ' + account.publicKey);
      setPublickey(account.publicKey);
    },
    [connection],
  );

  useEffect(() => {
    if (!selectedAccount) {
      return;
    }
    fetchAndUpdateBalance(selectedAccount);
  }, [fetchAndUpdateBalance, selectedAccount]);

  const DripCollectionData = [
    {
      name: 'Comic NFT',
      img: require('../assets/images/drip2.jpg'),
      price: '10',
      collectionName: 'Drip',
      collectionImage: require('../assets/images/drip.jpg'),
      info: {
        mint: null,
        config: null,
      },
    },
    {
      name: 'havea Stamp',
      img: require('../assets/images/drip1.png'),
      price: '5',
      collectionName: 'Drip',
      collectionImage: require('../assets/images/drip.jpg'),
      info: {
        mint: null,
        config: null,
      },
    },
    {
      name: 'Lets Stamp',
      img: require('../assets/images/drip3.png'),
      price: '5',
      collectionName: 'Drip',
      collectionImage: require('../assets/images/drip.jpg'),
      info: {
        mint: null,
        config: null,
      },
    },
    {
      name: 'Drip Art NFT#1',
      img: require('../assets/images/drip4.jpg'),
      price: '10',
      collectionName: 'Drip',
      collectionImage: require('../assets/images/drip.jpg'),
      info: {
        mint: null,
        config: null,
      },
    },
    {
      name: 'Drip Art NFT#2',
      img: require('../assets/images/drip5.gif'),
      price: '10',
      collectionName: 'Drip',
      collectionImage: require('../assets/images/drip.jpg'),
      info: {
        mint: null,
        config: null,
      },
    },
    {
      name: 'havea Stamp',
      img: require('../assets/images/drip1.png'),
      price: '5',
      collectionName: 'Drip',
      collectionImage: require('../assets/images/drip.jpg'),
      info: {
        mint: null,
        config: null,
      },
    },
  ];
  const CadeStoreData = [
    {
      name: 'Cade Life',
      img: require('../assets/images/heartr.png'),
      desc: 'Play Again If You Loose',
      price: '2',
      collectionName: 'Cade',
      collectionImage: require('../assets/images/cade.png'),
      info: {
        mint: null,
        config: null,
      },
    },
    {
      name: 'GamePass',
      img: require('../assets/images/freeticket.webp'),
      desc: 'Open Chest for Exited Suprizes',
      price: '5',
      collectionName: 'Cade',
      collectionImage: require('../assets/images/cade.png'),
      info: {
        mint: '',
        config: '',
      },
    },
    {
      name: 'BlindChest',
      img: require('../assets/images/treasure.png'),
      desc: 'Sol Loaded Lottery Tickets for Periodic Drawings',
      price: '3',
      collectionName: 'Cade',
      collectionImage: require('../assets/images/cade.png'),
      info: {
        mint: null,
        config: null,
      },
    },
  ];

  const background_image = require('../assets/images/brickwall.jpg');
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [currentCollection, setCurrentCollection] =
    useState(DripCollectionData);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const renderBottomSheet = () => {
    return (
      <>
        <BottomSheet visible={bottomSheetVisible} onClose={closeBottomSheet}>
          <ScrollView nestedScrollEnabled={true}>
            <View>
              <View>
                <MonoText>Confirm Your Transaction</MonoText>
              </View>
              <View className="flex justify-center items-center mt-10">
                <Image style={{height: 300, width: 300}} source={image} />
              </View>
              <View className="flex flex-row justify-between  ml-2 mr-2 mt-5">
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'VT323-Regular',
                    fontSize: 25,
                  }}>
                  {name}
                </Text>
              </View>
              <View className="mt-3 ml-2">
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'VT323-Regular',
                    fontSize: 25,
                  }}>
                  Holder - 100
                </Text>
              </View>
              <View className="flex flex-col items-center mt-5">
                <View style={{width: '90%'}}>
                  {publicKey ? (
                    <>
                      <CallPrizeClaim
                        anchorWallet={anchorWallet}
                        onComplete={() => console.log('DONE')}
                        config={
                          new PublicKey(
                            '9RA5sBfFVrEXn7PYccNLhuB2k8fBFKy6CX5jjNZH92XT',
                          )
                        }
                        mint={
                          new PublicKey(
                            'BjwKL4x9TjoBgzkgBW14bzn1ocu7HX8up63qXG9AFWE9',
                          )
                        }
                      />
                    </>
                  ) : (
                    <>
                      <ConnectButton title="Connect Wallet" />
                    </>
                  )}
                </View>
                <TouchableOpacity
                  className="border-2 mt-5"
                  style={{
                    width: '90%',
                    height: 45,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderColor: 'yellow',
                  }}
                  onPress={closeBottomSheet}>
                  <MonoTextSmall style={{color: 'black'}}>Cancel</MonoTextSmall>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </BottomSheet>
      </>
    );
  };

  const changeCollection = collectionName => {
    switch (collectionName) {
      case 'Cade':
        setCurrentCollection(CadeStoreData);
        break;
      case 'Drip':
        setCurrentCollection(DripCollectionData);
        break;
      case 'Soda':
        setCurrentCollection('');
        break;
    }
  };

  const showNextItem = () => {
    if (currentIndex <= CadeStoreData.length - 2) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex, CadeStoreData.length);
    } else {
      setCurrentIndex(0);
    }
  };

  const showPrevItem = () => {
    if (currentIndex != 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const setDataForBottomSheet = (name: any, image: any) => {
    setName(name);
    setImage(image);
    openBottomSheet();
  };
  return (
    <>
      {renderBottomSheet()}
      <View style={{flex: 1, position: 'relative'}}>
        <View
          style={{
            height: height / 2 - 45,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -25,
            zIndex: -10,
          }}>
          <ImageBackground
            style={{flex: 1}}
            borderRadius={5}
            source={background_image}>
            <View style={{marginLeft: 20}} className="absolute top-1/2">
              <MonoText>{'<'}</MonoText>
            </View>
            <View
              style={{marginRight: 20}}
              className="absolute top-1/2 right-0">
              <MonoText>{'>'}</MonoText>
            </View>
            <Animated.View
              style={{
                width: width - 40,
                height: height / 2 + 135,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{marginBottom: 54}}
                className="absolute top-0 mt-8 bg-black border-4 border-white rounded-md">
                {currentCollection.map((item, index) => {
                  if (index == currentIndex) {
                    return (
                      <>
                        <Image
                          style={{height: 200, width: 200}}
                          source={item.img}
                        />
                      </>
                    );
                  }
                })}
              </View>
              <View
                className="absolute top-1/2 left-0 translate-x-10  bg-blue-500 border-4 border-black"
                style={{height: 100, width: 300}}>
                <View className="absolute top-1/4  bg-red-500 items-center w-full">
                  <MonoText style={{color: 'white'}}>Prize Center</MonoText>
                </View>
              </View>
              <View
                className="absolute top-1/4 bg-gray-500 border-4 border-black w-full items-center"
                style={{height: 35, width: 350, marginTop: 110}}>
                <MonoTextSmall>
                  {currentCollection[currentIndex].name}
                </MonoTextSmall>
              </View>
            </Animated.View>
          </ImageBackground>
        </View>
        <View className="flex flex-row">
          <View
            className="w-1/5"
            id="button"
            style={{
              alignItems: 'center',
              marginTop: 10,
              zIndex: -10,
            }}>
            <TouchableOpacity
              className="border-2"
              style={{
                width: '90%',
                height: 45,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: red ? '#EF4444' : '#EAB308',
              }}
              onPress={showPrevItem}>
              <MonoTextSmall style={{color: 'black'}}>{'<'}</MonoTextSmall>
            </TouchableOpacity>
          </View>
          <View
            className="w-3/5"
            id="button"
            style={{
              alignItems: 'center',
              marginTop: 10,
              zIndex: -10,
            }}>
            <TouchableOpacity
              className="border-2"
              style={{
                width: '90%',
                height: 45,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: red ? '#EF4444' : '#EAB308',
              }}
              onPress={() =>
                setDataForBottomSheet(
                  currentCollection[currentIndex].name,
                  currentCollection[currentIndex].img,
                )
              }>
              <MonoTextSmall style={{color: 'black'}}>Preview</MonoTextSmall>
            </TouchableOpacity>
          </View>
          <View
            className="w-1/5"
            id="button"
            style={{
              alignItems: 'center',
              marginTop: 10,
              zIndex: -10,
            }}>
            <TouchableOpacity
              className="border-2"
              style={{
                width: '90%',
                height: 45,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: red ? '#EF4444' : '#EAB308',
              }}
              onPress={showNextItem}>
              <MonoTextSmall style={{color: 'black'}}>{'>'}</MonoTextSmall>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-3">
          <Text
            style={{fontFamily: 'VT323-Regular', fontSize: 28, color: 'white'}}>
            Our Collections
          </Text>
        </View>
        <View className="flex flex-row items-center justify-center gap-x-5 mt-3">
          <TouchableOpacity onPress={() => changeCollection('Cade')}>
            <Image
              source={require('../assets/images/cade.png')}
              style={{
                height: 80,
                width: 80,
                backgroundColor: 'black',
                borderColor: 'white',
                borderWidth: 0.2,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCollection('Drip')}>
            <Image
              source={require('../assets/images/drip.jpg')}
              style={{
                height: 80,
                width: 80,
                backgroundColor: 'black',
                borderColor: 'white',
                borderWidth: 0.2,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCollection('Cade')}>
            <Image
              source={require('../assets/images/soda.jpg')}
              style={{
                height: 80,
                width: 80,
                backgroundColor: 'black',
                borderColor: 'white',
                borderWidth: 0.2,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCollection('Cade')}>
            <Image
              source={require('../assets/images/wba.jpg')}
              style={{
                height: 80,
                width: 80,
                backgroundColor: 'black',
                borderColor: 'white',
                borderWidth: 0.2,
                borderRadius: 5,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{zIndex: -10}}>
          <View className="mt-2">
            <Text
              style={{
                fontFamily: 'VT323-Regular',
                fontSize: 28,
                color: 'white',
              }}>
              More Prizes
            </Text>
          </View>
          <View style={{zIndex: -10}}>
            <PrizeGrid />
          </View>
        </View>
      </View>
    </>
  );
}
