import React from 'react';
import PrivateRoute from './PrivateRoute';
import LoadableComponent from "./LoadableComponent";
import { Switch } from 'react-router-dom';

const RealTime = LoadableComponent(()=>import('../routes/analyse/realTime'));
const TransactionData = LoadableComponent(()=>import('../routes/analyse/transactionData'));

const All = LoadableComponent(()=>import('../routes/order/all'));
const CheckPending = LoadableComponent(()=>import('../routes/order/checkPending'));
const Unpaid = LoadableComponent(()=>import('../routes/order/unpaid'));
const WaitSending = LoadableComponent(()=>import('../routes/order/waitSending'));
const WaitReceiving = LoadableComponent(()=>import('../routes/order/waitReceiving'));
const Shipped = LoadableComponent(()=>import('../routes/order/shipped'));
const Cancelled = LoadableComponent(()=>import('../routes/order/cancelled'));
const Shipments = LoadableComponent(()=>import('../routes/order/shipments'));
const Abnormal = LoadableComponent(()=>import('../routes/order/abnormal'));

const Commodity = LoadableComponent(()=>import('../routes/commodity/commodity'));
const Classify = LoadableComponent(()=>import('../routes/commodity/classify'));
const Property = LoadableComponent(()=>import('../routes/commodity/property'));

const Seckill = LoadableComponent(()=>import('../routes/marketing/seckill'));
const SpecialSale = LoadableComponent(()=>import('../routes/marketing/specialSale'));
const Discounts = LoadableComponent(()=>import('../routes/marketing/discounts'));

const BrandCenter = LoadableComponent(()=>import('../routes/brand/brandCenter'));
const Designer = LoadableComponent(()=>import('../routes/brand/designer'));
const Own = LoadableComponent(()=>import('../routes/brand/own'));

const ShopHome = LoadableComponent(()=>import('../routes/shop/shopHome'));
const HotCake = LoadableComponent(()=>import('../routes/shop/hotCake'));
const DesignerStyle = LoadableComponent(()=>import('../routes/shop/designerStyle'));
const OwnStyle = LoadableComponent(()=>import('../routes/shop/ownStyle'));
const Model = LoadableComponent(()=>import('../routes/shop/model'));

const Branch = LoadableComponent(()=>import('../routes/logistics/branch'));
const Logistics = LoadableComponent(()=>import('../routes/logistics/logistics'));

const Merchant = LoadableComponent(()=>import('../routes/merchant/merchant'));
const Audit = LoadableComponent(()=>import('../routes/audit/audit'));
const Message = LoadableComponent(()=>import('../routes/message/message'));
const Specification = LoadableComponent(()=>import('../routes/specification/specification'));
const Setting = LoadableComponent(()=>import('../routes/setting/setting'));


class Home extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute path="/RealTime" component={RealTime} />
          <PrivateRoute path="/TransactionData" component={TransactionData} />

          <PrivateRoute path="/All" component={All} />
          <PrivateRoute path="/CheckPending" component={CheckPending} />
          <PrivateRoute path="/WaitSending" component={WaitSending} />
          <PrivateRoute path="/WaitReceiving" component={WaitReceiving} />
          <PrivateRoute path="/Cancelled" component={Cancelled} />
          <PrivateRoute path="/Shipments" component={Shipments} />
          <PrivateRoute path="/Abnormal" component={Abnormal} />

          <PrivateRoute path="/Commodity" component={Commodity} />
          <PrivateRoute path="/Classify" component={Classify} />
          <PrivateRoute path="/Property" component={Property} />

          <PrivateRoute path="/Seckill" component={Seckill} />
          <PrivateRoute path="/SpecialSale" component={SpecialSale} />
          <PrivateRoute path="/Discounts" component={Discounts} />

          <PrivateRoute path="/BrandCenter" component={BrandCenter} />
          <PrivateRoute path="/Designer" component={Designer} />
          <PrivateRoute path="/Own" component={Own} />

          <PrivateRoute path="/ShopHome" component={ShopHome} />
          <PrivateRoute path="/HotCake" component={HotCake} />
          <PrivateRoute path="/DesignerStyle" component={DesignerStyle} />
          <PrivateRoute path="/OwnStyle" component={OwnStyle} />
          <PrivateRoute path="/Model" component={Model} />

          <PrivateRoute path="/Branch" component={Branch} />
          <PrivateRoute path="/Logistics" component={Logistics} />

          <PrivateRoute path="/Merchant" component={Merchant} />
          <PrivateRoute path="/Audit" component={Audit} />
          <PrivateRoute path="/Message" component={Message} />
          <PrivateRoute path="/Specification" component={Specification} />
          <PrivateRoute path="/Setting" component={Setting} />

          <PrivateRoute path="/" component={RealTime} />
        </Switch>
      </div>

    )
  }
}

export default Home;