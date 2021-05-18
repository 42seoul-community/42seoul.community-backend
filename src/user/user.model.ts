import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class UserModel {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  phone: string;
  @Field()
  fortytwoIntraId: string;
  @Field()
  created_at: Date;
  @Field()
  updated_at: Date;
}
