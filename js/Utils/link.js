import {Linking} from 'react-native'

export function link (url) {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      return Linking.openURL(url)
    } else {
      console.log('Can\'t handle url: ' + url)
    }
  }).catch(err => {
    console.error('An error occurred', err)
  })
}
