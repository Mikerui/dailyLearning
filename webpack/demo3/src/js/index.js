const fn = ()=>{
  console.log('1222');
}
fn()

// 筛选出没有点击过的额页面
let str = ''
function getProcessing(arr,menuName){  
  if(arr && arr.length > 0){
    arr.map(res=>{
      if(menuName.indexOf(res.name) === -1 && res.mark){
        str = str + '、' + res.name
      }      
      const children = res.children
      if(children && children.length > 0) getProcessing(children,menuName)
    })
  } 
}

// 管控
const str1 = '进港操作异常监控出港操作异常监控未实名实时预测快件运单状态查询收件实时24点签收率发件派件到件揽派违规查询 进港签收查询签收统计 出港签收查询签收第三方签收查询月收件查询实名制查询 收寄件网点大货费业务员未签收预警业务员一二派数据 星联实时派签查询大货录单3天未出库预警扫描录单未捆绑查询下级网点24小时签收率月派件查询退件下级网点未签收预警月发件查询 客服工作跟踪扫描员扫描量统计 星联实时揽收查询扫描数据总分析业务员签收时间段未建包查询考核组签收率未规范称重查询业务员一二派设置时效件查询设置修改记录查询第三方签收月到件查询留仓件查询下级网点一二派数据图片上传同城件查询操作大屏配置自提件查询下级网点一二派设置自收自派件查询下级网点签收时间段'
const obj1 =  {
  name: "网点管控工作台",
  children: [
      {
          name: '进出港跟单',
          children: [
              {
                  name: "签收管控",
                  children: [
                      {
                          name: "业务员未签收预警",
                          mark: "menu_noSignWarnSalesman"
                      },
                      {
                          name: "实时24点签收率",
                          mark: "menu_dispSignRate"
                      },
                      {
                          name: "业务员一二派数据",
                          mark: "menu_salesmanCheckBill"
                      },
                      {
                          name: "考核组签收率",
                          mark: "menu_groupSignRateSalesman"
                      },
                      {
                          name: "第三方签收查询",
                          mark: "menu_thirdSignSearch"
                      },
                      {
                          name: "业务员签收时间段",
                          mark: "menu_salesSign"
                      },
                      {
                          name: "业务员一二派设置",
                          mark: "menu_checkSetting"
                      },
                      {
                          name: "设置修改记录查询",
                          mark: "menu_querySettingRecord"
                      },
                      {
                          name: "下级网点未签收预警",
                          mark: "menu_noSignWarnNet"
                      },
                      {
                          name: "下级网点24小时签收率",
                          mark: "menu_networkDaysSignRate"
                      },
                      {
                          name: "下级网点一二派数据",
                          mark: "menu_networkCheckBill"
                      },
                      {
                          name: "下级网点签收时间段",
                          mark: "menu_subNodeSign"
                      },
                      {
                          name: "下级网点一二派设置",
                          mark: "menu_networkCheckSetting"
                      }
                  ]
              },
              {
                  name: "进出港跟单",
                  children: [
                      {
                          name: " 进港签收查询",
                          mark: "menu_documentaryMonitor"
                      },
                      {
                          name: " 出港签收查询",
                          mark: "menu_departure"
                      },
                      {
                          name: " 星联实时派签查询",
                          mark: "menu_starLeague"
                      },
                      {
                          name: " 星联实时揽收查询",
                          mark: "menu_starCollect"
                      },
                      {
                          name: "收寄件网点大货费",
                          mark: "menu_bulkCost",
                          children: []
                      },
                      {
                          name: " 快件运单状态查询",
                          mark: "menu_waybillStatus"
                      }
                  ]
              },
              {
                  name: "客服工作跟踪",
                  children: [
                      {
                          name: " 客服工作跟踪",
                          mark: "menu_customerService"
                      }
                  ]
              }
          ]
      },
      {
          name: '操作异常跟进',
          children: [
              {
                  name: "出港异常跟进",
                  children: [
                      {
                          name: "出港操作异常监控",
                          mark: "menu_packMonitor"
                      },
                      {
                          name: "未实名实时预测",
                          mark: "menu_noRealNameToday"
                      },

                      {
                          name: "3天未出库预警",
                          mark: "menu_warningNoDelivery"
                      },
                      {
                          name: "未建包查询",
                          mark: "menu_unbuiltPackage"
                      },
                      {
                          name: "未捆绑查询",
                          mark: "menu_unbundled"
                      },
                      {
                          name: "未规范称重查询",
                          mark: "menu_noStandard"
                      },
                      {
                          name: "留仓件查询",
                          mark: "menu_warehouseList"
                      }
                  ]
              },
              {
                  name: "进港异常跟进",
                  children: [
                      {
                          name: "进港操作异常监控",
                          mark: "menu_reachMonitor"
                      }
                  ]
              },
              {
                  name: "操作质量查询",
                  children: [
                      {
                          name: "实名制查询",
                          mark: "menu_realName"
                      },
                      // {
                      //     name: "无收件扫描查询",
                      //     mark: "menu_noReceiveScan"
                      // },
                      // {
                      //     name: "无发件扫描查询",
                      //     mark: "menu_noDistributeScan"
                      // },
                      // {
                      //     name: "无派件扫描查询",
                      //     mark: "menu_noCollectScan"
                      // },
                      // {
                      //     name: "无称重扫描查询",
                      //     mark: "menu_noCollectWeight"
                      // },
                      // {
                      //     name: "先签后派查询",
                      //     mark: "menu_errorScanOrder"
                      // },
                      {
                          name: "揽派违规查询",
                          mark: "menu_violation"
                      },
                      // {
                      //     name: "数据上传延迟查询",
                      //     mark: "menu_dataUploadDelay"
                      // },
                      {
                          name: "录单率查询",
                          mark: "menu_recordRate"
                      }
                  ]
              }

          ]
      },
      {
          name: '基础扫描数据',
          children: [
              {
                  name: "扫描清单查询",
                  children: [
                      {
                          name: "收件",
                          mark: "menu_newReceiveQuery"
                      },
                      {
                          name: "发件",
                          mark: "menu_newSendQuery"
                      },
                      {
                          name: "到件",
                          mark: "menu_newArrivalQuery"
                      },
                      {
                          name: "派件",
                          mark: "menu_newAssignQuery"
                      },
                      {
                          name: "签收",
                          mark: "menu_newSignQuery"
                      },
                      {
                          name: "退件",
                          mark: "menu_newBackQuery"
                      }
                  ]
              },
              {
                  name: "特殊件查询",
                  children: [
                      {
                          name: "自提件查询",
                          mark: "menu_selfLifting"
                      },
                      {
                          name: "同城件查询",
                          mark: "menu_cityParts"
                      },
                      {
                          name: "同城当日达件查询",
                          mark: "menu_cityDaysParts"
                      },
                      {
                          name: "自收自派件查询",
                          mark: "menu_selfCollection"
                      },
                      {
                          name: "时效件查询",
                          mark: "menu_effectiveExpress"
                      }
                  ]
              },
              {
                  name: "数据统计",
                  children: [
                      {
                          name: "月收件查询",
                          mark: "menu_monthshou"
                      },
                      {
                          name: "月发件查询",
                          mark: "menu_monthSend"
                      },
                      {
                          name: "月到件查询",
                          mark: "menu_monthCome"
                      },
                      {
                          name: "月派件查询",
                          mark: "menu_monthDispatch"
                      },
                      {
                          name: "签收统计",
                          mark: "menu_signStatistic"
                      },
                      {
                          name: "扫描员扫描量统计",
                          mark: "menu_scanerScanNum"
                      },
                      {
                          name: "扫描数据总分析",
                          mark: "menu_scanAnalyse"
                      },
                      {
                          name: "第三方签收",
                          mark: "menu_thirdPartySignature"
                      }
                  ]
              }

          ]
      },
      {
          name: '扫描录单',
          children: [
              {
                  name: "录单管理",
                  children: [
                      {
                          name: "扫描录单",
                          mark: "menu_scanInput"
                      },
                      {
                          name: "图片上传",
                          mark: "menu_picUpload"
                      },
                      {
                          name: "大货录单",
                          mark: "menu_dahuoInput"
                      }
                  ]
              }

          ]
      },
      {
          name: '操作大屏',
          children: [
              {
                  name: "操作大屏",
                  children: [
                      {
                          name: "大屏配置",
                          mark: "menu_configuration"
                      },
                      {
                          name: '操作大屏',
                          mark: 'menu_mainPage',
                          children: []
                      },
                  ]
              }

          ]
      }
  ]
}

