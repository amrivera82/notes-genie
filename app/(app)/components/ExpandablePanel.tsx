import React, { ReactNode, useState } from "react";
import {
    LayoutAnimation,
    Platform,
    TouchableOpacity,
    UIManager,
    View
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const ExpandablePanel = ({ title, children, styles }:
        { title: ReactNode, children: ReactNode, styles: any }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = () => {
        LayoutAnimation.configureNext(LayoutAnimation.create(
            10000, "easeInEaseOut", 'scaleY'));
        setIsOpen(value => !value);
    };

    return (
        <>
            <TouchableOpacity onPress={toggleOpen} style={styles.heading} activeOpacity={0.6}>
                {title}
                <Icon name={isOpen ? "chevron-down-outline" : "chevron-up-outline"} size={18} color="blue" />
            </TouchableOpacity>
            <View style={[styles.list, !isOpen ? styles.hidden : undefined]}>
                {children}
            </View>
        </>
    );
};