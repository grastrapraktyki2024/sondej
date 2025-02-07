import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BmiLogDocument = BmiLog & Document;

@Schema()
export class BmiLog {
  @Prop()
  weight: number;

  @Prop()
  height: number;

  @Prop()
  bmi: number;

  @Prop()
  date: Date;
}

export const BmiLogSchema = SchemaFactory.createForClass(BmiLog);
