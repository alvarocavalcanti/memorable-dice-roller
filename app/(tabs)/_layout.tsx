import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const DiceIcon = ({ color, size }: { color: string; size: number }) => (
  <MaterialIcons name="casino" size={size} color={color} />
);

const HelpIcon = ({ color, size }: { color: string; size: number }) => (
  <MaterialIcons name="help" size={size} color={color} />
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0a7ea4",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dice Roller",
          tabBarIcon: DiceIcon,
        }}
      />
      <Tabs.Screen
        name="help"
        options={{
          title: "Help",
          tabBarIcon: HelpIcon,
        }}
      />
    </Tabs>
  );
}
