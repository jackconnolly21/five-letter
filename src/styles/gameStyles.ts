import { css } from 'glamor'

export const paddedCss = css({
  padding: '5px',
})

export const centeredContainerCss = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  overflow: 'hidden',
})

export const paddedContainerCss = css(centeredContainerCss, paddedCss)

export const gameContainerCss = css()

export const footerContainerCss = css({
  height: 100,
})

export const strongTextCss = css({
  fontFamily: 'nyt-karnakcondensed',
  fontWeight: 400,
  fontSize: '20px',
  textAlign: 'center',
})

const baseLetterBoxStyles = css({
  border: '2px solid #969696',
  height: 50,
  padding: 5,
  width: 50,
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
})

export const getLetterBoxStyles = (color: string, backgroundColor: string) =>
  css(baseLetterBoxStyles, {
    color: color,
    backgroundColor: backgroundColor,
  })
