const menus = {
  defOpe: ["analyse"],
  defSel: ["/RealTime"],
  data: [
    {
      title: '数据分析', // analyse
      icon: 'pie-chart',
      key: 'analyse',
      item: [
        { key: '/RealTime', title: '实时数据' },
        { key: '/TransactionData', title: '交易数据' },
      ]
    },
    {
      title: '订单管理', // order
      icon: 'file-text',
      key: 'order',
      item: [
        { key: '/All', title: '全部订单' },
        { key: '/CheckPending', title: '待审核订单' },
        { key: '/Unpaid', title: '待支付订单' },
        { key: '/WaitSending', title: '待发货订单' },
        { key: '/WaitReceiving', title: '待收货订单' },
        { key: '/Shipped', title: '已发货订单' },
        { key: '/Cancelled', title: '已取消订单' },
        { key: '/Shipments', title: '发货管理' },
        { key: '/Abnormal', title: '异常订单' },
      ]
    },
    {
      title: '商品管理', // commodity
      icon: 'shopping-cart',
      key: 'commodity',
      item: [
        { key: '/Commodity', title: '商品管理' },
        { key: '/Classify', title: '商品分类' },
        { key: '/Property', title: '商品属性' },
      ]
    },
    {
      title: '营销管理', // marketing
      icon: 'select',
      key: 'marketing',
      item: [
        { key: '/Seckill', title: '秒杀管理' },
        { key: '/SpecialSale', title: '特卖管理' },
        { key: '/Discounts', title: '优惠券管理' },
      ]
    },
    {
      title: '品牌管理', // brand
      icon: 'tag',
      key: 'brand',
      item: [
        { key: '/BrandCenter', title: '品牌中心' },
        { key: '/Designer', title: '设计师品牌' },
        { key: '/Own', title: '自有品牌' },
      ]
    },
    {
      title: '店铺管理', // shop
      icon: 'shop',
      key: 'shop',
      item: [
        { key: '/ShopHome', title: '店铺首页' },
        { key: '/HotCake', title: '爆款设计' },
        { key: '/DesignerStyle', title: '设计师款式' },
        { key: '/OwnStyle', title: '自有款式' },
        { key: '/Model', title: '版型库' },
      ]
    },
    {
      title: '物流管理', // logistics
      icon: 'car',
      key: 'logistics',
      item: [
        { key: '/Branch', title: '网点管理' },
        { key: '/Logistics', title: '物流管理' },
      ]
    },
    {
      title: '商家管理', // merchant
      icon: 'schedule',
      key: 'merchant',
      item: [
        { key: '/Merchant', title: '商家管理' },
      ]
    },
    {
      title: '审核管理', //audit
      icon: 'safety',
      key: 'audit',
      item: [
        { key: '/Audit', title: '审核管理' },
      ]
    },
    {
      title: '留言管理', // message
      icon: 'mail',
      key: 'message',
      item: [
        { key: '/Message', title: '留言管理' },
      ]
    }, {
      title: '规格管理', //specification
      icon: 'bulb',
      key: 'specification',
      item: [
        { key: '/Specification', title: '规格管理' },
      ]
    },
    {
      title: '系统设置', // setting
      icon: 'setting',
      key: 'setting',
      item: [
        { key: '/Setting', title: '系统设置' },
      ]
    }
  ]
}

export default menus;