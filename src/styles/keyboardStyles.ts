import { css } from 'glamor'

export const keyboardCss = css({
  margin: 0,
  userSelect: 'none',
  paddingTop: '10px',
})

export const keyRowCss = css({
  display: 'flex',
  width: '100%',
  margin: '0 auto 8px',
  /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */
  touchAction: 'manipulation',
})

export const keyRowButtonCss = css(
  {
    fontFamily: 'inherit',
    fontWeight: 'bold',
    fontSize: '14px',
    border: 0,
    padding: 0,
    margin: '0 3px 0 3px',
    height: '58px',
    borderRadius: '4px',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundColor: '#818384',
    color: '#ffffff',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  {
    '@media(max-width: 600px)': {
      margin: '0 2px 0 2px',
    },
  }
)

export const oneAndAHalfFlexCss = css({
  flex: 1.5,
  fontSize: '12px',
})

export const halfFlexCss = css({
  flex: 0.5,
})
