import React, { PureComponent, PropTypes } from 'react'
import { Image } from 'react-native'

class TabBarItem extends PureComponent {

  static propTypes = {
    selectedImage: Image.propTypes.source,
    normalImage: Image.propTypes.source,
    focused: PropTypes.bool,
    tintColor: PropTypes.string
  }

  render () {
    let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
    return (
      <Image
        source={this.props.focused
                    ? selectedImage
                    : this.props.normalImage}
        style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
            />
    )
  }
}

// make this component available to the app
export default TabBarItem
