import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categoryData = [{
  "category": "Cricket",
  "imageUrl": "https://img.freepik.com/premium-vector/cricket-player-logo-design-vector-icon-symbol-template-illustration_647432-117.jpg?w=740"
}, {
  "category": "Crypto",
  "imageUrl": "https://cdn.pixabay.com/photo/2018/08/30/12/24/bitcoin-3642042_1280.png"
},
{
  "category": "Football",
  "imageUrl": "https://contents.mediadecathlon.com/p2154120/15d2519978c2382c9ab019fc1a8e7dce/p2154120.jpg?format=auto&quality=70&f=650x0"
},
{
  "category": "Stocks",
  "imageUrl": "https://cdn.vectorstock.com/i/1000x1000/44/91/growing-graphic-solid-icon-growth-stocks-vector-24034491.webp"
},
{
  "category": "Economy",
  "imageUrl": "https://cdn-icons-png.flaticon.com/512/3310/3310624.png"
},
{
  "category": "Badminton",
  "imageUrl": "https://cdn-icons-png.flaticon.com/512/2828/2828920.png"
},
{
  "category": "Olympics",
  "imageUrl": "https://cdn-icons-png.flaticon.com/512/523/523676.png"
},
{
  "category": "Kabaddi",
  "imageUrl": "https://cdn-icons-png.flaticon.com/512/11171/11171413.png"
}
]

const IMAGE_URL = 'https://contents.mediadecathlon.com/p2154120/15d2519978c2382c9ab019fc1a8e7dce/p2154120.jpg?format=auto&quality=70&f=650x0';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="person-outline" style={styles.profile} size={24} color="black" />
        <Ionicons name="notifications-outline" style={styles.notification} size={24} color="black" />
      </View>
      <Image
        style={styles.bannerImage}
        source={{ uri: 'https://images.unsplash.com/photo-1600965962102-9d260a71890d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} // Replace with your image URL
      />
      <View style={styles.categories}>
        <ScrollView horizontal>
          {categoryData.map((eachCategory, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Image source={{ uri: eachCategory.imageUrl }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{eachCategory.category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Text style={styles.sectionTitle}>Trending Now</Text>
      <ScrollView horizontal style={styles.trendingNow}>
        {['KOL v/s MUMB', 'PSG v/s Dortmund', 'Bitcoin', 'Growth'].map((trend) => (
          <TouchableOpacity key={trend} style={styles.trendingButton}>
            <Text style={styles.trendingText}>{trend}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {[1, 2].map((_, index) => (
        <View key={index} style={styles.betCard}>
          <Text style={styles.betTitle}>Kolkata to win the match vs Mumbai?</Text>
          <Text style={styles.betSubtitle}>H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0</Text>
          <View style={styles.betOptions}>
            <TouchableOpacity style={styles.yesButton}>
              <Text style={styles.yesText}>Yes ₹ 5.3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.noButton}>
              <Text style={styles.noText}>NO ₹ 4.7</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  bannerImage: {
    width: '95%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 20,
    marginLeft: 10,
  },
  categories: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginVertical: 16,
  },
  categoryButton: {
    alignItems: 'center',
    margin: 2,
    padding: 5,
    borderColor: "black",
    width: 70,
    // borderWidth:2,
    borderRadius: 10,
    backgroundColor: "#fff"
  },
  categoryImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  categoryText: {
    fontSize: 14,
    color: '#000',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  trendingNow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  trendingButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  trendingText: {
    fontSize: 14,
    color: '#000',
  },
  betCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  betTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  betSubtitle: {
    fontSize: 14,
    color: '#888',
    marginVertical: 8,
  },
  betOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yesButton: {
    padding: 10,
    backgroundColor: '#d0f0c0',
    borderRadius: 20,
  },
  yesText: {
    color: '#000',
  },
  noButton: {
    padding: 10,
    backgroundColor: '#f0c0c0',
    borderRadius: 20,
  },
  noText: {
    color: '#000',
  },
  profile: {
    backgroundColor: '#EFEFEC',
    borderRadius: 15,
    // width:30,
    // height:30,
    justifyContent: 'center',
    padding: 5
  },
  notification: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    // width:30,
    // height:30,
    justifyContent: 'center',
    padding: 5
  }
});

export default HomeScreen;
