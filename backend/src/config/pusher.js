import dotenv from 'dotenv';
import Pusher from 'pusher';

dotenv.config();
const {
  PUSHER_API_ID,
  PUSHER_KEY,
  PUSHER_SECRET,
  PUSHER_CLUSTER,
} = process.env;

const pusher = new Pusher({
  appId: PUSHER_API_ID,
  key: PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: PUSHER_CLUSTER,
  useTLS: true,
});

export { pusher };
