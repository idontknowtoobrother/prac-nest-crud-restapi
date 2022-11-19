import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    
    @Prop()
    firstname: String;

    @Prop()
    lastname: String;

    @Prop()
    stuid: String;

}

export const UserSchema = SchemaFactory.createForClass(User);