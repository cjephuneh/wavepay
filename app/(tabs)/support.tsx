import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Support() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Support</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search help articles..."
            placeholderTextColor="#666"
          />
        </View>
      </View>

      <View style={styles.quickHelp}>
        <Text style={styles.sectionTitle}>Quick Help</Text>
        <View style={styles.helpGrid}>
          {[
            { icon: 'wifi-outline', label: 'Connection Issues' },
            { icon: 'speedometer-outline', label: 'Speed Test' },
            { icon: 'card-outline', label: 'Billing Help' },
            { icon: 'settings-outline', label: 'Setup Guide' },
          ].map((item) => (
            <TouchableOpacity key={item.label} style={styles.helpItem}>
              <View style={styles.helpIcon}>
                <Ionicons name={item.icon} size={24} color="#1a73e8" />
              </View>
              <Text style={styles.helpLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contact Support</Text>
        <View style={styles.contactOptions}>
          <TouchableOpacity style={styles.contactCard}>
            <View style={styles.contactIcon}>
              <Ionicons name="chatbubbles-outline" size={24} color="#1a73e8" />
            </View>
            <Text style={styles.contactTitle}>Live Chat</Text>
            <Text style={styles.contactDescription}>Available 24/7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactCard}>
            <View style={styles.contactIcon}>
              <Ionicons name="call-outline" size={24} color="#1a73e8" />
            </View>
            <Text style={styles.contactTitle}>Call Us</Text>
            <Text style={styles.contactDescription}>Mon-Fri, 9am-6pm</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ticketsSection}>
        <Text style={styles.sectionTitle}>Support Tickets</Text>
        {[
          { id: '#1234', status: 'Open', date: 'Today', issue: 'Connection Issue' },
          { id: '#1233', status: 'Closed', date: 'Yesterday', issue: 'Billing Query' },
        ].map((ticket) => (
          <TouchableOpacity key={ticket.id} style={styles.ticketItem}>
            <View style={styles.ticketHeader}>
              <Text style={styles.ticketId}>{ticket.id}</Text>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: ticket.status === 'Open' ? '#e8f0fe' : '#eee' },
                ]}>
                <Text
                  style={[
                    styles.statusText,
                    { color: ticket.status === 'Open' ? '#1a73e8' : '#666' },
                  ]}>
                  {ticket.status}
                </Text>
              </View>
            </View>
            <Text style={styles.ticketIssue}>{ticket.issue}</Text>
            <Text style={styles.ticketDate}>{ticket.date}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.faqSection}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        {[
          'How do I upgrade my plan?',
          'What payment methods are accepted?',
          'How to check my data usage?',
          'What to do if internet is slow?',
        ].map((question, index) => (
          <TouchableOpacity key={index} style={styles.faqItem}>
            <Text style={styles.faqQuestion}>{question}</Text>
            <Ionicons name="chevron-forward" size={20} color="#666" />
          </TouchableOpacity>
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
  },
  searchContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  quickHelp: {
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
  helpGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  helpItem: {
    width: '47%',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  helpIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#e8f0fe',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  helpLabel: {
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
  },
  contactSection: {
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
  contactOptions: {
    flexDirection: 'row',
    gap: 15,
  },
  contactCard: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  contactIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#e8f0fe',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  contactDescription: {
    fontSize: 14,
    color: '#666',
  },
  ticketsSection: {
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
  ticketItem: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  ticketHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  ticketId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  ticketIssue: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  ticketDate: {
    fontSize: 12,
    color: '#666',
  },
  faqSection: {
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
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  faqQuestion: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
});