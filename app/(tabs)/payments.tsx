import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Payments() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Payments</Text>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Current Balance</Text>
          <Text style={styles.balanceAmount}>$45.20</Text>
          <Text style={styles.dueDate}>Due in 15 days</Text>
        </View>
      </View>

      <View style={styles.paymentOptions}>
        <Text style={styles.sectionTitle}>Payment Options</Text>
        <View style={styles.optionsGrid}>
          {[
            { icon: 'card-outline', label: 'Pay Full' },
            { icon: 'timer-outline', label: 'Schedule' },
            { icon: 'wallet-outline', label: 'Pay Partial' },
            { icon: 'repeat-outline', label: 'Auto Pay' },
          ].map((option) => (
            <TouchableOpacity key={option.label} style={styles.optionItem}>
              <View style={styles.optionIcon}>
                <Ionicons name={option.icon} size={24} color="#1a73e8" />
              </View>
              <Text style={styles.optionLabel}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.recentTransactions}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        {[
          { date: 'Mar 15, 2024', amount: '$49.99', status: 'Completed' },
          { date: 'Feb 15, 2024', amount: '$49.99', status: 'Completed' },
          { date: 'Jan 15, 2024', amount: '$49.99', status: 'Completed' },
        ].map((transaction, index) => (
          <View key={index} style={styles.transactionItem}>
            <View style={styles.transactionIcon}>
              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            </View>
            <View style={styles.transactionInfo}>
              <Text style={styles.transactionDate}>{transaction.date}</Text>
              <Text style={styles.transactionStatus}>{transaction.status}</Text>
            </View>
            <Text style={styles.transactionAmount}>{transaction.amount}</Text>
          </View>
        ))}
      </View>

      <View style={styles.paymentMethods}>
        <Text style={styles.sectionTitle}>Saved Payment Methods</Text>
        {[
          { type: 'Visa', last4: '4242', icon: 'card' },
          { type: 'PayPal', last4: 'user@email.com', icon: 'logo-paypal' },
        ].map((method, index) => (
          <View key={index} style={styles.methodItem}>
            <View style={styles.methodIcon}>
              <Ionicons name={method.icon} size={24} color="#1a73e8" />
            </View>
            <View style={styles.methodInfo}>
              <Text style={styles.methodType}>{method.type}</Text>
              <Text style={styles.methodDetails}>Ending in {method.last4}</Text>
            </View>
            <TouchableOpacity style={styles.methodAction}>
              <Ionicons name="ellipsis-vertical" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  balanceCard: {
    backgroundColor: '#1a73e8',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  balanceLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginBottom: 5,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dueDate: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
  paymentOptions: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  optionItem: {
    width: '47%',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  optionIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#e8f0fe',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  optionLabel: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
  recentTransactions: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionIcon: {
    marginRight: 15,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionDate: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  transactionStatus: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  paymentMethods: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  methodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  methodIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#e8f0fe',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  methodInfo: {
    flex: 1,
  },
  methodType: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  methodDetails: {
    fontSize: 14,
    color: '#666',
  },
  methodAction: {
    padding: 5,
  },
});