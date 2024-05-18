import { PrettyChatWindow } from 'react-chat-engine-pretty';

  

const ChatsPage = (props) => {


      return (
        <div style={{ height: "100vh" }}>

     
        <PrettyChatWindow
          projectId="2b923e0f-217b-42fd-a226-dfefb5cebe52"
          username={ props.user.username }
          secret={ props.user.secret }
          style={{ height: '100vh' }}
        />
        </div>
      );
    }

  export default ChatsPage;