import { DocumentNode } from "graphql-typed";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
export namespace OrderManagementVisitShopRenderAfterQueryPartialData {
  export interface OrderReturns {
    __typename?: "Metafield" | null;
    value?: string | null;
  }
  export interface Order {
    __typename?: "Order" | null;
    id?: string | null;
    email?: string | null;
    returns?: OrderManagementVisitShopRenderAfterQueryPartialData.OrderReturns | null;
  }
  export interface ShopMyshopifyDomain {
    __typename?: "Domain" | null;
    host?: string | null;
  }
  export interface Shop {
    __typename?: "Shop" | null;
    id?: string | null;
    myshopifyDomain?: OrderManagementVisitShopRenderAfterQueryPartialData.ShopMyshopifyDomain | null;
  }
}
export interface OrderManagementVisitShopRenderAfterQueryPartialData {
  order?: OrderManagementVisitShopRenderAfterQueryPartialData.Order | null;
  shop?: OrderManagementVisitShopRenderAfterQueryPartialData.Shop | null;
}
export namespace OrderManagementVisitShopRenderAfterQueryData {
  export interface OrderReturns {
    __typename: "Metafield";
    value: string;
  }
  export interface Order {
    __typename: "Order";
    id: string;
    email?: string | null;
    returns?: OrderManagementVisitShopRenderAfterQueryData.OrderReturns | null;
  }
  export interface ShopMyshopifyDomain {
    __typename: "Domain";
    host: string;
  }
  export interface Shop {
    __typename: "Shop";
    id: string;
    myshopifyDomain: OrderManagementVisitShopRenderAfterQueryData.ShopMyshopifyDomain;
  }
}
export interface OrderManagementVisitShopRenderAfterQueryData {
  order?: OrderManagementVisitShopRenderAfterQueryData.Order | null;
  shop?: OrderManagementVisitShopRenderAfterQueryData.Shop | null;
}
declare const document: DocumentNode<OrderManagementVisitShopRenderAfterQueryData, never, OrderManagementVisitShopRenderAfterQueryPartialData> & TypedDocumentNode<OrderManagementVisitShopRenderAfterQueryData, {
  [key: string]: never;
}>;
export default document;