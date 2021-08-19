import About from './About'

export default {
  title: 'Screens/About',
  component: About
}

const Template = (args) => <About {...args} />

export const Default = Template.bind({});
Default.args = {
  english: false,
  engTitle: 'About',
  title: 'Acerca de mi',
  text: 'Dolor labore occaecat eiusmod ea aute. Consequat laborum magna mollit in sunt ex ipsum mollit fugiat veniam voluptate mollit. Est eu officia id deserunt occaecat dolore proident eiusmod est eu irure. Reprehenderit ullamco deserunt tempor occaecat eu quis dolor occaecat esse culpa. Nulla dolor consectetur ',
  engText: 'mollit. Est eu officia id deserunt occaecat dolore proident eiusmod est eu irure. Reprehenderit ullamco deserunt tempor occaecat eu quis dolor occaecat esse culpa. Nulla dolor consectetur Dolor labore occaecat eiusmod ea aute. Consequat laborum magna mollit in sunt ex ipsum mollit fugiat veniam voluptate'
}


