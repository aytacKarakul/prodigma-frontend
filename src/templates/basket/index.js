import { basketSummaryBtnClick, summaryDiscountTrigger } from "./summary";
import BasketAddressInvoiceTab from "./addresses";

export default class Basket {
  constructor() {
    new BasketAddressInvoiceTab();
    basketSummaryBtnClick();
    summaryDiscountTrigger();
  }
}
