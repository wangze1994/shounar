import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Text, PanResponder } from 'react-native'
import theme from '../Constants/theme'
import px2dp from '../Utils/px2dp'
import _ from 'lodash'

class StartPage extends Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  renderItem () {
    console.log('render item', this.state.names)
    this.names = this.state.names
    let items = this.names.map((item, i) => {
      this.order[i] = item
      return (
        <View
          {...this._panResponder.panHandlers}
          ref={(ref) => (this.items[i] = ref)}
          key={i}
          style={[styles.item, {top: i * px2dp(49)}]}>
          <Text style={styles.itemTitle}>{item}</Text>
        </View>
      )
    })
    return items
  }

  setOrder () {
    console.log('setOrder', this.order)
    this.setState({names: this.order})
  }

  setOrder2 () {
    console.log('setOrder', this.order)
    this.setState({names: ['iOS', '前端', '拓展资源', 'Android', '休息视频']})
  }

  pushOrder () {
    let names = _.cloneDeep(this.order)
    names.push('Docker')
    console.log(names)
    this.setState({
      names: names
    })
  }

  render () {
    console.log('render')
    return (
      <View style={styles.container}>
        {this.renderItem()}
        <CommonButton containerStyle={{ top: px2dp(500) }} onPress={() => this.setOrder()} text='test' />
        <CommonButton containerStyle={{top: px2dp(500)}} onPress={() => this.pushOrder()} text='test2' />
      </View>
    )
  }

  componentWillMount () {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        const { pageY, locationY } = evt.nativeEvent
        this.index = this._getIdByPosition(pageY)
        this.preY = pageY - locationY
                // get the taped item and highlight it
        let item = this.items[this.index]
        item.setNativeProps({
          style: {
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 5,
            shadowOffset: {height: 0, width: 2},
            elevation: 5
          }
        })
      },
      onPanResponderMove: (evt, gestureState) => {
        let top = this.preY + gestureState.dy
        let item = this.items[this.index]
        item.setNativeProps({
          style: {top: top}
        })

        let collideIndex = this._getIdByPosition(evt.nativeEvent.pageY)
        if (collideIndex !== this.index && collideIndex !== -1) {
          let collideItem = this.items[collideIndex]
          collideItem.setNativeProps({
            style: {top: this._getTopValueYById(this.index)}
          });
                    // swap two values
          [this.items[this.index], this.items[collideIndex]] = [this.items[collideIndex], this.items[this.index]];
          [this.order[this.index], this.order[collideIndex]] = [this.order[collideIndex], this.order[this.index]]
          this.index = collideIndex
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        const shadowStyle = {
          shadowColor: '#000',
          shadowOpacity: 0,
          shadowRadius: 0,
          shadowOffset: { height: 0, width: 0 },
          elevation: 0,
          zIndex: 0
        }
        let item = this.items[this.index]
                // go back the correct position
        item.setNativeProps({
          style: {...shadowStyle, top: this._getTopValueYById(this.index)}
        })
        console.log('onPanResponderRelease', this.order)
        // this.setOrder()
      },
      onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
      }
    })
  }

  _getIdByPosition (pageY) {
    var id = -1
    const height = px2dp(49)

    // if (pageY >= 0 && pageY < height * 1) {
    //   id = 0
    // } else if (pageY >= height * 1 && pageY < height * 2) {
    //   id = 1
    // } else if (pageY >= height * 2 && pageY < height * 3) {
    //   id = 2
    // } else if (pageY >= height * 3 && pageY < height * 4) {
    //   id = 3
    // } else if (pageY >= height * 4 && pageY < height * 5) {
    //   id = 4
    // } else if (pageY >= height * 5 && pageY < height * 6) {
    //   id = 5
    // }

    id = Math.floor(pageY / height)

    return id
  }

  _getTopValueYById (id) {
    const height = px2dp(49)
    return id * height
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: px2dp(20)
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  item: {
    flexDirection: 'row',
    height: px2dp(49),
    width: theme.screenWidth,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: px2dp(20),
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    position: 'absolute'
  },
  itemTitle: {
    fontSize: px2dp(15),
    color: '#000',
    marginLeft: px2dp(20)
  }
})

export default StartPage
