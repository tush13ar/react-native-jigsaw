import * as React from "react";
import {
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  Pressable,
} from "react-native";
//import TouchableRipple from "../TouchableRipple/TouchableRipple";
import Text from "./Text";
import { withTheme } from "../theming";
import type { IconSlot } from "../interfaces/Icon";
import type { Theme } from "../styles/DefaultTheme";
//import { ListAccordionGroupContext } from "./ListAccordionGroup";
import { colorTypes } from "@draftbit/types";

import {
  COMPONENT_TYPES,
  createTextProp,
  createNumberProp,
  createIconProp,
  createColorProp,
} from "@draftbit/types";

type Props = {
  openColor: colorTypes;
  closedCloser: colorTypes;
  caretColor: colorTypes;
  icon?: string;
  iconSize: number;
  style: StyleProp<TextStyle>;
  children: React.ReactNode;
  title: string;
  theme: Theme;
} & IconSlot;

const Accordion = ({
  Icon,
  openColor,
  closedCloser,
  //caretColor,
  icon,
  iconSize = 24,
  style,
  title,
  children,
  theme: { colors },
}: Props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePressAction = () => {
    setExpanded((expanded) => !expanded);
  };

  const titleColor = expanded ? colors[openColor] : colors[closedCloser];

  //const expandedInternal = expandedProp !== undefined ? expandedProp : expanded;

  //   const groupContext = React.useContext(ListAccordionGroupContext);
  //   if (groupContext !== null && !id) {
  //     throw new Error(
  //       "List.Accordion is used inside a List.AccordionGroup without specifying an id prop."
  //     );
  //   }
  //   const isExpanded = groupContext
  //     ? groupContext.expandedId === id
  //     : expandedInternal;
  //   const handlePress =
  //     groupContext && id !== undefined
  //       ? () => groupContext.onAccordionPress(id)
  //       : handlePressAction;
  return (
    <View>
      <Pressable
        style={[styles.container, style]}
        onPress={handlePressAction}
        accessibilityRole="button"
      >
        <View style={styles.row} pointerEvents="none">
          {icon ? <Icon name={icon} size={iconSize} /> : null}
          <View style={[styles.item, styles.content]}>
            <Text
              selectable={false}
              style={[
                styles.title,
                {
                  color: titleColor,
                },
                style,
              ]}
            >
              {title}
            </Text>
          </View>
          <View style={[styles.item]}>
            <Icon
              name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              color={titleColor}
              size={24}
            />
          </View>
        </View>
      </Pressable>
      {expanded
        ? React.Children.map(children, (child) => {
            if (
              React.isValidElement(child) &&
              !child.props.left &&
              !child.props.right
            ) {
              return React.cloneElement(child, {
                style: [styles.child, child.props.style],
              });
            }

            return child;
          })
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
  },

  item: {
    margin: 8,
  },
  child: {
    paddingLeft: 64,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
});

export default withTheme(Accordion);

export const SEED_DATA = {
  name: "Accordion",
  tag: "Accordion",
  description: "An expandable container containing components",
  category: COMPONENT_TYPES.container,
  props: {
    openColor: createColorProp({
      label: "Color when expanded",
    }),
    closedCloser: createColorProp({
      label: "Color when collapsed",
    }),
    //caretColor,

    iconSize: createNumberProp({
      defaultValue: 24,
    }),

    title: createTextProp({
      label: "Accordion title",
    }),

    icon: createIconProp(),
  },
};
