import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: "UI/Text",
  component: Text
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = () => <Text />
export const Primary = Template.bind({});