// 财务
const str2 = '收中转费/客户运费业务员预付款预付款流水报表付业务员承包区派费收派件代收到付结算对象配置-工号/客户新报价-客户运费报价新报价-中转费报价发件手工单处理新报价-派费报价付发件代收到付业务员罚款分摊对应付中转费账单客户费用审核收退件转账拦截费网点小金库（日记账）结算规则设置业务员中心-我的预付款收二级中转费业务员中心-我的中转费发件异常单处理收有偿/续重派费业务员中心-我的客户运费均重账单计算老报价-自营包仓费固定费设置业务员中心-我的代收到付客户周期账单老报价-发件代收到付手续费对应收派费账单老报价-派件代收到付手续费提成业务员中心-我的派费收包仓和固定费新报价-均重模式报价收丰巢面单费结算交易类型配置应收应付账单业务员中心-果实看板对派件代收到付费固定费用项维护录入业务员中心-我的客户报价老报价-下级包仓费固定费设置客户异常处理下级网点应收应付账单面单成本包中转费分摊业务员中心-其他账单对二级中转费下级网点管理客户发件毛利润分析业务员发件毛利润分析对有偿/续重派费业务员中心-我的签收率网点发件毛利润对发件代收到付费对退件/转账/拦截费业务员中心-我的应收应付账单有偿派费分析统计业务员中心-我的基础信息对包仓和固定费网点发件区域重量段分析网点派件重量段分析业务员中心-我的报价确认上级网点应收应付账单业务员中心-我的客户信息客户合同管理'

