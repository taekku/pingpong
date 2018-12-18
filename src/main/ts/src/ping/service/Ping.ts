import { RequestKind } from "./RequestKind";

export class Ping {
    private mId: string; // public ID
    private mType: RequestKind; // request kind
    private data: any;
    constructor(mId:string, mType: RequestKind){
        this.mId = mId;
        this.mType = mType;
    }
}