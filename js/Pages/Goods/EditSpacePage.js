import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, Text, PanResponder } from 'react-native'
import { NavigationItem, CommonButton } from '../../Components'
import { Heading2 } from '../../Components/Text'
import theme from '../../Constants/theme'
import px2dp from '../../Utils/px2dp'
import _ from 'lodash'

class StartPage extends Component {

  static propTypes = {
    navigation: PropTypes.object
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: (<Heading2 style={styles.headerTitle}>登录</Heading2>),
    headerRight: (<NavigationItem title={'关闭'} onPress={() => { }} />),
    headerStyle: {backgroundColor: theme.userHeader}
  })

  constructor (props) {
    super(props)
    this.state = {
      names: [
        { text: '1p', style: {} },
        { text: '2p', style: {} },
        { text: '3p', style: {} },
        { text: '4p', style: {} }
      ]
    }
    this.items = []
  }

  renderItem () {
    return this.state.names.map((item, i) => {
      return (
        <View
          {...this._panResponder.panHandlers}
          key={i}
          style={[styles.item, {top: i * px2dp(49)}, item.style]}>
          <Text style={styles.itemTitle}>{item.text}</Text>
        </View>
      )
    })
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderItem()}
        <CommonButton text={'push'} onPress={() => this.toPush()} containerStyle={{top: px2dp(500)}} />
      </View>
    )
  }

  toPush () {
    let items = _.cloneDeep(this.state.names)
    items.push({ text: '5p', style: {} })
    this.setState({names: items})
  }

  componentWillMount () {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        const { pageY, locationY } = evt.nativeEvent
        this.index = this._getIdByPosition(pageY)
        this.preY = pageY - locationY
        this.items = _.cloneDeep(this.state.names)
        //         // get the taped item and highlight it
        let item = this.items[this.index]
        // item.setNativeProps({
        //   style: {
        //     shadowColor: '#000',
        //     shadowOpacity: 0.3,
        //     shadowRadius: 5,
        //     shadowOffset: {height: 0, width: 2},
        //     elevation: 5,
        //     zIndex: 101
        //   }
        // })
        item.style = {
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 5,
          shadowOffset: {height: 0, width: 2},
          elevation: 5,
          zIndex: 500
        }
        this.setState(() => ({ names: this.items }))
      },
      onPanResponderMove: (evt, gestureState) => {
        let top = this.preY + gestureState.dy
        let item = this.items[this.index]
        // item.setNativeProps({
        //   style: {top: top}
        // })
        item.style = { top: top }
        this.setState(() => ({names: this.items}))
        let collideIndex = this._getIdByPosition(evt.nativeEvent.pageY)
        if (collideIndex !== this.index && collideIndex !== -1) {
          // let collideItem = items[collideIndex]
          // collideItem.setNativeProps({
          //   style: {top: this._getTopValueYById(this.index)}
          // });
          // collideItem.style = { top: this._getTopValueYById(this.index) };
                    // swap two values
          // [this.items[this.index], this.items[collideIndex]] = [this.items[collideIndex], this.items[this.index]];
          // [this.order[this.index], this.order[collideIndex]] = [this.order[collideIndex], this.order[this.index]]
          [this.items[this.index], this.items[collideIndex]] = [this.items[collideIndex], this.items[this.index]]
          this.setState(() => ({ names: this.items }))
          console.log(this.state.names)
          this.index = collideIndex
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // const shadowStyle = {
        //   shadowColor: '#000',
        //   shadowOpacity: 0,
        //   shadowRadius: 0,
        //   shadowOffset: { height: 0, width: 0 },
        //   elevation: 0,
        //   zIndex: 100
        // }
        // let item = this.items[this.index]
        //         // go back the correct position
        // item.setNativeProps({
        //   style: {...shadowStyle, top: this._getTopValueYById(this.index)}
        // })
        for (let i = 0, l = this.items.length; i < l; i++) {
          this.items[i].style = {}
        }
        // let item = this.items[this.index]
        // item.style = { top: this._getTopValueYById(this.index) }
        this.setState(() => ({names: this.items}))
      },
      onPanResponderTerminate: (evt, gestureState) => {
        let item = this.items[this.index]
        item.style = { top: this._getTopValueYById(this.index) }
        this.setState(() => ({names: this.items}))
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
    if (id > this.state.names.length - 1) id = -1
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
    position: 'absolute',
    zIndex: 100
  },
  itemTitle: {
    fontSize: px2dp(15),
    color: '#000',
    marginLeft: px2dp(20)
  }
})

export default StartPage
