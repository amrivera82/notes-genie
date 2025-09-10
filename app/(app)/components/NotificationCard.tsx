import React, { PropsWithChildren, useState } from "react";
import {
    LayoutAnimation,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager
} from "react-native";

export interface NotificationProps {
    notificationId: number,
    notificationTitle: string,
    notificationDescription: string
};

if (
    Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const NotificationCard = ({ children }: { children: PropsWithChildren<NotificationProps> }) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const onPress = () => {
        LayoutAnimation.configureNext(LayoutAnimation.create(
            10000, "easeInEaseOut", 'opacity'));
        setIsActive(value => true);
    };

    return (
        <>
            <TouchableOpacity  onPress={onPress} style={styles.heading} activeOpacity={0.6}>
                <Text style={styles.title}>{children.notificationTitle}</Text>
                <Text style={styles.description}>{children.notificationDescription}</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    heading: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10
    },
    description: {
        fontSize: 12,
        height: 30,
        marginLeft: '5%'
    },
    title: {
        height: 30,
        marginLeft: '5%',
        fontSize: 16
    },
    focused: {
        height: 0,
    },
    default: {
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: '100%',
    }
});
