import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DoSomethingInput } from './do-something.input';

@Resolver()
export class ExampleResolver {
  @Query(returns => String)
  hello(): string {
    return 'Hello, world!';
  }

  @Mutation(returns => String)
  doSomething(@Args('input') input: DoSomethingInput): string {
    return 'Done!';
  }
}
