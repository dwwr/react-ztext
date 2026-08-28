import Zfont from 'zfont'
import Zdog from 'zdog'
import NotoSans from '../assets/NotoSans-Regular.ttf'

Zfont.init(Zdog)

export const notoSansFont = new Zdog.Font({
  src: NotoSans,
})
