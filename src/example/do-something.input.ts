import { InputType } from '@nestjs/graphql';

@InputType()
export class DoSomethingInput {
  name?: string;
  isEnabled?: boolean;
}
