import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./profile";
import ChatScreen from "./ChatScreen";
import StatusScreen from "./StatusScreen";

const MainStack = createBottomTabNavigator(
    {
        HomeScreen: { screen: HomeScreen, navigationOptions: { tabBarVisible: false } },
        ProfileScreen: { screen: ProfileScreen, navigationOptions: { tabBarVisible: false } },
        ChatScreen: { screen: ChatScreen, navigationOptions: { tabBarVisible: false } },
        StatusScreen: { screen: StatusScreen, navigationOptions: { tabBarVisible: false } }

    },
    {
        headerMode: 'none',
        initialRouteName: "HomeScreen"
    }
);


export default createAppContainer(MainStack);

