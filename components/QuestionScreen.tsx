import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const QuestionScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.categoryContainer}>
                <View style={styles.dropdownContainer}>
                    <Text style={styles.categoryText}>Category</Text>
                    <Ionicons name="chevron-down" size={16} color="black" />
                </View>
                <Ionicons name="notifications-outline" size={24} color="black" />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                {['Bitcoin', 'IPL 2024', 'Cricket world cup', 'Ethereum'].map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.cardTitle}>{item}</Text>
                        <Text style={styles.cardSubtitle}>{index % 2 === 0 ? '+2.3%' : '-3.5%'}</Text>
                        <Text style={styles.cardPrice}>$3489</Text>
                    </View>
                ))}
            </ScrollView>

            <Image
                style={styles.bannerImage}
                source={{ uri: 'https://images.unsplash.com/photo-1600965962102-9d260a71890d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
            />
            <View style={styles.rapidFireContainer}>
                <Text style={styles.rapidFireText}>RAPID FIRE</Text>
                <MaterialIcons name="info-outline" size={16} color="black" />
            </View>
            <Text style={styles.questionText}>Kolkata to win the match vs Mumbai?</Text>
            <Text style={styles.matchInfo}>H2H LAST 5 T20: KOLKATA 4, MUMBAI 1, DRAW 0</Text>

            <View style={styles.choiceContainer}>
                <TouchableOpacity style={styles.choiceButtonYes}>
                    <Text style={styles.choiceTextYes}>Yes ₹ 5.3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.choiceButtonNo}>
                    <Text style={styles.choiceTextNo}>No ₹ 4.7</Text>
                </TouchableOpacity>
            </View>

            {/* <View style={styles.bottomNavigation}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Ionicons name="search-outline" size={24} color="black" />
        <Ionicons name="wallet-outline" size={24} color="black" />
        <Ionicons name="person-outline" size={24} color="black" />
      </View> */}
            <View style={styles.bottomNavigation}>
                <View style={styles.iconContainer}>
                    <Ionicons name="home-outline" size={24} color="black" />
                    <Text style={styles.iconText}>Home</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="search-outline" size={24} color="black" />
                    <Text style={styles.iconText}>Search</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="wallet-outline" size={24} color="black" />
                    <Text style={styles.iconText}>Wallet</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="person-outline" size={24} color="black" />
                    <Text style={styles.iconText}>Profile</Text>
                </View>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 16,
        marginTop: 35
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 5,
    },
    horizontalScroll: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
        alignItems: 'center',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardSubtitle: {
        color: '#4caf50',
        fontSize: 12,
    },
    cardPrice: {
        fontSize: 14,
    },
    bannerImage: {
        width: screenWidth - 32,
        height: 150,
        borderRadius: 10,
        marginVertical: 10,
    },
    rapidFireContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rapidFireText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    questionText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    matchInfo: {
        fontSize: 12,
        color: '#666',
    },
    choiceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    choiceButtonYes: {
        backgroundColor: '#D2F5FA',
        borderRadius: 10,
        padding: 10,
        width: '50%',
        alignItems: 'center'
    },
    choiceButtonNo: {
        backgroundColor: '#ffebee',
        borderRadius: 10,
        padding: 10,
        width: '50%',
        alignItems: 'center'
    },
    choiceTextYes: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#78B7F4'
    },
    choiceTextNo: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#F47890'
    },
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
        marginTop: 328
    },
    iconContainer: {
        alignItems: 'center',
    },
    iconText: {
        fontSize: 12,
        marginTop: 5,
        color: 'black',
    },
});

export default QuestionScreen;
