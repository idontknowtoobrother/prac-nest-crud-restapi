import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    
    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    stuid: string;

}

export const UserSchema = SchemaFactory.createForClass(User);