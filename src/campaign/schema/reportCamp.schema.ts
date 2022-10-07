// import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ReportEnum } from './reportCamp.dto';

export type ReportCampDocument = ReportCamp & Document & {
  _id: any;
  _doc: any;
};


@Schema({
  timestamps: true
})
export class ReportCamp extends Document {
  @Prop({ required: true })
  campaignSlug: string;
  @Prop({ 
    required: true,
    type: String,
    enum: ReportEnum,
    default: ReportEnum.Harmful
  })
  reportCampType: ReportEnum;
  @Prop({ required: true })
  reportCampMessage: string;
}

export const ReportCampSchema = SchemaFactory.createForClass(ReportCamp);
