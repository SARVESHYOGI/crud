import { connect } from 'mongoose';
import { config } from 'dotenv';
config();

const connectdb = connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB')).catch(err => console.log(err));


export default connectdb;