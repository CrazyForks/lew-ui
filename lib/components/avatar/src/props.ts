import type { ExtractPropTypes, PropType } from 'vue'

type AvatarPlacement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
type AvatarStatus = 'online' | 'processing' | 'away' | 'offline' | 'busy'
type AvatarShape = 'circle' | 'square'
type AvatarSize = number | string

export const avatarProps = {
  size: {
    type: [Number, String] as PropType<AvatarSize>,
    default: 40,
    description: '头像尺寸，可为数字（单位：像素）或字符串',
    validator(value: AvatarSize): boolean {
      if (typeof value === 'number' && value <= 0) {
        console.warn('[LewAvatar] size 必须大于 0')
        return false
      }
      return true
    }
  },
  shape: {
    type: String as PropType<AvatarShape>,
    default: 'square',
    description: '头像形状',
    validator(value: AvatarShape): boolean {
      if (!['circle', 'square'].includes(value)) {
        console.warn(`[LewAvatar] shape 必须是 'circle' 或 'square'`)
        return false
      }
      return true
    }
  },
  src: {
    type: String,
    default: '',
    description: '头像图片的 URL'
  },
  alt: {
    type: String,
    default: '',
    description: '图片无法显示时的替代文本',
    validator(value: string): boolean {
      if (value.length > 100) {
        console.warn('[LewAvatar] alt 文本不应超过 100 个字符')
        return false
      }
      return true
    }
  },
  status: {
    type: String as PropType<AvatarStatus | undefined>,
    default: undefined,
    description: '头像状态',
    validator(value: AvatarStatus): boolean {
      const validStatus = ['online', 'processing', 'away', 'offline', 'busy']
      if (!validStatus.includes(value)) {
        console.warn(`[LewAvatar] status 必须是 ${validStatus.join(', ')} 之一`)
        return false
      }
      return true
    }
  },
  statusPlacement: {
    type: String as PropType<AvatarPlacement>,
    default: 'top-right',
    description: '状态标识的位置',
    validator(value: AvatarPlacement): boolean {
      const validPlacements = ['top-left', 'top-right', 'bottom-left', 'bottom-right']
      if (!validPlacements.includes(value)) {
        console.warn(`[LewAvatar] statusPlacement 必须是 ${validPlacements.join(', ')} 之一`)
        return false
      }
      return true
    }
  }
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
