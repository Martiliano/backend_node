/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MongoClient, Collection, ObjectId } from 'mongodb';

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = new MongoClient(uri);

    await this.client.connect();
  },

  async disconnect(): Promise<void> {
    await this.client.close();
    this.client = null;
  },

  async getCollection(name: string): Promise<Collection> {
    return this.client.db().collection(name);
  },

  map(data: any): any {
    const { _id, ...collectionWithoutId } = data;
    return Object.assign(
      {},
      { id: new ObjectId(_id).toHexString() },
      collectionWithoutId,
    );
  },

  mapCollection(collection: any[]): any[] {
    return collection.map((c) => MongoHelper.map(c));
  },
};
