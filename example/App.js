import React from "react";
import { KeepAwake } from "expo";
import { StatusBar, View, Text } from "react-native";
import { Provider, DefaultTheme, Touchable, Icon } from "@draftbit/ui";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import ButtonExample from "./src/ButtonExample";
import CardBlockExample from "./src/CardBlockExample";
import CardContainerShortImageExample from "./src/CardContainerShortImageExample";
import CardContainerExample from "./src/CardContainerExample";
import CardContainerRatingExample from "./src/CardContainerRatingExample";
import CardInlineExample from "./src/CardInlineExample";
import HeaderExample from "./src/HeaderExample";
import ProgressBarExample from "./src/ProgressBarExample";
import RowExample from "./src/RowExample";
import TextFieldExample from "./src/TextFieldExample";
import FABExample from "./src/FABExample";
import AvatarExample from "./src/AvatarExample";

const Drawer = createDrawerNavigator(
  {
    Home: () => (
      <Text style={{ alignSelf: "center", marginTop: 30 }}>
        Select an example from the drawer
      </Text>
    ),
    Avatar: AvatarExample,
    Button: ButtonExample,
    TextField: TextFieldExample,
    CardBlock: CardBlockExample,
    CardContainerShortImage: CardContainerShortImageExample,
    CardContainer: CardContainerExample,
    CardInline: CardInlineExample,
    ProgressBar: ProgressBarExample,
    Row: RowExample,
    FAB: FABExample
  },
  {
    initialRouteName: "Home"
  }
);

const App = createStackNavigator(
  { Root: { screen: Drawer } },
  {
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Examples",
      headerLeft: (
        <Touchable
          onPress={navigation.toggleDrawer}
          style={{ paddingLeft: 12 }}
        >
          <Icon size={24} name="menu" />
        </Touchable>
      )
    })
  }
);

export default class Example extends React.Component<{}, State> {
  async componentDidMount() {
    StatusBar.setBarStyle("light-content");
  }

  render() {
    return (
      <Provider theme={DefaultTheme}>
        <App />
        <KeepAwake />
      </Provider>
    );
  }
}