const obj2 = {
  name: "新结算中心（财务工作台）",
  children: [
      {
          name: "财务看板",
          children: [{
              name: "结算指引",
              mark: "menu_guide"
          }]
      },
      {
          name: "算网点账",
          children: [
              // {
              //     name: '结算对象配置-工号/客户',
              //     mark: 'menu_objConfig',
              // },
              {
                  name: '结算对象配置-工号',
                  mark: 'menu_numberManagement',
              },
              {
                  name: '结算对象配置-客户',
                  mark: 'menu_customerManagement',
              },
              {
                  name: '结算规则设置',
                  mark: 'menu_settlement',
              }, {
                  name: "发件异常单处理",
                  mark: "menu_billPreprocess",
              },
              {
                  name: "发件手工单处理",
                  mark: "menu_handListProcess",
              },
              // {
              //     name: '线下电子面单账单',
              //     mark: 'menu_underLine',
              // },
              // {
              //     name: '码上寄账单',
              //     mark: 'menu_immediatelyBills',
              // },
              {
                  name: "均重账单计算",
                  mark: "menu_checkInterchangeFee",
              },
              {
                  name: "收中转费/客户运费",
                  mark: "menu_sendReceiveFee",
              },
              // {
              //     name: '原寄件账单编辑查询',
              //     mark: 'menu_sendBills',
              // },
              {
                  name: "客户费用审核",
                  mark: "menu_customerBillCheckNew",
              },
              {
                  name: "客户周期账单",
                  mark: "menu_customerCircleBills",
              },
              {
                  name: "客户异常处理",
                  mark: "menu_customerException",
              },
              {
                  name: '收包仓和固定费',
                  mark: 'menu_packageBill',
              },
              {
                  name: "收二级中转费",
                  mark: "menu_twoTransferFeeBillNew",
              },
              {
                  name: "包中转费分摊",
                  mark: "menu_transferFeeShare",
              },

              {
                  name: "收丰巢面单费",
                  mark: "menu_fengChaoBills",
              },
              {
                  name: "收有偿/续重派费",
                  mark: "menu_addedWeightFeeNew",
              },
              {
                  name: "收退件转账拦截费",
                  mark: "menu_returnTransferInterceptFee",
              },
              {
                  name: '付发件代收到付',
                  mark: 'menu_sendMailFeeOrPayFee',
              },
              {
                  name: "付业务员承包区派费",
                  mark: "menu_sendPayFee",
              },
              {
                  name: '收派件代收到付',
                  mark: 'menu_collectFee',
              },
              // {
              //     name: '原派件账单编辑查询',
              //     mark: 'menu_sendFee',
              // },
              {
                  name: '业务员罚款分摊',
                  mark: 'menu_branchFine',
              },
              {
                  name: '罚款分摊',
                  mark: 'menu_apportionment',
              },
          ]
      },
      {
          name: "管网点账",
          children: [
              {
                  name: '业务员预付款',
                  mark: 'menu_sendAdvances',
              },
              {
                  name: '预付款流水报表',
                  mark: 'menu_advanceFlowStatement',
              },
              {
                  name: "客户合同管理",
                  mark: "menu_customerContractManage",
                  children: []
              },
              {
                  name: '固定费用项维护录入',
                  mark: 'menu_fixedFeeInput',
              },
              {
                  name: '网点小金库（日记账）',
                  mark: 'menu_wallet',
              },
              {
                  name: '结算交易类型配置',
                  mark: 'menu_tradeType',
              },
              {
                  name: '面单成本',
                  mark: 'menu_waybill',
              },
              {
                  name: '应收应付账单',
                  mark: 'menu_selfAccountsPayable',
              },
              {
                  name: '下级包仓费固定费账单',
                  mark: 'menu_subPackageBill',
              },
              {
                  name: '下级网点应收应付账单',
                  mark: 'menu_subNetRecPayBill',
              },
              {
                  name: '上级网点应收应付账单',
                  mark: 'menu_lastNetRecPayBill',
              },
              {
                  name: '下级网点管理',
                  mark: 'menu_lowerDot',
              },
          ]
      },
      {
          name: '对网点账',
          children: [
              {
                  name: "对应付中转费账单",
                  mark: "menu_sendFeeBill",
              },
              {
                  name: "对应收派费账单",
                  mark: "menu_dispatchFeeBill",
              },
              {
                  name: '对包仓和固定费',
                  mark: 'menu_checkPackageBill',
              },
              {
                  name: '对退件/转账/拦截费',
                  mark: 'menu_returnTransferInterceptFeeCheck'
              },
              {
                  name: '对有偿/续重派费',
                  mark: 'menu_addedWeightFeeCheck'
              },
              {
                  name: '对发件代收到付费',
                  mark: 'menu_nextSendGoodsFeeOrPayFee'
              },
              {
                  name: '对二级中转费',
                  mark: 'menu_twoTransferFeeCheck'
              },
              {
                  name: '对派件代收到付费',
                  mark: 'menu_nextCollectFee'
              }
          ]
      },
      {
          name: '财务分析',
          children: [{
              name: '业务员发件毛利润分析',
              mark: 'menu_salesAnalysis',
          },
              {
                  name: '客户发件毛利润分析',
                  mark: 'menu_customerShipment',
              },
              {
                  name: '网点发件毛利润',
                  mark: 'menu_profit',
              },
              {
                  name: '网点派件重量段分析',
                  mark: 'menu_partsWeightAnalysis',
              },
              {
                  name: '网点发件区域重量段分析',
                  mark: 'menu_sendWeightAnalysis',
              },
              {
                  name: '有偿派费分析统计',
                  mark: 'menu_distributionFee',
              },
          ],
      }
  ]
}




getProcessing(obj1.children,str1)
console.log(str,'str1');
str = ''
getProcessing(obj2.children,str2)
console.log(str,'str2');

