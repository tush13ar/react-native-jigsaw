import * as React from "react";
import { Pressable, StyleSheet, View } from "react-native";

import Text from "./Text";
import type { IconSlot } from "../interfaces/Icon";
import {
  COMPONENT_TYPES,
  createIconProp,
  createTextProp,
} from "@draftbit/types";

type Props = {
  icon?: string;
  title: string;
} & IconSlot;

const AccordionItem = ({ Icon, icon, title }: Props) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.row}>
        {icon ? <Icon name={icon} size={24} /> : null}
        <View style={[styles.item, styles.content]}>
          <Text selectable={false}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  row: {
    flexDirection: "row",
  },

  item: {
    marginVertical: 6,
    paddingLeft: 8,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});

export default AccordionItem;

export const SEED_DATA = {
  name: "AccordionItem",
  tag: "AccordionItem",
  description: "Item to be used in Accordion",
  category: COMPONENT_TYPES.row,
  props: {
    icon: createIconProp(),
    title: createTextProp({
      label: "Item Title",
    }),
  },
};
