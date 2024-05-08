export default ObjectId

declare const ObjectId: ObjectIdCtor;

declare interface ObjectId {
  readonly id: string;
  readonly str: string;

  toHexString(): string;
  equals(other: ObjectId): boolean;
  getTimestamp(): Date;
}

declare interface ObjectIdCtor {
  (): ObjectId
  (time: number): ObjectId
  (hexString: string): ObjectId
  (idString: string): ObjectId
  (array: number[]): ObjectId
  (buffer: Buffer): ObjectId

  new(): ObjectId
  new(time: number): ObjectId
  new(hexString: string): ObjectId
  new(idString: string): ObjectId
  new(array: number[]): ObjectId
  new(buffer: Buffer): ObjectId


  createFromTime(time: number): ObjectId;
  createFromHexString(hexString: string): ObjectId;
  isValid(hexString: string): boolean;
  isValid(ObjectId: ObjectId): boolean;
  toString(): string;
}
