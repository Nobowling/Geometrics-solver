/*import React from 'react'

class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Profile',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jyour profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    }
  }

export default ProfileScreen