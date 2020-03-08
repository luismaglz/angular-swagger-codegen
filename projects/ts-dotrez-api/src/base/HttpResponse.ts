import { Headers } from './Headers';

export class HttpResponse<T = any> {
  constructor(
    public response: T,
    public status: number,
    public headers?: Headers
  ) {}
}
