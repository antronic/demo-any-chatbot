import dayjs from 'dayjs'
import Markdown from 'react-markdown'

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
          <div className={`${props.message.meta.isCurrentUser ? 'bg-brand-primary-400' : 'bg-slate-300'} text-black mt-2 p-2 rounded-sm`}>
            <Markdown>
              {props.message.message}
            </Markdown>
          </div>

          <span className="text-xs">{dayjs(props.message.meta.dateTime).format('HH:mm').toString()}</span>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage