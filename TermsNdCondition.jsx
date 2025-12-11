import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import { faSearch, faChevronRight, faCartShopping, faLanguage, faX, faCross, faXmark, faCheck, faSquareCheck, faUmbrella, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const TermsNdCondition = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <FontAwesomeIcon icon={faChevronLeft} size={20} color="#75429C" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Terms & Conditions</Text>
            </View>

            {/* Scrollable Content */}
            <ScrollView style={styles.content}>
                <Text style={styles.sectionTitle}>1. Introduction</Text>
                <Text style={styles.bodyText}>
                    This document is an electronic record under the <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}> Information Technology Act, 2000. </Text>
                    It governs your use of  <Text style={{ color: 'gray', fontWeight: '600', fontSize: 15, }}> Astro Buddy </Text>
                    ("Platform"), including its mobile application. By accessing or using our services, you agree to these Terms & Conditions and applicable policies.                </Text>

                <Text style={styles.sectionTitle}>2. User Agreement</Text>
                <Text style={styles.bodyText}>
                    You must provide accurate information while registering and using the app.                </Text>
                <Text style={styles.bodyText}>
                    We do not guarantee the accuracy or completeness of the information provided on the Platform.                </Text>
                <Text style={styles.bodyText}>
                    Your use of the Platform is at your own risk.                </Text>

                <Text style={styles.sectionTitle}>3. Platform Usage</Text>
                <Text style={styles.bodyText}>
                    Content, design, and materials on the Platform are proprietary and protected.
                </Text>
                <Text style={styles.bodyText}>
                    Unauthorized use of the Platform may lead to legal action.
                </Text>
                <Text style={styles.bodyText}>
                    You agree to pay any applicable service charges.
                </Text>
                <Text style={styles.bodyText}>
                    You shall not engage in unlawful activities on the Platform.
                </Text>
                <Text style={styles.bodyText}>
                    Third-party links provided are for reference only; we are not responsible for their policies or content.
                </Text>

                <Text style={styles.sectionTitle}>4. Legal Compliance & Liability
                </Text>

                <Text style={styles.bodyText}>
                    By initiating a transaction, you enter into a legally binding contract with us.
                </Text>
                <Text style={styles.bodyText}>
                    You shall indemnify Astro Buddy and its affiliates from any claims arising due to a breach of these terms.

                </Text>
                <Text style={styles.bodyText}>
                    We are not liable for service disruptions caused by force majeure events.
                </Text>
                <Text style={styles.sectionTitle}>5. Governing Law & Dispute Resolution
                </Text>
                <Text style={styles.bodyText}>
                    These Terms are governed by the laws of India.
                </Text>
                <Text style={styles.bodyText}>
                    Any disputes will be subject to the exclusive jurisdiction of courts in Jabalpur, Madhya Pradesh.
                </Text>
                <Text style={styles.bodyText}>
                    For queries, please contact us through the details provided on the app.

                </Text>

            </ScrollView>

            {/* Accept Button */}
            {/* <TouchableOpacity style={styles.button} onPress={() => alert('You have agreed to the Terms & Conditions.')}>
                <Text style={styles.buttonText}>I Agree</Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default TermsNdCondition;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 20,bottom:70 },
    header: { flexDirection: 'row', alignItems: 'center',marginTop: 100 },
    backButton: { padding: 10 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 15,color: 'gray' },
    content: { marginTop: 10 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 15 },
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
