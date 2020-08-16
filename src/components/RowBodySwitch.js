import * as React from "react";
import { withTheme } from "../core/theming";
import {
  COMPONENT_TYPES,
  FORM_TYPES,
  FIELD_NAME,
} from "../core/component-types";
import Row from "./Row";
import Switch from "./Switch";

class RowBodySwitch extends React.Component {
  render() {
    const {
      title,
      subtitle,
      style,
      value,
      onValueChange,
      color,
      theme: { colors, typography },
    } = this.props;

    return (
      <Row
        titleTypeStyle={typography.body1}
        titleColor={colors.medium}
        subtitleTypeStyle={typography.subtitle2}
        subtitleColor={colors.light}
        title={title}
        subtitle={subtitle}
        right={() => (
          <Switch value={value} color={color} onValueChange={onValueChange} />
        )}
        style={style}
      />
    );
  }
}

export default withTheme(RowBodySwitch);

export const SEED_DATA = [
  {
    name: "Row Single Line Body Switch",
    tag: "RowBodySwitch",
    description: "A row with left aligned body text and a right aligned switch",
    category: COMPONENT_TYPES.deprecated,
    props: {
      title: {
        label: "Title",
        description: "Text to display",
        formType: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true,
      },
      color: {
        label: "Color",
        description: "Custom color for switch",
        editable: true,
        required: false,
        formType: FORM_TYPES.color,
      },
      fieldName: {
        ...FIELD_NAME,
        value: "switchValue",
        handlerPropName: "onValueChange",
      },
    },
  },
  {
    name: "Row Double Line Body Switch",
    tag: "RowBodySwitch",
    description:
      "A row with left aligned body text and subtitle text and a right aligned switch",
    category: COMPONENT_TYPES.deprecated,
    props: {
      title: {
        label: "Title",
        description: "Text to display",
        formType: FORM_TYPES.string,
        value: "Beautiful West Coast Villa",
        editable: true,
      },
      subtitle: {
        label: "Subtitle",
        description: "Subtitle text to display",
        formType: FORM_TYPES.string,
        value: "San Diego",
        editable: true,
      },
      color: {
        label: "Color",
        description: "Custom color for switch",
        editable: true,
        required: false,
        formType: FORM_TYPES.color,
      },
      fieldName: {
        ...FIELD_NAME,
        value: "switchValue",
        handlerPropName: "onValueChange",
      },
    },
  },
];
