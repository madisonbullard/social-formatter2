import { Container } from 'unstated'

class StyleContainer extends Container {
  state = {
    tweetStyles: { //default styles for twitter posts
      borderRadius: 8,
      backgroundColor: { hex: '#ffffff' },
      fullBleedMedia: 0,
      paddingX: 40,
      paddingY: 30,
      userNameFontSize: 18,
      screenNameFontSize: 14,
      width: 660,
    },
    instaStyles: { //default styles for instagram posts

    },
    appStyles: { //default styles for app
      white: '#EDF4FC',
      purple: '#5658F9',
      gold: '#ffd43b',
      grey: '#657786',
      black: '#14171a',
    }
  }
  updateStyle = style => {
    const styles = {...this.state.styles, style}
    this.setState({ styles })
  }
  // selectStyle = style => {
  //   const selectedStyle = style.id;
  //   this.setState({ selectedStyle })
  // }
}
export default StyleContainer