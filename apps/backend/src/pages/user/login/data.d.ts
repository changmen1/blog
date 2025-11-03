declare namespace LoginModal {
  interface IReq {
    code: string;
    uuid: string;
    password: string;
    username: string;
  }

  interface IHisReq {
    /**用户名 */
    username: string
    /**密码 */
    password: string
    /**授权认证-PASSWORD */
    grantType: string
  }
}

declare namespace UserModal {
  interface IUserPrmtr {
    code:number
    permissions: [];
    roles: [];
    routers: [];
    user: IUser;
  }
  interface IUser {
    admin: boolean;
    /**联系方式 */
    contractNumber: string;
    /**科室id */
    deptId: string;
    /**科室名称 */
    deptName: string;
    /**性别 */
    gender: string;
    hospId: string;
    hospName: string;
    nickName: string;
    picture: string;
    id: string;
  }
  interface IPassword {
    /**主键	 */
    id: string;
    /**旧密码 */
    oldPassword: string;
    /**密码 */
    password: string;
    /**确认密码 */
    confirmPassword: string;
  }
  /**用户可用资源 */
  interface IResources {
    /**是否启用URI/按钮权限 */
    enabled: boolean
    /**是否区分大小写 */
    caseSensitive: boolean
    /**拥有的资源编码 */
    resourceList: []
    /**拥有的菜单路由 */
    routerList: IRouteItem[]
    /**拥有的角色编码 */
    roleList: []

  }
  interface IRouteItem {
    children?: [],
    name: string
  }
}

declare namespace WeleCome {
  /**入科诊断集合 */
  interface IRkZdInfoList {
    /**id */
    id: number
    /**诊断代码 */
    zdIdent: string
    /**诊断名称 */
    zdName: string
    /**诊断标识 */
    zdSign: string
  }
  /**入科诊断列表 */
  interface IRkZdList {
    /**id */
    id: number
    /**诊断代码 */
    zdIdent: string
    /**诊断名称 */
    zdName: string
    /**诊断标识 */
    zdSign: string
  }
  /**设备标识信息 */
  interface IPatientBindOutputVO {
    /**设备名称 */
    brandName: string
    brandTypeCode: string
    /**设备标识 */
    devCode: string
    /**设备类型 */
    devType: number
    id: string
  }

  /**患者信息 */
  interface IicuOnlinePatients {
    /**true 是 false 否 */
    isKongchuang: boolean
    id: number
    /**患者住院号 */
    hospitalNumber: string
    /**患者识别号 */
    patientIdent: string
    /**患者性别 0其他, 1男, 2女	 */
    sex: number
    /**年龄 */
    age: number
    /**患者姓名 */
    name: string
    /**入科时间 */
    rkTime: string
    /**入科诊断内容（多个用分号隔开） */
    rkZdContent: string
    /**床号 */
    bedNumber: number
    /**护理等级 0=特级/1=一级/2=二级/3=三级 */
    nursingLevel: number
    /**出生日期 */
    dateOfBirth: string
    /**入院时间 */
    wardInTime: string
    /**数据创建时间（his同步用） */
    createTime: string
    /**数据更新时间（his同步用） */
    modifyTime: string
    /**患者绑定的设备识别号 */
    bindDevList: string[]
    /**主治医师 */
    zzDoctorName: string
    /**联系电话 */
    contactsPhone: string
    /**身份证号 */
    identCard: string
    /**过敏史 */
    gmHistory: string
    /**费别类型 */
    fblx: string
    /**责任护士 */
    nurseName: string
    /**欠费标识 0代表无 1代表有 */
    qfbs: string
    /**过敏标识 0代表无 1代表有 */
    gmbs: number
    /**跌倒标识 0代表无 1代表有 */
    ddbs: number
    /**压疮标识 0代表无 1代表有	 */
    ycbs: number
    /**危急等级(0=一般病人 1=重危病人 2=急救病人) */
    emeLevel: number
    /**0 否 1 是 外科手术患者VTE 显示V粉红色 */
    wksshzvte: number
    /**0 否 1 是 内科患者VTE 显示V 红色 */
    nkhzvte: number
    /**0 否 1 是 是否径中 显示径 */
    sfjz: number
  }

  /**患者标识统计 */
  interface IicuBedStatus {
    /**今日转入的患者数量 */
    transferredInToday: number,
    /**今日转出的患者数量 */
    transferredOutToday: number,
    /**当前在床患者数量 */
    currentBedsOccupied: number,
    /**今日死亡的患者数量 */
    deathsToday: number,
    /**今日空床数量 */
    emptyBedsToday: number,
    /**接受 CRRT 治疗的患者数量 */
    crrtPatients: number,
    /**	接受 ECMO 治疗的患者数量 */
    ecmoPatients: number,
    /**	接受俯卧位治疗的患者数量 */
    pronePositionPatients: number,
    /**	接受气管镜检查的患者数量 */
    bronchoscopyPatients: number,
    /**	欠费患者人数 */
    arrearsCount: number,
    /**	过敏患者人数 */
    allergyCount: number,
    /**	跌倒坠床患者人数 */
    fallBedCount: number,
    /**	压疮患者人数 */
    pressureUlcerCount: number,
    /**	VTE（静脉血栓栓塞症）患者人数 */
    vteCount: number,
    /**	NVTE（非静脉血栓栓塞症）患者人数 */
    nvteCount: number,
    /**径（可能指其他相关评估指标，具体含义需进一步确认） */
    diameterCount: number
  }

  /**病人首页 */
  interface IPatients {
    icuBedStatus: IicuBedStatus
    icuOnlinePatients: IicuOnlinePatients[]
  }
  /**病人首页查询 */
  interface IHome {
    myPatientsOnly: boolean
  }
}
