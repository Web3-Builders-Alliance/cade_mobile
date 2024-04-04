import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {MonoTextSmall} from '../components/StylesText';
import BottomSheet from '../components/BottomSheet';
import {MonoText} from '../components/StylesText';
import AccountInfo from '../components/SMSComponents/AccountInfo';
import {useConnection} from '../components/providers/ConnectionProvider';
import {
  Account,
  useAuthorization,
} from '../components/providers/AuthorizationProvider';
import {useAnchorWallet} from '../hooks/useAnchorWallet';
import CallPrizeClaim from '../components/CallInstruction/CallPrizeClaimIns';
import {PublicKey} from '@solana/web3.js';
import ConnectButton from '../components/SMSComponents/ConnectButton';

const PrizeGrid = () => {
  const {connection} = useConnection();
  const [publicKey, setPublickey] = useState<any>();
  const {selectedAccount, authorizeSession} = useAuthorization();
  const anchorWallet = useAnchorWallet(authorizeSession, selectedAccount);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

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

  const [image, setImage] = useState();
  const [name, setName] = useState();
  const itemsPerRow = 3;
  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const setDataForBottomSheet = (name: any, image: any) => {
    setName(name);
    setImage(image);
    openBottomSheet();
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
              <View className="flex justify-center items-center">
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'VT323-Regular',
                    fontSize: 30,
                  }}>
                  {name}
                </Text>
              </View>
              <View className="flex flex-row justify-between  ml-2 mr-2 mt-5">
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'VT323-Regular',
                    fontSize: 25,
                  }}>
                  Quantity - 1
                </Text>
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
                    borderColor: 'red',
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

  const DripCollectionData = [
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
  const renderItems = (CollectionName: any) => {
    return Array.from(
      {length: Math.ceil(CollectionName.length / itemsPerRow)},
      (_, index) => {
        const startIndex = index * itemsPerRow;
        const endIndex = Math.min(
          startIndex + itemsPerRow,
          CollectionName.length,
        );
        const rowColors = CollectionName.slice(startIndex, endIndex);
        return (
          <>
            <View key={index} style={styles.rowContainer}>
              {rowColors.map((item: any, itemIndex: number) => (
                <View key={itemIndex} style={[styles.item]}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        setDataForBottomSheet(item.name, item.img)
                      }>
                      <Image
                        source={item.img}
                        style={{
                          height: 100,
                          width: 100,
                          borderRadius: 5,
                          margin: 10,
                          borderWidth: 0.1,
                          borderColor: 'white',
                        }}
                      />
                      <View className="flex justify-center flex-row items-center">
                        <View>
                          <Image
                            source={item.collectionImage}
                            style={{
                              height: 32,
                              width: 32,
                            }}
                          />
                        </View>
                        <View className="">
                          <MonoTextSmall>{item.name}</MonoTextSmall>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </>
        );
      },
    );
  };
  return (
    <>
      {renderBottomSheet()}
      <View className="flex justify-center items-center">
        {renderItems(CadeStoreData)}
      </View>
      <View className="flex justify-center items-center">
        {renderItems(DripCollectionData)}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 60,
    justifyContent: 'space-between',
    marginTop: 10, // Adjust spacing between rows
  },
  item: {
    width: '30%',
    height: 100,
    marginHorizontal: 5, // Adjust spacing between items
  },
});

export default PrizeGrid;
