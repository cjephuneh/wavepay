import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

// Dummy Data
const user = {
  name: 'Caleb',
  planName: '6 Mbps Home-Revamped',
  daysLeft: 0,
  balance: 1500,
  usage: {
    used: 3,
    total: 10
  }
};

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={require('../../assets/images/logo.webp')} style={styles.logo} />
        <Text style={styles.greeting}>Good Afternoon, {user.name}</Text>
        <TouchableOpacity style={styles.notificationIcon}>
          <Text style={styles.iconText}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Current Plan Overview */}
      <View style={styles.planOverview}>
        <Text style={styles.planName}>{user.planName}</Text>
        <Text style={styles.daysLeft}>Days left: {user.daysLeft} day(s)</Text>
        <Text style={styles.balance}>Balance: Ksh {user.balance}</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>Status: Active</Text>
        </View>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Change Plan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Manage Router</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Usage Tracker */}
      <View style={styles.usageTracker}>
        <Text style={styles.usageTitle}>Data Usage</Text>
        <Text style={styles.usageInfo}>{user.usage.used}GB used of {user.usage.total}GB</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(user.usage.used / user.usage.total) * 100}%` }]} />
        </View>
      </View>

      {/* Account Management */}
      <View style={styles.accountManagement}>
        <Text style={styles.accountBalance}>Account Balance: Ksh {user.balance}</Text>
        <TouchableOpacity style={styles.topUpButton}>
          <Text style={styles.buttonText}>Top Up</Text>
        </TouchableOpacity>
      </View>

      {/* Payment History */}
      <View style={styles.paymentHistory}>
        <TouchableOpacity>
          <Text style={styles.link}>View Payment History</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    width: 50,
    height: 50
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  notificationIcon: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 50
  },
  iconText: {
    fontSize: 20
  },
  planOverview: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 8
  },
  planName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  daysLeft: {
    fontSize: 14,
    color: '#888'
  },
  balance: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  statusContainer: {
    marginVertical: 10,
    backgroundColor: '#e0f7fa',
    padding: 8,
    borderRadius: 8
  },
  statusText: {
    color: '#00796b',
    fontWeight: 'bold'
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#00796b',
    padding: 10,
    borderRadius: 5,
    margin: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  usageTracker: {
    marginBottom: 20
  },
  usageTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  usageInfo: {
    fontSize: 14,
    color: '#888'
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: '#f1f1f1',
    borderRadius: 5
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#00796b',
    borderRadius: 5
  },
  accountManagement: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 8
  },
  accountBalance: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  topUpButton: {
    backgroundColor: '#00796b',
    padding: 10,
    borderRadius: 5,
    marginTop: 10
  },
  paymentHistory: {
    alignItems: 'center',
    marginTop: 20
  },
  link: {
    color: '#00796b',
    textDecorationLine: 'underline'
  }
});

export default HomePage;
