import React from 'react';
import { View,Alert, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const Privacy = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 100 }}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <FontAwesomeIcon icon={faChevronLeft} size={20} color="#75429C" />
                </TouchableOpacity>
                {/* <View style={styles.header}>
                    <Text style={[styles.headerTitle, { color: '#75429C' }]}>Privacy
                    </Text>
                    <Text style={styles.headerTitle}>Policy</Text>
                </View> */}
            </View>


            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <View style={styles.header}>
                    <Text style={[styles.headerTitle, { color: '#75429C' }]}>Privacy
                    </Text>
                    <Text style={styles.headerTitle}>Policy</Text>
                </View>
                <Text style={styles.sectionTitle}>Effective Date: [Insert Date]</Text>
                <Text style={styles.bodyText}>
                    This Privacy Policy describes how Astro Buddy we collects, uses, shares, and protects your personal information when you use our mobile application Astrobuddy.
                </Text>


                <Text style={styles.sectionTitle}>1. Information We Collect</Text>
                <Text style={styles.bodyText}>
                    We collect personal details such as your name, email, and payment details for better user experience and app functionality.
                </Text>


                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>Personal Information  : </Text>
                    Name, date of birth, address, phone number, email ID, and identity verification details.
                </Text>
                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>Sensitive Information : </Text>
                    With your consent, we may collect payment details (credit/debit card, bank account, or other payment instrument details) and biometric information (e.g., facial features or physiological data for security features).                </Text>
                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>Usage Data : </Text>
                    We track user behavior, preferences, and interactions for analysis and service enhancement.
                </Text>
                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>Usage Data : </Text>
                    We track user behavior, preferences, and interactions for analysis and service enhancement.
                </Text>
                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>Third-Party Data : </Text>
                    If you use integrated third-party services, their data policies apply. We are not responsible for their privacy practices.
                </Text>

                <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>
                <Text style={styles.bodyText}>
                    Your data is used for app functionality, customer support, and personalized recommendations.
                </Text>
                <Text style={styles.bodyText}>
                    Providing and improving App features and services.
                </Text>
                <Text style={styles.bodyText}>
                    Processing transactions and fulfilling orders.
                </Text>
                <Text style={styles.bodyText}>
                    Enhancing user experience and providing personalized recommendations.
                </Text>
                <Text style={styles.bodyText}>
                    Troubleshooting, security, and fraud prevention.
                </Text>
                <Text style={styles.bodyText}>
                    Sending notifications about offers and updates (with opt-out options).
                </Text>
                <Text style={styles.bodyText}>
                    Compliance with legal and regulatory requirements.
                </Text>

                <Text style={styles.sectionTitle}>3.Sharing of Information</Text>
                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>With Affiliates & Partners : </Text>
                    To improve services and provide seamless access to products.
                </Text>
                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>With Third-Party Service Providers : </Text>
                    For payment processing, logistics, and support.
                </Text>
                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>
                        For Legal Compliance : </Text>As required by law enforcement or government agencies.
                </Text>
                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>To Prevent Fraud : </Text>
                    To protect users, enforce our policies, and safeguard our platform.
                </Text>

                <Text style={styles.sectionTitle}>4.Security Measures</Text>
                <Text style={styles.bodyText}>
                    We implement security measures to protect your data from unauthorized access, loss, or misuse. However, as data transmission over the internet is not completely secure, users should take necessary precautions, including protecting login credentials.                </Text>

                <Text style={styles.sectionTitle}>5. Data Retention & Deletion</Text>
                <Text style={styles.bodyText}>
                    You may delete your account through the App’s settings. Once deleted, all associated data will be permanently removed unless required by law.
                </Text>
                <Text style={styles.bodyText}>
                    We may retain anonymized data for analytics and research purposes.
                </Text>
                <Text style={styles.bodyText}>
                    If you have pending transactions or grievances, we may delay deletion until resolution.
                </Text>

                <Text style={styles.sectionTitle}>6.Your Rights</Text>
                <Text style={styles.bodyText}>
                    Access, update, or correct your personal data through App settings.
                </Text>
                <Text style={styles.bodyText}>
                    Withdraw consent for data processing (withdrawal may limit App functionality).t.                         </Text>
                <Text style={styles.bodyText}>
                    Request data deletion or details on how we process your data.
                </Text>

                <Text style={styles.sectionTitle}>7. Changes to This Privacy Policy</Text>
                <Text style={styles.bodyText}>
                    We may update this policy periodically. Continued use of the app means you accept these updates.
                </Text>
                <Text style={styles.sectionTitle}>8. Contact Us</Text>
                <Text style={styles.bodyText}>
                    For privacy-related concerns, please contact our  <Text style={{ color: 'gray', fontWeight: '600', fontSize: 14, }}> Grievance Officer </Text>at :
                </Text>
                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>Email: </Text>
                    support@astro-buddy.com
                </Text>
                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>Phone: </Text>
                    +(91) 9294-54-9294
                </Text>
                <Text style={styles.bodyText}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}>Address: </Text>
                    [Insert Office Address]
                </Text>
                <Text style={styles.bodyText}>
                    By using the App, you acknowledge and agree to this Privacy Policy.
                </Text>
            </ScrollView>

            {/* <TouchableOpacity style={styles.button} onPress={() => Alert.alert(
                "Privacy Policy ",  
                "You have acknowledged the Privacy Policy.", 
                [{ text: "OK" }])}>
                <Text style={styles.buttonText}>I Acknowledge</Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default Privacy;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, bottom: 80 },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15 },
    backButton: { padding: 10 },
    headerTitle: { color: 'gray', fontSize: 22, fontWeight: '800', marginLeft: 10 },
    content: { marginTop: 10 },
    sectionTitle: { color: 'gray', fontSize: 18, fontWeight: 'bold', marginTop: 15 },
    bodyText: { fontSize: 14, color: '#666', marginTop: 5, lineHeight: 20 },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 20,
    },
    buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
