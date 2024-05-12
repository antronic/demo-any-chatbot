import dayjs from 'dayjs'
import Markdown from 'react-markdown'
import { Icon } from '@iconify/react'

import { useChatStore } from '../../store/chat'
import { getRecognizer, speak } from '../../utils/azure-speech'

export type ChatMessageMeta = {
  user: string;
  dateTime: Date;
  isCurrentUser: boolean;
}

export type ChatMessage = {
  message: string;
  meta: ChatMessageMeta;
}

export interface IChatMessageProps {
  message: ChatMessage
}

export const ChatMessage: React.FC<IChatMessageProps> = (props) => {
  const { themeColor } = useChatStore((state) => state)

  function readText() {
    speak(props.message.message)
  }

  return (
    <div className="">
      <div className={`flex flex-col ${props.message.meta.isCurrentUser ? 'items-end' : ''}`}>
        {
          !props.message.meta.isCurrentUser && (
            <div>
              <p className="text-xs">{props.message.meta.user}</p>
            </div>
          )
        }

        <div className={`flex items-end gap-x-2 ${props.message.meta.isCurrentUser && 'flex-row-reverse'}`}>
          <div className={`${props.message.meta.isCurrentUser ? themeColor : 'bg-slate-300'} text-black mt-2 p-2 rounded-sm`}>
            <Markdown>
              {props.message.message}
            </Markdown>
          </div>

          <span className="text-xs">{dayjs(props.message.meta.dateTime).format('HH:mm').toString()}</span>
        </div>

        {/* Add read text button with icon with margin 2 */}
        <button className="mt-2" onClick={readText}>
          <Icon icon="akar-icons:play" />
        </button>
      </div>
    </div>
  )
}

export default ChatMessage