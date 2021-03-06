import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/entity/user.schema';
import { Campaign } from './campaign.schema';

export type UpdateDocument = Update & Document;

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
export class Update {
  @Prop({ type: Types.ObjectId, ref: 'Campaign' })
  campaign: Record<string, Campaign>;
  @Prop({ required: true })
  body: string;
}

export const UpdateSchema = SchemaFactory.createForClass(Update);
