import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

const icon =  <svg
width="20"
height="20"
viewBox="0 0 20 20"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M10 15.5C12.33 15.5 14.3 14.04 15.11 12H4.89C5.69 14.04 7.67 15.5 10 15.5ZM6.5 9C6.89782 9 7.27936 8.84196 7.56066 8.56066C7.84196 8.27936 8 7.89782 8 7.5C8 7.10218 7.84196 6.72064 7.56066 6.43934C7.27936 6.15804 6.89782 6 6.5 6C6.10218 6 5.72064 6.15804 5.43934 6.43934C5.15804 6.72064 5 7.10218 5 7.5C5 7.89782 5.15804 8.27936 5.43934 8.56066C5.72064 8.84196 6.10218 9 6.5 9ZM13.5 9C13.8978 9 14.2794 8.84196 14.5607 8.56066C14.842 8.27936 15 7.89782 15 7.5C15 7.10218 14.842 6.72064 14.5607 6.43934C14.2794 6.15804 13.8978 6 13.5 6C13.1022 6 12.7206 6.15804 12.4393 6.43934C12.158 6.72064 12 7.10218 12 7.5C12 7.89782 12.158 8.27936 12.4393 8.56066C12.7206 8.84196 13.1022 9 13.5 9ZM10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
  fill="white"
/>
<path
  d="M10 15.5C12.33 15.5 14.3 14.04 15.11 12H4.89C5.69 14.04 7.67 15.5 10 15.5ZM6.5 9C6.89782 9 7.27936 8.84196 7.56066 8.56066C7.84196 8.27936 8 7.89782 8 7.5C8 7.10218 7.84196 6.72064 7.56066 6.43934C7.27936 6.15804 6.89782 6 6.5 6C6.10218 6 5.72064 6.15804 5.43934 6.43934C5.15804 6.72064 5 7.10218 5 7.5C5 7.89782 5.15804 8.27936 5.43934 8.56066C5.72064 8.84196 6.10218 9 6.5 9ZM13.5 9C13.8978 9 14.2794 8.84196 14.5607 8.56066C14.842 8.27936 15 7.89782 15 7.5C15 7.10218 14.842 6.72064 14.5607 6.43934C14.2794 6.15804 13.8978 6 13.5 6C13.1022 6 12.7206 6.15804 12.4393 6.43934C12.158 6.72064 12 7.10218 12 7.5C12 7.89782 12.158 8.27936 12.4393 8.56066C12.7206 8.84196 13.1022 9 13.5 9ZM10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM10 0C4.47 0 0 4.5 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0Z"
  fill="url(#paint0_linear)"
/>
<defs>
  <stop stop-color="#FE9D66" />
  <stop offset="1" stop-color="#CB30F2" stop-opacity="0.72" />
</defs>
</svg>

export default {
  title: "/Primitive/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    startIcon: {
      options: ["none", "icon"],
        mapping:{
        none: null,
        icon: icon
    } 
    },
    endIcon: {
      options: ["none", "icon"],
        mapping:{
        none: null,
        icon: icon
    } 
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  disabled: true,
  onPress: () => { console.log('clicked') }
};

export const Large = Template.bind({});
Large.args = {
  primary: true,
  size: "large",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  primary: true,
  size: "medium",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  primary: true,
  size: "small",
  label: "Button",
};
export const Block = Template.bind({});
Block.args = {
  primary: true,
  block: true,
  label: "Button",
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  primary: true,
  startIcon: icon,
  label: "Button",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  primary: true,
  endIcon: icon,
  label: "Button",
};
