import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ExpandablePanel } from '../components/ExpandablePanel';
import { NotificationCard } from '../components/NotificationCard';

// drawer on left for primary navigation
// 3 (?) button-based quick-navigation to 1. Voice Note Capture, 2. OCR Capture, 3. Message Center
export default function Dashboard() {
  const noteNotifPanelTitle = (
    <View>
      <Text style={styles.sectionTitle}>Note Updates</Text>
    </View>
  );
  const messengerNotifPanelTitle = (
    <View>
      <Text style={styles.sectionTitle}>Messenger Updates</Text>
    </View>
  );
  const generalNotifPanelTitle = (
    <View>
      <Text style={styles.sectionTitle}>News</Text>
    </View>
  );
  const body = (
    <NotificationCard children={{
      notificationId: 1,
      notificationTitle: 'title',
      notificationDescription: 'description'
    }}></NotificationCard>
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ExpandablePanel title={noteNotifPanelTitle} styles={styles}>
            {body}
          </ExpandablePanel>
          <View style={{ alignItems: 'center' }}><View style={styles.divider} /></View>
          <ExpandablePanel title={messengerNotifPanelTitle} styles={styles}>
            {body}
          </ExpandablePanel>
          <View style={{ alignItems: 'center' }}><View style={styles.divider} /></View>
          <ExpandablePanel title={generalNotifPanelTitle} styles={styles}>
            {body}
          </ExpandablePanel>
          <View style={{ alignItems: 'center' }}><View style={styles.divider} /></View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  safeArea: {
    flex: 1,
  },
  heading: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  hidden: {
    height: 0,
  },
  list: {
    overflow: 'hidden'
  },
  sectionTitle: {
    fontSize: 16,
    height: 30,
    marginLeft: '5%',
  },
  sectionDescription: {
    fontSize: 12,
    height: 30,
    marginLeft: '5%',
  },
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
  }
});