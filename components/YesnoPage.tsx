import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const YesNoScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.eventText}>Event 8625</Text>
                <TouchableOpacity onPress={() => { }}>
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1358/1358023.png' }}
                        style={styles.shareIcon}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.titleContainer}>
                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCt9Rsul9nUnSgDlPYK9RvKwHPoAnymPnzbw&s' }}
                    style={styles.iplImage}
                />
                <Text style={styles.title}>Kolkata to win the match vs Mumbai?</Text>
                <View style={styles.tagContainer}>
                    <Text style={styles.tag}>IPL</Text>
                    <Text style={styles.tag}>T20</Text>
                    <Text style={styles.tag}>Cricket</Text>
                </View>
                <View style={styles.h2hContainer}>
                    <Text style={styles.h2hText}>H2H</Text>
                    <Text style={styles.h2hSubText}>Last 5 T20: Kolkata 4, Mumbai 1, DRAW 0</Text>
                </View>
            </View>

            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>THE MARKET TREND / CHART</Text>
                <View style={styles.optionContainer}>
                    <View style={styles.optionItem}>
                        <View style={[styles.colorBox, { backgroundColor: '#0000ff' }]} />
                        <Text style={styles.optionText}>Yes</Text>
                    </View>
                    <View style={styles.optionItem}>
                        <View style={[styles.colorBox, { backgroundColor: '#00ff00' }]} />
                        <Text style={styles.optionText}>No</Text>
                    </View>
                </View>
                <LineChart
                    data={{
                        labels: ['01:30 AM', '02:00 AM', '02:30 AM', '03:00 AM'],
                        datasets: [
                            {
                                data: [40, 60, 80, 70, 50, 40, 90, 100, 40, 60, 80],
                                color: () => '#0000ff',
                            },
                            {
                                data: [60, 50, 40, 70, 80, 45, 30, 40, 50],
                                color: () => '#00ff00',
                            },
                        ],
                    }}
                    width={screenWidth - 40}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#fff',
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        decimalPlaces: 0,
                        color: () => '#000',
                        propsForDots: {
                            r: '0',
                        },
                        strokeWidth: 1,
                        propsForBackgroundLines: {
                            strokeDasharray: '',
                            strokeWidth: 0.2,
                        },
                    }}
                    bezier
                    withDots={false}
                    style={{ marginRight: 2 }}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity><Text style={styles.buttonText}>1 h</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.buttonText}>3 h</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.buttonText}>12 h</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={styles.buttonText}>All time</Text></TouchableOpacity>
                </View>
            </View>

            <View style={styles.activityContainer}>
                <View style={{flexDirection:'row', padding:5}}>
                <Text style={[styles.activityText, {elevation:5}]}>ACTIVITY</Text>
                <Text style={styles.activityText}>ORDER BOOK</Text>
                </View>
                <View style={styles.progressBar}>
                    <View style={styles.profileIconContainer}>
                        <Image source={{ uri: 'https://freesvg.org/img/abstract-user-flat-4.png' }} style={styles.profileIcon} />
                        <Text style={styles.userText}>Hella</Text>
                    </View>
                    <View style={styles.progress}>
                        <View style={styles.progressFill} />
                    </View>
                    <Text style={styles.rupeeText}>₹0</Text>
                    <View style={styles.profileIconContainer}>
                        <Image source={{ uri: 'https://freesvg.org/img/abstract-user-flat-4.png' }} style={styles.profileIcon} />
                        <Text style={styles.userText}>Robin</Text>
                    </View>
                </View>
                <Text style={styles.timestamp}>a few seconds ago</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        marginTop: 30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    eventText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    shareIcon: {
        width: 24,
        height: 24,
    },
    titleContainer: {
        marginVertical: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10
    },
    iplImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tagContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    tag: {
        backgroundColor: '#e0e0e0',
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        borderRadius: 15,
    },
    h2hContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D6F9DA',
        borderRadius: 15,
        padding: 3,
        paddingHorizontal: 15,
        marginVertical: 2
    },
    h2hText: {
        backgroundColor: '#fff',
        padding: 3,
        paddingHorizontal: 5,
        borderRadius: 13,
        marginRight: 5,
    },
    h2hSubText: {
        color: 'black',
    },
    chartContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        // marginVertical: 5,
    },
    chartTitle: {
        fontSize: 16,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        padding: 10,
        backgroundColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 20
    },
    activityContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        elevation: 5, // Added elevation for activity container
    },
    activityText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal:8,
        margin:2,
        // elevation:5
    },
    progressBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileIconContainer: {
        alignItems: 'center',
    },
    profileIcon: {
        width: 32,
        height: 32,
        borderRadius: 12,
        marginBottom: 5,
    },
    userText: {
        width: 50,
        textAlign: 'center',
    },
    progress: {
        flex: 1,
        height: 15,
        backgroundColor: 'black',
        borderRadius: 5,
        marginHorizontal: 10,
    },
    progressFill: {
        width: '50%',
        height: '100%',
        backgroundColor: '#0000ff',
        borderRadius: 5,
    },
    rupeeText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -10 }, { translateY: -10 }],
        color: 'white',
        fontWeight: 'bold',
    },
    timestamp: {
        // marginTop: 5,
        color: '#888',
        fontSize: 12,
        paddingHorizontal:95
    },
    optionContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    optionText: {
        fontSize: 14,
        color: '#000',
    },
    colorBox: {
        width: 10,
        height: 10,
        marginRight: 5,
    },
    orderBookContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
        elevation: 5, // Added elevation for order book container
    },
});

export default YesNoScreen;
