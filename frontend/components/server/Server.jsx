import { useEffect } from 'react';
import ChannelIndex from '../channel/ChannelIndex';
import Channel from '../channel/Channel'
import MemberIndex from '../members/MemberIndex';

const Server = ({ server, channels, members, requestServer, match }) => {
  useEffect(() => {
    requestServer(match.params.serverId);
  }, [match.params.serverId])

  return server ? (
    <div className="server-main">
      <div className="server-nav">
        { server.name }
        <ChannelIndex channels={ Object.values(channels) } />
      </div>
      <div className="channel-main">
        <Channel channel={channels[match.params.channelId]} />
        <MemberIndex members={members} />
      </div>
    </div>
  ) : null
}

export default Server
