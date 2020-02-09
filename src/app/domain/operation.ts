export interface Operation {
  id : number;
  operationDate : string;
  operationClass : string;
  transType : string;
  amount : number;
  currency : string;
  endingBalance : number;
  description : string;
  expanded: boolean;
}
