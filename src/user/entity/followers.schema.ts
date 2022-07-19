import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/entity/user.schema';

export type FollowerDocument = Follower & Document;

@ObjectType()
@Schema({
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      return ret;
    },
  },
})
export class Follower {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: Record<string, User>;
  @Prop({ type: Types.ObjectId, ref: 'User', default: [] })
  followers: User[] | string[];
  @Prop({ type: Types.ObjectId, ref: 'User', default: [] })
  following: User[] | string[];
  @Prop({ default: 0 })
  followersCount: number;
  @Prop({ default: 0 })
  followingCount: number;
}

export const FollowerSchema = SchemaFactory.createForClass(Follower);
