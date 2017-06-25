import React, { Component, PropTypes } from 'react'
import { View, StyleSheet, TouchableOpacity, PanResponder, Image } from 'react-native'
import { NavigationItem } from '../../Components'
import { Heading2, Paragraph } from '../../Components/Text'
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
      ],
      options: [
        { text: '5p', style: {} },
        { text: '6p', style: {} },
        { text: '7p', style: {} },
        { text: '8p', style: {} }
      ]
    }
    this.items = []
  }

  renderItem () {
    return this.state.names.map((item, i) => {
      return (
        <View {...this._panResponder.panHandlers} style={[styles.item, { top: i * px2dp(49) }, item.style]} key={i}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => this.toSplice(i)}>
              <Image style={styles.icon} source={require('../../Assets/order_minus_icon.png')} resizeMode='contain' />
            </TouchableOpacity>
            <Heading2 style={{ fontWeight: theme.lightFont, fontSize: 15, color: '#303030' }}>{item.text}</Heading2>
          </View>
          <View>
            <Image style={styles.icon} source={require('../../Assets/order_icon.png')} />
          </View>
        </View>
      )
    })
  }

  renderOption () {
    return this.state.options.map((item, i) => {
      return (
        <View style={styles.option} key={i}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => this.toPush(i)}>
              <Image style={styles.icon} source={require('../../Assets/order_add_icon.png')} resizeMode='contain' />
            </TouchableOpacity>
            <Heading2 style={{fontWeight: theme.lightFont, fontSize: 15, color: '#303030'}}>{item.text}</Heading2>
          </View>
        </View>
      )
    })
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderItem()}
        <View style={[styles.optionContianer, {top: this.state.names.length * px2dp(49)}]}>
          <View style={styles.textContianer}>
            <Paragraph style={{color: '#999999', fontSize: px2dp(12)}}>显示/隐藏</Paragraph>
          </View>
          <View>
            {this.renderOption()}
          </View>
        </View>
      </View>
    )
  }

  toSplice (index) {
    let names = _.cloneDeep(this.state.names)
    let options = _.cloneDeep(this.state.options)
    options.push(names[index])
    names.splice(index, 1)
    this.setState({options: options}, () => {
      this.setState({ names: names })
    })
  }

  toPush (index) {
    let names = _.cloneDeep(this.state.names)
    let options = _.cloneDeep(this.state.options)
    names.push(options[index])
    options.splice(index, 1)
    this.setState({options: options}, () => {
      this.setState({ names: names })
    })
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
        let item = this.items[this.index]
        item.style = {
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 5,
          shadowOffset: {height: 0, width: 2},
          elevation: 5
        }
        this.setState(() => ({ names: this.items }))
      },
      onPanResponderMove: (evt, gestureState) => {
        let top = this.preY + gestureState.dy
        let item = this.items[this.index]
        item.style = {
          top: top,
          shadowColor: '#000',
          shadowOpacity: 0.3,
          shadowRadius: 5,
          shadowOffset: {height: 0, width: 2},
          elevation: 5}
        this.setState(() => ({names: this.items}))
        let collideIndex = this._getIdByPosition(evt.nativeEvent.pageY)
        if (collideIndex !== this.index && collideIndex !== -1) {
          [this.items[this.index], this.items[collideIndex]] = [this.items[collideIndex], this.items[this.index]]
          this.setState(() => ({ names: this.items }))
          console.log(this.state.names)
          this.index = collideIndex
        }
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        for (let i = 0, l = this.items.length; i < l; i++) {
          this.items[i].style = {}
        }
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
    position: 'absolute',
    borderColor: 'grey',
    borderBottomWidth: 1,
    zIndex: 8,
    justifyContent: 'space-between'
  },
  itemTitle: {
    fontSize: px2dp(15),
    color: '#000',
    marginLeft: px2dp(20)
  },
  option: {
    flexDirection: 'row',
    height: px2dp(49),
    width: theme.screenWidth,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: px2dp(20),
    borderColor: 'grey',
    borderBottomWidth: 1
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10
  },
  optionContianer: {
    position: 'absolute',
    zIndex: 8
  },
  textContianer: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    width: theme.screenWidth,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default StartPage
